// Build-time Strava fetch.
//
// This module runs ONLY during the Astro build (in page frontmatter), never in
// the browser. It reads credentials from server-side env vars (no PUBLIC_
// prefix, so Astro never exposes them to the client bundle) and returns a
// trimmed list of runs that gets baked into the static HTML as JSON.
//
// If credentials are missing or the API call fails, it returns [] so the build
// never breaks — the pages just render without run data.

export async function getStravaRuns(limit) {
  const clientId = import.meta.env.STRAVA_CLIENT_ID;
  const clientSecret = import.meta.env.STRAVA_CLIENT_SECRET;
  const refreshToken = import.meta.env.STRAVA_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    console.warn('[strava] Missing STRAVA_* env vars — skipping build-time fetch.');
    return [];
  }

  try {
    const tokenRes = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
      }),
    });
    const tokenData = await tokenRes.json();

    if (!tokenData.access_token) {
      console.warn('[strava] Token refresh returned no access_token.');
      return [];
    }

    const actRes = await fetch(
      `https://www.strava.com/api/v3/athlete/activities?access_token=${tokenData.access_token}&per_page=${limit}`
    );
    const activities = await actRes.json();

    if (!Array.isArray(activities)) {
      console.warn('[strava] Unexpected activities response.');
      return [];
    }

    // Return only the fields the client map needs — no tokens leave the server.
    return activities.map((a) => ({
      id: a.id,
      name: a.name,
      distance: a.distance,
      moving_time: a.moving_time,
      start_date_local: a.start_date_local,
      start_latlng: a.start_latlng,
      summary_polyline: a.map?.summary_polyline || null,
    }));
  } catch (err) {
    console.error('[strava] Build-time fetch failed:', err);
    return [];
  }
}

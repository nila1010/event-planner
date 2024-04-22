export async function AddEvents(formData, table) {
  const headersList = {
    Accept: "application/json",
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    prefer: "return=representation",
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify({
    title: formData.get("name"),
    dato: formData.get("date"),
    description: formData.get("description"),
  });

  const response = await fetch("https://lwvdzfdgkmziuewtursm.supabase.co/rest/v1/" + table, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  const data = await response.json();

  const id = data[0].id;

  return id;
}

export async function GetEventPage(parms) {
  const slug = parms.slug;
  const headersList = {
    Accept: "application/json",
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };

  const response = await fetch("https://lwvdzfdgkmziuewtursm.supabase.co/rest/v1/events?id=eq." + slug, {
    headers: headersList,
    cache: "no-store",
  });

  const data = await response.json();
  const eventInfo = data[0];

  const commentsResponse = await fetch("https://lwvdzfdgkmziuewtursm.supabase.co/rest/v1/events_comments?event_id=eq." + slug, {
    headers: headersList,
    cache: "no-store",
  });

  const comment = await commentsResponse.json();

  return { eventInfo, comment };
}

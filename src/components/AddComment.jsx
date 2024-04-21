"use client";
import { useState } from "react";

export default function AddComment({ id }) {
  const [userComment, setUserComment] = useState([]);
  async function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const headersList = {
      Accept: "application/json",
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      prefer: "return=representation",
      "Content-Type": "application/json",
    };

    const bodyContent = JSON.stringify({
      name: formData.get("navn"),
      comment: formData.get("comment"),
      event_id: id.slug,
    });
    const response = await fetch("https://lwvdzfdgkmziuewtursm.supabase.co/rest/v1/events_comments", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    const data = await response.json();
    setUserComment((o) => o.concat(data[0]));
  }
  return (
    <div>
      {userComment.map((com) => {
        return (
          <div key={com.id}>
            <p>{com.name}</p>
            <p>{com.comment}</p>
          </div>
        );
      })}
      <form onSubmit={submit}>
        <input type="text" name="navn" id="form_navn" />
        <input type="text" name="comment" id="form_comment" />
        <button>Send kommentar</button>
      </form>
    </div>
  );
}

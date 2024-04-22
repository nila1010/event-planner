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
          <div className="outline rounded-sm p-2 mt-2 mb-2" key={com.id}>
            <p className="text-lg underline">{com.name}</p>
            <p>{com.comment}</p>
          </div>
        );
      })}
      <h2 className="mt-10 mb-2 text-xl">Write a comment:</h2>
      <form onSubmit={submit} className="min-w-[300px] grid">
        <label htmlFor="form_navn">
          <h2>Name:</h2>
          <input className="bg-[#FCFCFC] min-w-[100%] h-8 p-2 mb-2 rounded-sm" type="text" name="navn" id="form_navn" />
        </label>
        <label htmlFor="form_comment">
          <h2>Comment:</h2>
          <textarea className="bg-[#FCFCFC] min-w-[100%] h-20 p-2 mb-2 rounded-sm" name="comment" id="form_comment" required></textarea>
        </label>
        <button className="text-2xl p-2 outline self-center hover:bg-[#DABD4C]">Send kommentar</button>
      </form>
    </div>
  );
}

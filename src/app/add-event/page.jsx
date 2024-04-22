import { AddEvents } from "../../lib/crud";
import { redirect } from "next/navigation";

export default async function AddEventPage() {
  async function submit(formData) {
    "use server";
    const id = await AddEvents(formData, "events");

    redirect("/events/" + id);
  }

  return (
    <form action={submit} className="mt-10 min-w-[300px] grid">
      <div className="formcontrole mb-2">
        <label htmlFor="form_name">
          <h2 className="text-xl ">Your name:</h2>
          <input className="bg-[#FCFCFC] min-w-[100%] h-8 p-2 rounded-sm peer" id="form_name" type="text" name="name" required />
          <p className="text-rose-500 invisible peer-invalid:visible">You need to put in a name</p>
        </label>
      </div>
      <div className="formcontrole mb-2">
        <label htmlFor="form_date">
          <h2>Date:</h2>
          <input className="bg-[#FCFCFC] h-8 min-w-[60%] rounded-sm" id="form_date" type="date" name="date" required />
        </label>
      </div>
      <div className="formcontrole mb-2">
        <label htmlFor="form_description">
          <h2>Description:</h2>
          <textarea className="bg-[#FCFCFC] min-w-[100%] h-20 p-2 rounded-sm" id="form_description" type="text" name="description" required />
        </label>
      </div>
      <button className="text-2xl p-2 outline self-center hover:bg-[#DABD4C]">Add event</button>
    </form>
  );
}

import { AddEvents } from "../../lib/crud";
import { redirect } from "next/navigation";

export default async function AddEventPage() {
  async function submit(formData) {
    "use server";
    const id = await AddEvents(formData, "events");

    redirect("/events/" + id);
  }

  return (
    <form action={submit}>
      <div className="formcontrole">
        <label htmlFor="form_name">
          Your name:
          <input id="form_name" type="text" name="name" />
        </label>
      </div>
      <div className="formcontrole">
        <label htmlFor="form_date">
          Date:
          <input id="form_date" type="date" name="date" />
        </label>
      </div>
      <div className="formcontrole">
        <label htmlFor="form_description">
          Description:
          <input id="form_description" type="text" name="description" />
        </label>
      </div>
      <button>Add event</button>
    </form>
  );
}

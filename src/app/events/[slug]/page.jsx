import AddComment from "@/components/AddComment";
import { GetEventPage } from "@/lib/crud";

export default async function EventPage({ params }) {
  const slug = params;

  const data = await GetEventPage(slug);
  const eventData = data.eventInfo;
  const comments = data.comment;

  return (
    <article>
      <h1>{eventData.title}</h1>
      <h2>{eventData.dato}</h2>
      <h2>{eventData.description}</h2>
      <AddComment id={slug} />

      <article>
        <h1>Show comments</h1>
        {comments.map((com) => {
          return (
            <div key={com.name}>
              <p>{com.name}</p>
              <p>{com.comment}</p>
            </div>
          );
        })}
      </article>
    </article>
  );
}

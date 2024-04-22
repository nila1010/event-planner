import AddComment from "@/components/AddComment";
import { GetEventPage } from "@/lib/crud";

export default async function EventPage({ params }) {
  const slug = params;

  const data = await GetEventPage(slug);
  const eventData = data.eventInfo;
  const comments = data.comment;

  return (
    <article>
      <h1 className="text-3xl">{eventData.title}</h1>
      <h2>{eventData.dato}</h2>
      <h2 className="text-xl my-2">{eventData.description}</h2>

      <article>
        <h2 className="text-xl mt-5">Comments:</h2>
        {comments.map((com) => {
          return (
            <div className="outline rounded-sm p-2 mt-2 mb-2" key={com.id}>
              <p className="text-lg underline">{com.name}</p>
              <p>{com.comment}</p>
            </div>
          );
        })}
      </article>
      <AddComment id={slug} />
    </article>
  );
}

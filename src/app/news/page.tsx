import { TopicHeading } from "./topic-heading";
import { NewsList } from "./news-list";

export default function News({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const topic = Array.isArray(searchParams.topic)
    ? searchParams.topic[0]
    : searchParams.topic;
  return (
    <main className="flex min-h-screen flex-col py-12 px-8 md:px-12 lg:px-24">
      <TopicHeading />
      <NewsList topic={topic ?? ""} />
    </main>
  );
}

import { NewsForm } from "./news-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 px-8 md:px-12 lg:px-24">
      <NewsForm />
    </main>
  );
}

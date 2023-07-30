'use client';

import { useSearchParams } from 'next/navigation';

export function TopicHeading() {
  const searchParams = useSearchParams();

  const topic = searchParams.get('topic') ?? 'Trending';

  return (
    <h1 className="text-2xl font-semibold mb-4 capitalize">
      Topic: {topic}
    </h1>
  );
}

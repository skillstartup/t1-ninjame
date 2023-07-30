"use client";

import { useState, useEffect, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SubscribeField } from "./subscribe-field";

export function NewsList({ topic = "" }: { topic: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [isError, setIsError] = useState(false);

  const fetchNews = useCallback(() => {
    setIsError(false);
    setIsLoading(true);

    fetch(`/api/news?topic=${topic}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setNews(data.news);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  useEffect(() => {
    fetchNews();
  }, []);

  if (isError) {
    return (
      <div className="w-full space-y-2">
        <p>Whoops! Something went wrong.</p>
        <Button
          onClick={() => {
            fetchNews();
          }}
        >
          Try again
        </Button>
      </div>
    );
  }

  return isLoading ? (
    <div className="w-full space-y-2">
      <Skeleton className="h-6" />
      <Skeleton className="h-6" />
      <Skeleton className="h-6" />
    </div>
  ) : (
    <div className="flex flex-col space-y-4">
      <SubscribeField topic={topic} />
      {news.map(({ title, description, url }, index) => (
        <Link href={url} target="_blank" key={`news-list-item-${index + 1}`}>
          <div className="mb-6 border-solid border-2 border-black rounded-md p-2">
            <p className="font-semibold text-lg mb-4">{title}</p>
            <p>{description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

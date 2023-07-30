import { NextRequest, NextResponse } from "next/server";

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const NUMBER_OF_NEWS = "20";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const queryParams = url.searchParams;
  const topic = queryParams.get("topic") ?? "trending";
  const newsResponse = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&apiKey=${NEWS_API_KEY}&pageSize=${NUMBER_OF_NEWS}`
  ).then((res) => res.json());
  const news = newsResponse.articles.map(
    ({
      title,
      description,
      url,
    }: {
      title: string;
      description: string;
      url: string;
    }) => ({
      title,
      description,
      url,
    })
  );

  // return NextResponse.error();
  return NextResponse.json({ news });
}

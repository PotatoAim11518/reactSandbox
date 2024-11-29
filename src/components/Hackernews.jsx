import { useEffect, useState } from "react";
import ListSkeleton from "./ListSkeleton";

const fetchTopURL = "https://hacker-news.firebaseio.com/v0/topstories.json";
const fetchStoryURL = (id) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

export default function Hackernews() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTopArticles = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(fetchTopURL);
        if (!response.ok) throw new Error("Something went wrong.");
        const data = await response.json();
        const top10 = await data.slice(0, 10);
        // arbitrary delay to show shimmer loading
        await new Promise((resolve) => setTimeout(resolve, 500));
        await Promise.all(
          top10.map((id) => fetch(fetchStoryURL(id)).then((res) => res.json()))
        ).then((data) => setData(data));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw new Error(error);
      }
    };
    getTopArticles();
  }, []);
  return (
    <>
      <h1 className="text-3xl mb-8">Hackernews</h1>
      <ol className="flex flex-col gap-y-8">
        {isLoading &&
          Array(10)
            .fill(null)
            .map((_item, i) => <ListSkeleton key={Date.now() + i} />)}
        {!isLoading &&
          data.map((story) => (
            <li key={story.id}>
              <a href={story.url}>{story.title}</a>
              <p>Score: {story.score}</p>
              <p>by: {story.by}</p>
            </li>
          ))}
      </ol>
    </>
  );
}

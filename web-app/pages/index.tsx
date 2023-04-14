import Link from "next/link";
import type { NextPage } from "next";

import useSWR from "swr";

import { apiFetcher } from "../services/api-fetcher";

import BookDetailCard from "../components/book-detail-card";

import { IBook } from "../types";

const Home: NextPage = () => {
  const { data: popularBooks, error } = useSWR<IBook[]>(
    "/popular-books",
    apiFetcher
  );

  if (error) {
    return (
      <div className="w-full h-screen overflow-y-auto bg-slate-800 text-slate-50 flex justify-center items-center">
        <h1 className="text-4xl font-bold">Something went wrong</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-screen overflow-y-auto bg-slate-800 text-slate-50">
      <div className="container px-3 md:mx-auto h-full py-10">
        <h1 className="text-4xl font-bold">All time favorite books</h1>
        <p>
          Want to see more?{" "}
          <Link href="/books">
            <span className="text-slate-50 cursor-pointer hover:text-slate-100 font-semibold">
              Click here
            </span>
          </Link>
        </p>
        {popularBooks ? (
          <div className="grid grid-cols-1 my-5 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {popularBooks.map((book) => (
              <BookDetailCard key={book["ISBN"]} book={book} />
            ))}
          </div>
        ) : (
          Array(12)
            .fill(0)
            .map((_, index) => <BookDetailCard key={index} book={null} />)
        )}
      </div>
    </div>
  );
};

export default Home;

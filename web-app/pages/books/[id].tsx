import { useRouter } from "next/router";

import useSWR from "swr";

import { apiFetcher } from "../../services/api-fetcher";

import BookDetailCard from "../../components/book-detail-card";

import { IBook } from "../../types";

const BookDetailPage = () => {
  const { id } = useRouter().query;

  const { data: book, error } = useSWR<IBook>(
    id ? `/books/${id}` : null,
    apiFetcher
  );

  const { data: similarBooks } = useSWR<IBook[]>(
    id ? `/books/${id}/recommended` : null,
    apiFetcher
  );

  const title = book ? book["Book-Title"] : "";
  const author = book ? book["Book-Author"] : "";
  const image = book ? book["Image-URL-L"].replace("http://", "https://") : "";

  const numberOfRatings = book ? book["number_of_rating"] : 0;
  const averageRating = book
    ? Math.round(book["average_rating"] * 100) / 100
    : 0;

  if (error)
    return (
      <div className="w-full h-screen overflow-y-auto bg-slate-800 text-slate-50 flex justify-center items-center">
        <h1 className="text-4xl font-bold">Something went wrong</h1>
      </div>
    );

  return (
    <div className="w-full h-screen overflow-y-auto bg-slate-800 text-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto px-4 mt-10 lg:mt-28">
        <div className="col-span-1">
          <div className="relative w-full aspect-square pb-3/4">
            {book ? (
              <img
                src={image}
                alt={title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-slate-700 animate-pulse" />
            )}
          </div>
        </div>

        {book ? (
          <div className="col-span-1 space-y-5">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-sm">{author}</p>
            <p className="text-sm">
              {numberOfRatings} ratings, {averageRating} average
            </p>
          </div>
        ) : (
          <div className="col-span-1 space-y-5">
            <div className="w-3/4 h-10 bg-slate-700 animate-pulse" />
            <div className="w-1/2 h-6 bg-slate-700 animate-pulse" />
            <div className="w-1/4 h-6 bg-slate-700 animate-pulse" />
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 mt-10 lg:mt-28">
        <h1 className="text-4xl font-bold">Similar books</h1>
        <p className="text-sm text-slate-400">
          Because you liked <span className="font-bold">{title}</span>
        </p>

        <div className="grid grid-cols-1 my-5 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {similarBooks
            ? similarBooks.map((book) => (
                <BookDetailCard key={book["ISBN"]} book={book} />
              ))
            : Array(12)
                .fill(0)
                .map((_, index) => <BookDetailCard key={index} book={null} />)}
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;

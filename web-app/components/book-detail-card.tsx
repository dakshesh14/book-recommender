import { IBook } from "../types";

import Link from "next/link";

type Props = {
  book: IBook | null;
};

const BookDetailCard: React.FC<Props> = (props) => {
  const { book } = props;

  if (!book)
    return (
      <div className="w-full">
        <div className="relative w-full aspect-square pb-3/4 animate-pulse bg-slate-700" />
        <div className="py-4">
          <div className="w-full h-10 bg-slate-700 animate-pulse" />
          <div className="w-full h-5 animate-pulse bg-slate-700 mt-3" />
        </div>
      </div>
    );

  const title = book["Book-Title"];
  const id = book["ISBN"];
  const author = book["Book-Author"];
  const image = book["Image-URL-L"].replace("http://", "https://");

  return (
    <div className="w-full bg-slate-700">
      <div className="relative w-full aspect-square pb-3/4">
        {/* FIXME: use next/image */}
        <img
          src={image}
          className="absolute inset-0 w-full h-full object-cover"
          alt={title}
        />
      </div>
      <div className="p-4">
        <Link href={`/books/${id}`}>
          <h2 className="text-xl font-bold">{title}</h2>
        </Link>
        <p className="text-sm">{author}</p>
      </div>
    </div>
  );
};

export default BookDetailCard;

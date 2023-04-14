import Link from "next/link";

const BookList = () => {
  // TODO:
  // [ ] - Show paginated list of books
  // [ ] - Show book details on click
  // [ ] - Show search bar to search books

  return (
    <div className="w-full h-screen overflow-y-auto bg-slate-800 text-slate-50 flex flex-col gap-y-5 justify-center items-center">
      <h2 className="text-4xl font-bold">Not Implemented yet.</h2>
      <p>
        If you are a developer see this and want to contribute, please feel free
        to open a PR.{" "}
        <Link
          className="text-slate-50 cursor-pointer hover:text-slate-100 font-semibold"
          href="https://github.com/dakshesh14/book-recommendation"
        >
          GitHub
        </Link>
      </p>
    </div>
  );
};

export default BookList;

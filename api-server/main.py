import pickle

import uvicorn

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from variables import ALLOWED_HOSTS as origins, DEBUG

from helper import (
    recommend_books,
    convert_books_to_dict,
    books,
    get_book_by_id as get_book_by_id_helper,
    search_books,
)

popular_books = pickle.load(open('./model/top_25_books.pkl', "rb"))

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/popular-books")
def get_popular_books():
    popular_books_dict = popular_books.to_dict(orient="records")
    return popular_books_dict


@app.get("/books/{book_id}/recommended")
def get_recommend_books(book_id: str):
    recommended_books = recommend_books(book_id)
    return recommended_books


# paginate books
@app.get("/books")
def get_books(page: int = 1, limit: int = 10):
    start = (page - 1) * limit
    end = start + limit
    books_dict = convert_books_to_dict(books, start, end)
    return books_dict


@app.get("/books/{book_id}")
def get_book_by_id(book_id: str):
    book = get_book_by_id_helper(book_id)
    return book


@app.get("/search-books")
def search_books_by_title(query: str):
    books = search_books(query)
    return books


if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=8000, reload=DEBUG)

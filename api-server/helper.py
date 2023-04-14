import pickle

import numpy as np

pt = pickle.load(open("./model/pt.pkl", "rb"))
books = pickle.load(open("./model/books.pkl", "rb"))
similarity_scores = pickle.load(open("./model/similarity_scores.pkl", "rb"))
ratings_with_books = pickle.load(open("./model/ratings_with_books.pkl", "rb"))


def recommend_books(book_id):

    if book_id not in pt.index:
        return []

    index = np.where(pt.index == book_id)[0][0]

    similar_books = list(enumerate(similarity_scores[index]))
    similar_books = sorted(similar_books, key=lambda x: x[1], reverse=True)
    similar_books = similar_books[1:11]

    books_with_details = []

    for i in similar_books:
        book = books[books['ISBN'] == pt.index[i[0]]]

        book = book.iloc[0]
        book = book.to_dict()

        book['number_of_rating'] = ratings_with_books[
            ratings_with_books['ISBN'] == book['ISBN']
        ]['Book-Rating'].count()
        book['number_of_rating'] = str(book['number_of_rating'])

        book['average_rating'] = ratings_with_books[
            ratings_with_books['ISBN'] == book['ISBN']
        ]['Book-Rating'].mean()
        book['average_rating'] = str(book['average_rating'])

        books_with_details.append(book)

    return books_with_details


def convert_books_to_dict(books, start, limit):
    # in real-scenario , we will use database to store books;
    # this method is not the most efficient, but for demo it's good enough
    books_dict = books.to_dict(orient="records")
    return books_dict[start:limit]


def get_book_by_id(book_id):
    # here also use of database is recommended
    book = books[books['ISBN'] == book_id]
    book = book.iloc[0]
    book = book.to_dict()

    book['number_of_rating'] = ratings_with_books[
        ratings_with_books['ISBN'] == book['ISBN']
    ]['Book-Rating'].count()
    book['number_of_rating'] = str(book['number_of_rating'])

    book['average_rating'] = ratings_with_books[
        ratings_with_books['ISBN'] == book['ISBN']
    ]['Book-Rating'].mean()
    book['average_rating'] = str(book['average_rating'])

    return book


def search_books(query):
    # TODO:
    # [ ] - search books by title, author, publisher
    # [ ] - Find the 10-15 closest match for the query
    raise NotImplementedError

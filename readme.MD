# Book recommendation Website + API

This is a web-based application that features a comprehensive list of popular books and their accompanying details. The app also provides suggestions for similar books based on collaborative filtering techniques. Bayesian Average is employed to identify trending books. FastAPI is used to build the API, while NextJS is used for the frontend development.

## Demo

<video width="320" height="240" controls>
  <source src="https://user-images.githubusercontent.com/65905942/232096609-649727ca-e3c3-41d2-80d3-b54a8fc2e91d.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Features

- Collaborative filtering
- Bayesian Average for getting popular books
- Book details
- Book recommendations
- Good UI + Dark mode

## Run Locally

1. Clone the project

```bash
git clone
```

2. Go to the project directory

```bash
cd book-recommendation
```

3. Install dependencies

```bash
cd web-app
yarn
```

```bash
cd api-server
pip install -r requirements.txt
```

4. Run algo/main.py to generate the dataset

```bash
cd algo
python main.py
```

NOTE: You will have to add data to /algo/data folder. You can get the data from [here](https://www.kaggle.com/datasets/arashnic/book-recommendation-dataset)

5. Run the API server

```bash
cd api-server
python main.py
```

6. Run the web app

```bash
cd web-app
yarn dev
```

## API Reference

Coming soon...

## Acknowledgements

- [NextJS](https://nextjs.org/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Kaggle](https://www.kaggle.com/)
- [Book Recommendation Dataset](https://www.kaggle.com/datasets/arashnic/book-recommendation-dataset)

## Contributing

Contributions are always welcome! I have opened up issues for the features that I want to add in the future. Feel free to take them up and send a PR.

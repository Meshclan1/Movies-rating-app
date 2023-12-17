export const fetchMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",

    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDk1NDUxZTg5YzFiNDZhMWI1ODA5YmRjNDYxYzkwMSIsInN1YiI6IjY1NzFjNTk5YTIyZDNlMDBjNGM1MjRmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HScLcHRdMK4E-ofoZfMks8fqOAepeBe3DWxU8ZhO-0U",
      },
    }
  );

  return res.json();
};

export const fetchTvShows = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDk1NDUxZTg5YzFiNDZhMWI1ODA5YmRjNDYxYzkwMSIsInN1YiI6IjY1NzFjNTk5YTIyZDNlMDBjNGM1MjRmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HScLcHRdMK4E-ofoZfMks8fqOAepeBe3DWxU8ZhO-0U",
      },
    }
  );

  return res.json();
};

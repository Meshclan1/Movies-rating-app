export const rateMovie = async (movieId: number, rating: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${localStorage.getItem(
      "guest_session_id"
    )}&api_key=${import.meta.env.VITE_API_KEY}`,
    {
      headers: {
        accept: "application/json",
        "content-type": "application/json;charset=utf-8",
      },
      body: `{"value": ${rating}}`,
    }
  );

  return res.json();
};

export const rateTvShow = async (tvShowId: number, rating: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/TV/${tvShowId}/rating?guest_session_id=${localStorage.getItem(
      "guest_session_id"
    )}&api_key=${import.meta.env.VITE_API_KEY}`,
    {
      headers: {
        accept: "application/json",
        "content-type": "application/json;charset=utf-8",
      },
      body: `{"value": ${rating}}`,
    }
  );

  return res.json();
};

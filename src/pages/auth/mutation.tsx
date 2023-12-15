export const mutationLogin = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/authentication/guest_session/new",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDk1NDUxZTg5YzFiNDZhMWI1ODA5YmRjNDYxYzkwMSIsInN1YiI6IjY1NzFjNTk5YTIyZDNlMDBjNGM1MjRmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HScLcHRdMK4E-ofoZfMks8fqOAepeBe3DWxU8ZhO-0U",
      },
    }
  );

  return res.json();
};

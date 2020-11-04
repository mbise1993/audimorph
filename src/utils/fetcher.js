export const fetcher = async (resource, init) => {
  return fetch(`${process.env.API_URL}${resource}`, init).then((res) =>
    res.json(),
  );
};

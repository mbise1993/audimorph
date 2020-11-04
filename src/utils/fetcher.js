export const fetcher = async (resource, init) => {
  const apiUrl = process.env.API_URL;
  if (!apiUrl) {
    throw new Error('API_URL not provided');
  }

  const res = await fetch(`${apiUrl}${resource}`, init);
  return res.json();
};

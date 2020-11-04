export const fetcher = async (resource, init) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    throw new Error('NEXT_PUBLIC_API_URL not provided');
  }

  const res = await fetch(`${apiUrl}${resource}`, init);
  return res.json();
};

import useSWR from 'swr';

export function useSearchTemplates(searchTerm, onlyMine) {
  const results = useSWR(
    `/api/templates?searchTerm=${searchTerm}&onlyMine=${onlyMine}`,
  );

  return {
    templates: results.data || [],
    isLoading: !results.data && !results.error,
    error: results.error,
  };
}

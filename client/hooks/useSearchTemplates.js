import useSWR from 'swr';

export function useSearchTemplates(searchTerm, onlyMine, initialTemplates) {
  const results = useSWR(
    `/api/templates?searchTerm=${searchTerm}&onlyMine=${onlyMine}`,
    {
      initialData: initialTemplates,
    },
  );

  return {
    templates: results.data || [],
    isLoading: !results.data && !results.error,
    error: results.error,
  };
}

import { API } from 'aws-amplify';

import { listTemplates } from '../graphql/queries';

export async function searchTemplates(searchTerm) {
  const response = await API.graphql({
    query: listTemplates,
    variables: {
      filter: {
        name: { contains: searchTerm },
        or: {
          name: { contains: searchTerm },
        },
      },
    },
  });

  return response.data.listTemplates.items || [];
}

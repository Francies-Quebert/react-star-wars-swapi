import { ListResponsesResult } from '../typing';
import { emptySplitApi } from './emptySplitApi'
import { ListTypes, List } from './typing';

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({

    getStarWar: build.query<ListResponsesResult, { id: string, type: List<ListTypes> }>({

      query: ({ id, type }) => `${type}/${id}`,

      providesTags: (result, error, id) => {
        return [{ type: 'StarWar', id: `${id}` }]
      },

    }),
  }),
  overrideExisting: false,
})

export const { useGetStarWarQuery } = extendedApi
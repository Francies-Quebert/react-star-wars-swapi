import { ListResponsesResult } from '../typing';
import { emptySplitApi } from './emptySplitApi'
import { ListResponse, ListTypes, List } from './typing';

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({

    getList: build.query<ListResponse<ListResponsesResult>, { page: number | string, type: List<ListTypes> }>({

      query: ({ page = 1, type = 'people' }) => `${type}?page=${page}`,

      providesTags: (result, error, id) => {
        return [{ type: 'StarWar', id: `${id}` }]
      },

    }),
  }),
  overrideExisting: false,
})

export const { useGetListQuery } = extendedApi
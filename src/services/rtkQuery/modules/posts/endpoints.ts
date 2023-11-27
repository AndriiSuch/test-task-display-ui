import {rtkQuery} from '../../rtkQuery';
import {
  PostItemRequetParams,
  PostItemResponseBody,
  PostListRequetParams,
  PostListResponseBody,
} from './types';

export const postsApi = rtkQuery.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    getPostList: builder.query<PostListResponseBody, PostListRequetParams>({
      query: () => ({
        url: `/photos`,
      }),
    }),
    getPostById: builder.query<PostItemResponseBody, PostItemRequetParams>({
      query: ({id}) => {
        return {
          url: `/photos/${id}`,
        };
      },
    }),
  }),
});

export const {useGetPostListQuery, useGetPostByIdQuery} = postsApi;

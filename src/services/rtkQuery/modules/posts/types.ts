import {Post} from '../../../../store';

// requests
export type PostItemRequetParams = {id: number};
export type PostListRequetParams = void;

// responses
export type PostListResponseBody = Post[];
export type PostItemResponseBody = Post;

export interface PostState {
  postList: Post[];
  postItem: Post | null;
}

export interface Post {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

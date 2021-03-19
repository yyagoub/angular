import {Post} from './post';

export interface PostsRequest{
  code: number;
  meta: object;
  data: Post[];
}

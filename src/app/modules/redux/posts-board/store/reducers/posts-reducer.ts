import { CREATE_POST, FETCH_POSTS } from '../types';

export interface PostsStore {
  posts: any[];
  fetchedPosts: any[];
}

const initialState: PostsStore = {
  posts: [],
  fetchedPosts: [],
};

export const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_POST: {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    }
    case FETCH_POSTS: {
      return {
        ...state,
        fetchedPosts: action.payload,
      }
    }
    default: return state;
  }
};

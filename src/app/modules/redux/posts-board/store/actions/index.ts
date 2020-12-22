import {
  CREATE_POST,
  HIDE_ALERT,
  HIDE_LOADER,
  REQUEST_POSTS,
  SHOW_ALERT,
  SHOW_LOADER,
} from '../types';

export const createPost = (post: any) => {
  return {
    type: CREATE_POST,
    payload: post,
  };
};

export const hideLoader = () => {
  return { type: HIDE_LOADER };
};

export const showLoader = () => {
  return { type: SHOW_LOADER };
};

export const hideAlert = () => {
  return { type: HIDE_ALERT };
};

export const showAlert = (text: string) => {
  return (dispatch: any) => {
    dispatch({ type: SHOW_ALERT, payload: text });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
};

export const fetchPosts = () => {
  return { type: REQUEST_POSTS };
  // return async (dispatch: any) => {
  //   try {
  //     dispatch(showLoader());
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  //     const posts = await response.json();
  //
  //     setTimeout(() => {
  //       dispatch({ type: FETCH_POSTS, payload: posts });
  //       dispatch(hideLoader());
  //     }, 700);
  //   } catch (error) {
  //     dispatch(showAlert(`Ошибка сервера | ${error.message}`));
  //     dispatch(hideLoader());
  //   }
  // };
};

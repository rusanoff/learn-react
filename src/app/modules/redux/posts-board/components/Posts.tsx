import React from 'react';
import { Post } from './Post';
import { connect } from 'react-redux';

export interface PostsProps {
  syncPosts?: any[];
}

const PostsComponent: React.FC<PostsProps> = ({ syncPosts = [] }) => {
  if (!syncPosts.length) {
    return (
      <p>Постов пока нет</p>
    );
  }

  return (
    <>
      { syncPosts.map((post) => <Post key={post.id} post={post} />) }
    </>
  );
};

const mapStateToProps = (state: any): PostsProps => {
  console.log({ state });
  return { syncPosts: state.posts.posts };
};

export const Posts = connect(mapStateToProps, null)(PostsComponent);

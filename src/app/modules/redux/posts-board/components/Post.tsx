import React from 'react';

export interface PostProps {
  post: any;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{ post.title }</h5>
      </div>
    </div>
  );
};

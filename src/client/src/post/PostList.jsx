import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Api } from '../api/api';
import { CommentCreate } from '../comment/CommentCreate';
import { CommentList } from '../comment/CommentList';

export const PostList = () => {
  const [postsById, setPostsById] = useState([]);

  const findAllPostsById = async () => {
    const response = await axios.get(Api.Query.findAllPosts());

    setPostsById(Object.values(response.data));
  };

  useEffect(() => {
    findAllPostsById();
  }, []);

  const renderPosts = postsById.map((post) => {
    return (
      <div key={post.id} className='card' style={{ width: '30%', marginBottom: '20px' }}>
        <div className='card-body'>
          <h3>{post.title}</h3>
          <CommentList commentsById={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return <div className='d-flex flex-row flex-wrap justify-contet-between'>{renderPosts}</div>;
};

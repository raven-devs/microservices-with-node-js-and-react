import axios from 'axios';
import React, { useState } from 'react';
import { Api } from '../api/api';

export const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!content) {
      return;
    }

    const comment = {
      content,
    };

    await axios.post(Api.Comments.createByPostId(postId), comment);

    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>New Comment</label>
          <input className='form-control' type='text' value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

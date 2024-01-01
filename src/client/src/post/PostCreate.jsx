import axios from 'axios';
import React, { useState } from 'react';
import { Api } from '../api/api';

export const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      return;
    }

    const post = {
      title,
    };

    await axios.post(Api.Posts.create(), post);

    setTitle('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Title</label>
          <input className='form-control' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

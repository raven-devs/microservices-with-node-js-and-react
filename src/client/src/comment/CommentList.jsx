import React from 'react';
import { CommentStatus } from './comment-status';

export const CommentList = ({ commentsById }) => {
  const renderComments = Object.values(commentsById).map((comment) => {
    let content;
    switch (comment.status) {
      case CommentStatus.Approved:
        content = comment.content;
        break;
      case CommentStatus.Pending:
        content = 'This comment is awating moderation';
        break;
      case CommentStatus.Rejected:
        content = 'This comment has been rejected';
        break;
      default:
        break;
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderComments}</ul>;
};

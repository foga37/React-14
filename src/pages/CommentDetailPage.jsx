import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCommentDetail } from '../service/Api';

const CommentDetailPage = () => {
  const { commentId } = useParams();
  const [comment, setComment] = useState(null);

  useEffect(() => {
    const getCommentDetail = async () => {
      const data = await fetchCommentDetail(commentId);
      setComment(data);
    };
    getCommentDetail();
  }, [commentId]);

  if (!comment) return <div>Loading...</div>;

  return (
    <div>
      <h2>Comment Details</h2>
      <p>Name: {comment.name}</p>
      <p>Email: {comment.email}</p>
      <p>Body: {comment.body}</p>
    </div>
  );
};

export default CommentDetailPage;

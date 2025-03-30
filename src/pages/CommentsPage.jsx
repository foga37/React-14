import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchComments } from '../service/Api';

const CommentsPage = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const data = await fetchComments();
      setComments(data);
    };
    getComments();
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Link to={`/comment/${comment.id}`}>{comment.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsPage;

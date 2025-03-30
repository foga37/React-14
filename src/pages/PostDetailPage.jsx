import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPostDetail } from '../service/Api';

const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPostDetail = async () => {
      const data = await fetchPostDetail(postId);
      setPost(data);
    };
    getPostDetail();
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>Post Details</h2>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </div>
  );
};

export default PostDetailPage;

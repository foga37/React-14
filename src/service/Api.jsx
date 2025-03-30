export const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return await response.json();
};

export const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await response.json();
};

export const fetchComments = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  return await response.json();
};

export const fetchUserDetail = async (userId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return await response.json();
};

export const fetchPostDetail = async (postId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return await response.json();
};

export const fetchCommentDetail = async (commentId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
  return await response.json();
};

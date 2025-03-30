// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

import './component/style.css';
import { CommentDetailPage, CommentsPage, HomePage, PostDetailPage, PostsPage, UserDetailPage, UsersPage } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'users', element: <UsersPage /> },
      { path: 'posts', element: <PostsPage /> },
      { path: 'comments', element: <CommentsPage /> },
      { path: 'user/:userId', element: <UserDetailPage /> },
      { path: 'post/:postId', element: <PostDetailPage /> },
      { path: 'comment/:commentId', element: <CommentDetailPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

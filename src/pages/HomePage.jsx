import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <nav>
        <ul>
          <li><Link to="users">Users</Link></li>
          <li><Link to="posts">Posts</Link></li>
          <li><Link to="comments">Comments</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;

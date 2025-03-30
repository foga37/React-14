// App.jsx
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>My Home</h1>
      <Outlet />
    </div>
  );
};

export default App;

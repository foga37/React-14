import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchUserDetail } from '../service/Api';

const UserDetailPage = () => {
  const { userId } = useParams(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserDetail = async () => {
      const data = await fetchUserDetail(userId); 
      setUser(data);
    };
    getUserDetail();
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserDetailPage;

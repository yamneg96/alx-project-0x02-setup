import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ id, name, email, address }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">{email}</p>
      <div className="text-sm text-gray-500">
        <p>ID: {id}</p>
        <p>Address:</p>
        <p>{address.street}, {address.suite}</p>
        <p>{address.city}, {address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard; 
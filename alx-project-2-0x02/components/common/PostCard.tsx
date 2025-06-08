import { PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ id, title, content, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="text-sm text-gray-500">
        <p>Post ID: {id}</p>
        <p>User ID: {userId}</p>
      </div>
    </div>
  );
};

export default PostCard; 
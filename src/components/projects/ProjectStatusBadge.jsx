import { FiUser, FiLayers, FiZap } from 'react-icons/fi';

const ProjectStatusBadge = ({ status, type }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Development':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getTypeIcon = () => {
    switch (type) {
      case 'Academic':
        return <FiUser className="inline w-3 h-3" />;
      case 'Personal':
        return <FiZap className="inline w-3 h-3" />;
      default:
        return <FiLayers className="inline w-3 h-3" />;
    }
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor()}`}>
        {status}
      </span>
      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20 flex items-center gap-1">
        {getTypeIcon()} {type}
      </span>
    </div>
  );
};

export default ProjectStatusBadge;

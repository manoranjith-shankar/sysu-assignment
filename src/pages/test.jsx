import { useState } from 'react';

const StarComp = () => {
  const [isStarred, setIsStarred] = useState(false);

  const handleStarClick = () => {
    setIsStarred(!isStarred);
  };

  return (
    <div>
      <button
        onClick={handleStarClick}
        className={`text-xl ${isStarred ? 'text-yellow-500' : 'text-gray-500'}`}
      >
        &#9733;
      </button>
    </div>
  );
};

export default StarComp;
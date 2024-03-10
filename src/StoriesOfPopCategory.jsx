import React, { useEffect, useState } from 'react';
import { ref, onValue, getDatabase, push, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { useParams } from 'react-router-dom';
import { FiShare } from "react-icons/fi";

// Initialize Firebase app
const appSetting = {
  databaseURL: "https://sysu-assignment-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSetting);
const database = getDatabase(app);

const StoriesOfPopCategory = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
  const [isStarred, setIsStarred] = useState(false);
  const [starredCategories, setStarredCategories] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const storiesRef = ref(database, `List/${category}`);
    const starredCategoriesRef = ref(database, 'StarredCategories');

    const fetchStories = () => {
      onValue(storiesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const storiesArray = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value
          }));
          setStories(storiesArray);
          setError(null);
        } else {
          setStories([]);
          setError('No stories found');
        }
      }, (error) => {
        console.error("Error fetching stories:", error);
        setError('Error fetching stories');
      });

      // Fetch starred categories
       onValue(starredCategoriesRef, (snapshot) => {
        const starredCategoriesData = snapshot.val();
        if (starredCategoriesData) {
          const categories = Object.entries(starredCategoriesData).map(([key, value]) => value);
          setStarredCategories(categories);
          setIsStarred(categories.includes(category));
        }
      });
    };

    fetchStories();

  }, [category, database]);

  const handleStarClick = () => {
    setIsStarred(!isStarred);

    if (!isStarred) {
      // If not starred, add it to the list
      push(ref(database, "StarredCategories"), category);
      setIsStarred(true);
    } else {
      // If starred, remove it from the list
      remove(ref(database,"StarredCategories"), category);
      setIsStarred(false);
    }
  };

  // Function to handle the share button click event
  const handleShareButtonClick = () => {
    // Open a pop-up with the current URL
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert('URL copied to clipboard'))
      .catch((error) => console.error('Error copying URL to clipboard:', error));
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Stories in category: {category}</h2>
        <div>
          <button className="text-blue-500 mt-5 mr-3" onClick={handleShareButtonClick}>
            <FiShare />
          </button>
          <button
            onClick={handleStarClick}
            className={`text-xl ${isStarred ? 'text-yellow-500' : 'text-gray-500'}`}
          >
            &#9733;
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Starred Categories</h3>
        <div className='list'>
        <ul className='list-items'>
          {starredCategories.map((category) => (
                <li key={category}>{category}</li>
                ))}
        </ul>
        </div>
      </div>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow-md p-4">
              <p className="text-gray-500">Category: {story.category}</p>
              <h3 className="text-xl font-semibold mb-2">{story.subject}</h3>
              <p className="text-gray-700 mb-2 overflow-x-auto">{story.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StoriesOfPopCategory;
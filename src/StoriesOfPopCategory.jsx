import React, { useEffect, useState } from 'react';
import { ref, onValue, getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { useParams } from 'react-router-dom';

// Initialize Firebase app
const appSetting = {
  databaseURL: "https://sysu-assignment-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSetting);
const database = getDatabase(app);

const StoriesOfPopCategory = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    const storiesRef = ref(database, `List/${category}`);

    const fetchStories = () => {
      onValue(storiesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const storiesArray = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value
          }));
          setStories(storiesArray);
          setError(null); // Reset error if stories are found
        } else {
          setStories([]);
          setError('No stories found');
        }
      }, (error) => {
        console.error("Error fetching stories:", error);
        setError('Error fetching stories');
      });
    };

    fetchStories();
  }, [category]);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Stories in category: {category}</h2>
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
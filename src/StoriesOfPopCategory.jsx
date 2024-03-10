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
        <ul>
          {stories.map((story) => (
            <li key={story.id} className="my-4">
              <h3 className="text-xl font-semibold">{story.subject}</h3>
              <p className="text-gray-700">{story.description}</p>
              <p className="text-gray-500">Category: {story.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StoriesOfPopCategory;
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Popular({ onChildValue }) {
  const navigate = useNavigate();

  function ListItem({ value }) {

    const handleClick = () => {

      if(value === "Home") {
        navigate(`/`);
      } else {
        navigate(`/${encodeURIComponent(value)}`);
        onChildValue(value);
      }
    }
    
    return <li onClick={handleClick}>{value}</li>;
  }

  return (
    <div className='popular'>
      <h1>What’s popular right now?</h1>

      <div className='list'>
        <ul className='list-items'>
          <ListItem value="Home" />
          <ListItem value="ENGINEERING DAYS" />
          <ListItem value="BANGALORE STORIES" />
          <ListItem value="GOA DIARIES" />
          <ListItem value="NITK STUFFS" />
          <ListItem value="IIM THINGS" />
          <ListItem value="IIMB FACTS" />
          <ListItem value="SHAYARI" />
          <ListItem value="VIKAS MEENA" />
        </ul>
      </div>
    </div>
  );
}
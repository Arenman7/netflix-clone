import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';

//takes in title and category
const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTFmZWQ3NzRlYWIyMTUyYzk5OGE4ZmI1NWUwZGVlNSIsIm5iZiI6MTcyNjQ5NzI1My43NjAwMzYsInN1YiI6IjY2ZTI2NjFiMDAwMDAwMDAwMDk1MTAzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7Nnq6jM1HqhpnB89WfF3yWw6h4q-ZMYQWJsM5NODoeQ',
    },
  };

  const handleWheel = (event) => {
    // only scroll section
    event.preventDefault();

    cardsRef.current.scrollLeft += event.deltaY;
  };

  // more scroll stuff
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : 'popular'
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []);
  // end of scroll stuff

  return (
    <div className="title-cards">
      <h2>{title ? title : 'Other films'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;

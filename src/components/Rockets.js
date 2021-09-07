import React from 'react';
import { useSelector } from 'react-redux';

export default function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const rocketList = rockets.map((rocket) => (
    <article key={rocket.id}>
      <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      <h2>{rocket.rocket_name}</h2>
      <p>{rocket.description}</p>
    </article>
  ));

  return (
    <main>
      <h1>Rockets</h1>
      {rocketList}
    </main>
  );
}

import React from 'react';

const Spotify = ({trackId}) => {
  const url = 'https://open.spotify.com/embed/track/';
  const id = trackId;

  return (
      <iframe
        title='Spotify'
        src={url + id}
        width='100%'
        height='100%'
        frameBorder='0'
        allowtransparency='true'
        allow='encrypted-media'
      ></iframe>
  );
};

export default Spotify;
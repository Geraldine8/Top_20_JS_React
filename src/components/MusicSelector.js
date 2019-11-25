import React from 'react';

const MusicSelector = (props) =>{
  const songs = props.songs.map((song, index) => {
    return <li value={index} key={index} onMouseOver={handleClick}>{index + 1}: {song.title.label}</li>
  })

  function handleClick(event){
    props.onSongSelected(event.target.value)
    // console.log(event.target.value);
  }

  return (
    <ul className="music-selector">
      {songs}
    </ul>
  );
}

export default MusicSelector;

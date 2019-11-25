import React from 'react';

const MusicDetail = (props) => {
  if(!props.song) return null
  return (
    <div className='music-detail-container'>
      <h3>Coming in at Number {props.index +1}</h3>
      <div className='music-detail'>
        <div>
          <img src={props.song['im:image'][2].label} alt={props.song['im:name']} />
        </div>
        <ul className="list">
          <li><span className="title">Song: </span> {props.song['im:name'].label} </li>
          <li><span className="title">Artist: </span>{props.song['im:artist'].label} </li>
          <li><span className="title ">Price:</span> {props.song['im:price'].label} </li>
          <li><span className="title">Category: </span> {props.song.category.attributes.term} </li>
        </ul>
      </div>
    </div>

  )
}

export default MusicDetail;

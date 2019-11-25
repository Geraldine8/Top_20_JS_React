import React, {Component} from 'react';
import MusicSelector from '../components/MusicSelector';
import MusicDetail from '../components/MusicDetail';

class MusicContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      selectedSong: null
    };
    this.handleSongSelected = this.handleSongSelected.bind(this);
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
    .catch(err => console.error);
  }

  handleSongSelected(index){
    const selectedSong = this.state.songs[index];
    this.setState({index: index});
    this.setState({selectedSong: selectedSong});
  }

  render(){
    return(
      <div>
        <h2>Welcome to the iTunes Store's Top 20!</h2>
        <div className="music-container">
          <MusicSelector
          songs = {this.state.songs}
          onSongSelected = {this.handleSongSelected}/>
          <MusicDetail song = {this.state.selectedSong} index={this.state.index}/>

        </div>
      </div>
    )
  }
}

export default MusicContainer;

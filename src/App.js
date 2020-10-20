import React from "react";
import Searchbar from "./components/searchbar";
import youtube from "./apis/youtube";
import VideoList from "./components/videolist";
import VideoDetail from "./components/videodetail";

class App extends React.Component {
  state= { list: [], selectedVideo: null};
  onTermsubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term 
      }
    })
    this.setState({list: response.data.items});
  }
  onVideoSelect = (video) => {
    this.setState({selectedVideo:video});
    console.log(video);
  }
  render(){
    return (
      <div className="ui container">
          <Searchbar onSearchSubmit={ this.onTermsubmit }/>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos={ this.state.list } selected={ this.onVideoSelect }/>
      </div> 
    )
  }
}

export default App 
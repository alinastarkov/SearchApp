import React from 'react'
import SearchBar from './Searchbar'
import unsplash from '../api/unsplash'
import youtube from '../api/youtube'
import ImageList from './ImageList'
import VideoList from './VideoList'


class App extends React.Component {

  state = {
    images: [],
    videos: [], 
    isVideoSearch: false
  } 

  onSearchSubmit = async (term, isVideoSearch) => {
    console.log(term)
    let response
    if (isVideoSearch === false) {
       response = await unsplash.get('/search/photos/', {
          params: {query: term}
      })
      this.setState({
        images:response.data.results,
        isVideoSearch: term
      })
    } else {
        response = await youtube.get('/search', {
          params: {q: term}
        })
        this.setState({
          videos:response.data.items,
          isVideoSearch: isVideoSearch
        })
    } 
  };
  
  render() {
    console.log(this.state)
    let content = (this.state.isVideoSearch===true) ? <VideoList videos= {this.state.videos}/> : <ImageList list= {this.state.images}/> 
    return (
      <div className="ui container" style ={{marginTop: "10px"}}>
        <SearchBar onSubmit = {this.onSearchSubmit}/>
        { content}
        {/* found {this.state.images.length} images
        <ImageList list= {this.state.images}/> */}
        </div>
      )
  }
  
}

export default App;

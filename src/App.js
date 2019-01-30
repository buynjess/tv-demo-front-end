import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import SiteNav from "./siteNav"
import ManagePage from './ManagePage';
import PreviewPage from "./PreviewPage"
class App extends Component {

  state = {tvShow:{name:"", rating:"", img:""}, tvShows:[]} 

  tvShowDeleted = () => {
    this.setState({
        tvShow:{
            name:"",
            rating:"",
            img:""
        }
    })
    console.log("tvShowDeleted")
}
saveTvShow = (ObjshowToSave) => {

    this.setState((prevState) => {
      // console.log(prevState)
      return{
        tvShows:[...prevState.tvShows,ObjshowToSave]
      }
    })
}

renderPreviewPage = () => {
  return(
    <div>
      <PreviewPage tvShows={this.state.tvShows}/>
    </div>
  )
}

renderManagePage = () => {
  return(
    <div>
      <ManagePage tvShows={this.state.tvShows} tvShowDeleted={this.tvShowDeleted} saveTvShow={this.saveTvShow}/>
    </div>
  )
}

  render() {
    // console.log(this.state)
    return (
      <div>
            <SiteNav/> 
            <Switch>
            <Route exact path="/" component={this.renderManagePage} />
            <Route path="/PreviewPage" component={this.renderPreviewPage} />
            </Switch> 

      </div>
    );
  }
}

export default App;

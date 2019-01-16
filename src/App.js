import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import SiteNav from "./siteNav"
import ManagePage from './ManagePage';
import PreviewPage from "./PreviewPage"
class App extends Component {

  state = {tvShow:{name:"", rating:"", img:""}} 

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

    this.setState({
      tvShow: ObjshowToSave
    })
    console.log(ObjshowToSave)

}

renderManagePage = () => {
  return(
    <div>
      <ManagePage tvShow={this.state.tvShow} tvShowDeleted={this.tvShowDeleted} saveTvShow={this.saveTvShow}/>
    </div>
  )
}

  render() {
    return (
      <div>
            <SiteNav/> 
            <Switch>
            <Route exact path="/" component={this.renderManagePage} />
            <Route path="/PreviewPage" component={PreviewPage} />
            </Switch> 
            
      </div>
    );
  }
}

export default App;

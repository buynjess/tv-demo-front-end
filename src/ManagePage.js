import React, { Component } from "react"
import TvShow from "./TvShow"


export default class ManagePage extends Component{
    tvShowSelected = () => {
        console.log("tvShowSelected")
    }
    tvShowDeleted = () => {
        console.log("tvShowDeleted")
    }
    saveTvShow = () => {
        this.setState({
            tvShow:{
                name:this.state.nameInProgress,
                rating:this.state.ratingInProgress,
                img:this.state.imgInProgress
            },
            nameInProgress:"",
            ratingInProgress:"",
            imgInProgress:""
        })
        console.log("saveTvShow")

    }
    renderTvShow = () => {
        return(<TvShow name={this.state.tvShow.nameInProgress} allowDelete={true} selectHandler={this.tvShowSelected}deleteHandler={this.tvShowDeleted}saveHandler={this.saveTvShow}/>)
    }
    state = {nameInProgress:"", ratingInProgress:"", imgInProgress:"", tvShow:{name:"", rating:"", img:""}}

    render = () => {
        return(
            <div>
            
                <div className="lower-container">
                <aside>
                    <h2>Shows</h2>
                    {this.renderTvShow()}
                </aside>
                <section>
                    <h2>New/Edit Show</h2>
                    <form>
                        Name: <input onChange={(e) => {
                            this.setState({ nameInProgress: e.target.value })
                            }}type="text" value={this.state.nameInProgress}/>
                        <br/> 
                        Rating:<input onChange={(e) => {
                            this.setState({ ratingInProgress: e.target.value })
                            }} type="text" value={this.state.ratingInProgress}/>
                        <br/>      
                        Img URL:<input onChange={(e) => {
                            this.setState({ imgInProgress: e.target.value })
                            }} type="link" value={this.state.imgInProgress}/> 
                        <br/>
                        <button onClick={this.saveTvShow}>Create/Update/Save</button>
                        </form>
                    </section>
                    </div>
            </div>
        )
    }
}


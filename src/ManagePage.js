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
        console.log("saveTvShow")
    }
    renderTvShow = () => {
        return(<TvShow allowDelete={true} selectHandler={this.tvShowSelected}deleteHandler={this.tvShowDeleted}saveHandler={this.saveTvShow}/>)
    }
    state = {nameInProgress:"", ratingInProgress:"", imgInProgress:""}

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
                        Name: <input onChange={(event) =>{this.setState({ nameInProgress: event.target.value })}}type="text" value="nameInProgress"/>
                        <br/> 
                        Rating:<input onChange={(event) =>{this.setState({ ratingInProgress: event.target.value })}} type="text" value="ratingInProgress"/>
                        <br/>      
                        Img URL:<input onChange={(event) =>{this.setState({ imgInProgress: event.target.value })}} type="link" value="imgInprogress"/> 
                        <br/>
                        <button>Create/Upadate</button>
                        </form>
                    </section>
                    </div>
            </div>
        )
    }
}


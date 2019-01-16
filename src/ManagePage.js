import React, { Component } from "react"
import TvShow from "./TvShow"
import propTypes from 'prop-types'


export default class ManagePage extends Component{
    tvShowSelected = () => {
        this.setState({
            nameInProgress:this.props.tvShow.name,
            ratingInProgress:this.props.tvShow.rating,
            imgInProgress:this.props.tvShow.img
        })
        console.log("tvShowSelected")
    
    }
    tvShowDeleted = () => {
        this.props.tvShowDeleted()    
        console.log("tvShowDeleted")
    }
    passTvShowUp = (event) => {
        event.preventDefault()
        this.props.saveTvShow({
            name: this.state.nameInProgress,
            rating:this.state.ratingInProgress,
            img:this.state.imgInProgress
        })
        this.setState({
            nameInProgress:"",
            ratingInProgress:"",
            imgInProgress:""
        })
        console.log("saveTvShow")

    }
    renderTvShow = () => {
        console.log('from renderTvShowOnManagePage', this.props.tvShow)
        return(<TvShow name={this.props.tvShow.name} allowDelete={true} selectHandler={this.tvShowSelected}deleteHandler={this.tvShowDeleted}saveHandler={this.saveTvShow}/>)
    }
    static propTypes = {
        tvShow: propTypes.object.isRequired,
        tvShowDeleted: propTypes.func.isRequired,
        saveTvShow: propTypes.func.isRequired

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
                        <button onClick={this.passTvShowUp}>Create/Update/Save</button>
                        </form>
                    </section>
                    </div>
            </div>
        )
    }
}


import React, { Component } from "react"
import TvShow from "./TvShow"
import propTypes from 'prop-types'

export default class PreviewPage extends Component{
    
    tvShowSelected = () => {
        this.setState({
            selectedShow:{
                name:this.props.tvShow.name, 
                rating:this.props.tvShow.rating, 
                img:this.props.tvShow.img}
        })
    }    
    static propTypes = {
        tvShow: propTypes.object.isRequired
    }

    state = {
        selectedShow: {name:"", rating:"", img:""}
    }



    renderTvShow = () => {
        return(
            <TvShow name={this.props.tvShow.name} selectHandler={this.props.tvShowSelected}/>
        )
    }
    render(){
        return(
            <div>
                <div className = "lower-container">
                    <aside>
                         <h2>Shows</h2>
                         {this.renderTvShow()}
                    </aside>
                    <section>
                    <TvShow name={this.state.selectedShow.name}selectHandler={this.props.tvShowSelected}/>  
                    </section>
                </div>
            </div>

        )
    }
}

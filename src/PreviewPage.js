import React, {Component} from "react"
import TvShow from "./TvShow"
import propTypes from 'prop-types'

export default class PreviewPage extends Component {

    tvShowSelected = () => {
        this.setState({
            selectedShow: {
                name: this.props.tvShow.name,
                rating: this.props.tvShow.rating,
                img: this.props.tvShow.img
            }
        })
    }
    static propTypes = {
        tvShow: propTypes.object.isRequired,
        tvShows: propTypes.array.isRequired
    }

    state = {
        selectedShow: {
            name: "",
            rating: "",
            img: ""
        }
    }

    renderTvShow = () => {
        // console.log('from renderTvShowOnManagePage', this.props.tvShows)
        let showsArray = this.props.tvShows;
        return showsArray.filter((show) => show.rating < 4).map((show) => {
            return ( <TvShow name = {show.name} 
                            allowDelete = {true} 
                            selectHandler = {this.tvShowSelected} 
                             deleteHandler = {this.tvShowDeleted} 
                             saveHandler = {this.saveTvShow} 
                             tvShows = {show}/>
            )
        })
    }
    calculateAvgRating = () => {
        console.log(this.props.tvShows)
        return this.props.tvShows.reduce((acc, curval) => {
            console.log(acc.rating)
            console.log(curval.rating)
            return (acc + parseInt(curval.rating)/this.props.tvShows.length)
        },0);
    }

    // calculateAvgRating = () => {
    //     console.log(this.props.tvShows)
    //     this.props.tvShows.map((a) => {
    //         console.log(a.rating)
    //         return a.rating
    //     }).reduce((acc, curval) => {
    //         console.log(acc + curval)
    //     },0);
    // }

    render = () => {
        return(
            <div>
                <div className = "lower-container">
                    <aside>
                         <h2>Shows</h2>
                         {this.calculateAvgRating()}
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
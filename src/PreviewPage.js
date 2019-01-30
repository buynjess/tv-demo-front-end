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
        tvShow: propTypes.object.isRequired,
        tvShows: propTypes.array.isRequired
    }

    state = {
        selectedShow: {name:"", rating:"", img:""}
    }

    renderTvShow = () => {
        // console.log('from renderTvShowOnManagePage', this.props.tvShows)
            let showsArray = this.props.tvShows;
            return showsArray.filter((show)=>show.rating < 4
            ).map((show) => {
                return (
                <TvShow name={show.name}
                        allowDelete={true}
                        selectHandler={this.tvShowSelected}
                        deleteHandler={this.tvShowDeleted}
                        saveHandler={this.saveTvShow}
                        tvShows={show}/>
                        )
            })
        }
        calculateAvgRating = () => {
            console.log(this.props.tvShows)
            this.props.tvShows.map((e)=>{
                return e.rating
            }).reduce((acc, currval) => {
               console.log(acc + currval) 
            })
            //calculate the ave rateing of all tvshows

                //sum the values of values from the array
                //get length of array
                //divide array by sum of length
            //return 0 when no tvshows
            //return the rating of single tvshow 

        }

    // renderTvShow = () => {
    //     console.log(this.props.tvshows)
    //     // const showsArray = this.props.tvShows;
    //     // const rateingFilter = rate.filter(rate => rate <= 4);
    
    //     return(
    //         <TvShow name={this.props.tvShow.name} selectHandler={this.props.tvShowSelected}/>
    //     )
    // }
    render(){
        this.calculateAvgRating()
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

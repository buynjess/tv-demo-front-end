import React, { Component } from "react"
import TvShow from "./TvShow"
import propTypes from 'prop-types'


export default class ManagePage extends Component{
    
    async componentDidMount(){
       const res = await fetch('http://localhost:4000/shows')
       const newTvShows = await res.json()
         this.setState({
                tvShows: newTvShows
            })
        
        // fetch('http://localhost:4000/shows') 
        // .then((res) => res.json())
        // .then((newTvShows)=>{
        //     console.log(newTvShows)
        //     this.setState({
        //         tvShows: newTvShows
        //     })
        // }).catch((res) => res)
    }
    
    tvShowSelected = ( ) => {
        this.setState({
            nameInProgress:this.state.tvShow.name,
            ratingInProgress:this.state.tvShow.rating,
            imgInProgress:this.state.tvShow.img
        })
        // console.log("tvShowSelected")
    
    }
    tvShowDeleted = () => {
        this.state.tvShowDeleted()    
        // console.log("tvShowDeleted")
    }
    async passTvShowUp(event){
        event.preventDefault()
        const newTvShow = {
            name: this.state.nameInProgress,
            rating:Number(this.state.ratingInProgress),
            img:this.state.imgInProgress
        }
        const res = await fetch('http://localhost:4000/shows', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTvShow)
        })
        const newTvShows = await res.json()
            this.setState({
                tvShows: newTvShows
            })
        };

        // this.state.saveTvShow({
        //     name: this.state.nameInProgress,
        //     rating:Number(this.state.ratingInProgress),
        //     img:this.state.imgInProgress
        // })
        // this.setState({
        //     nameInProgress:"",
        //     ratingInProgress:"",
        //     imgInProgress:""
        // })
        // console.log("saveTvShow")

    
    renderTvShow = () => {

        // console.log('from renderTvShowOnManagePage', this.props.tvShows)
            console.log(this.state.tvShows)
            let newShowArray = this.state.tvShows.map((show)=>{
                return (<TvShow name={show.name}
                                            allowDelete={true}
                                            selectHandler={this.tvShowSelected}
                                            deleteHandler={this.tvShowDeleted}
                                            saveHandler={this.saveTvShow}
                                            tvShows={show}/>)
            })
            return newShowArray
    }

     static propTypes = {
        tvShow: propTypes.object.isRequired,
        tvShows: propTypes.array.isRequired,
        tvShowDeleted: propTypes.func.isRequired,
        saveTvShow: propTypes.func.isRequired

    }
    state = {nameInProgress:"", ratingInProgress:"", imgInProgress:"", tvShows:[]} 


    render(){
        console.log(this.state)
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
                        <button onClick={this.passTvShowUp }>Create/Update/Save</button>
                        </form>
                    </section>
                    </div>
            </div>
        )
    }
}


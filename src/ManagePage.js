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

    render(){
        return(
            <div>
            
                <div className="lower-container">
                <aside>
                    <h2>Shows</h2>
                    <TvShow name="Dancing With The Stars" allowDelete={true} selectHandler={this.tvShowSelected}deleteHandler={this.tvShowDeleted}saveHandler={this.saveTvShow}/>
                </aside>
                <section>
                    <h2>New/Edit Show</h2>
                    <form>
                        Name: <input onChange={this.setState({ nameInProgress: event.target.name })} type="text" value="Name"/>
                        <br/>
                        Rating:<input onChange={this.setState({ ratingInProgress: event.target.name })} type="text" value="Rating"/>
                        <br/>      
                        Img URL:<input onChange={this.setState({ imgInProgress: event.target.name })} type="link" value="Img"/>
                         {/* <br/> */}
                         <button>Create/Upadate</button>
                        </form>
                    </section>
                    </div>
            </div>
        )
    }
}


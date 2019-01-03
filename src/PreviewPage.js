import React, { Component } from "react"
import TvShow from "./TvShow"

export default class PreviewPage extends Component{
    render(){
        return(
            <div>
                <div className = "lower-container">
                    <aside>
                         <h2>Shows</h2>
                         <TvShow/>
                    </aside>
                    <section>
                        <h2>Dancing with the stars</h2>
                        <h3>Rating: 1</h3>
                        <img src="https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2013/07/tango.jpg" alt="Dancing With the Stars"/>
                    </section>
                </div>
            </div>

        )
    }
}

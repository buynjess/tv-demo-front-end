import React, { Component } from "react"
import TvShow from "./TvShow"
// import SiteNav from "./siteNav"

export default class ManagePage extends Component{
    render(){
        return(
            <div>
            
                <div className="lower-container">
                <aside>
                    <h2>Shows</h2>
                    <TvShow allowDelete={true}/>
                    {/* <ul>
                        <li>Dancing with the stars<button >-</button></li>
                        <li>American Ninja Warrior<button >-</button></li>
                        <li>Walking Dead<button >-</button></li>
                    </ul> */}
                </aside>
                <section>
                    <h2>New/Edit Show</h2>
                    <form>
                        Name: <input type="text"/>
                        <br/>
                        Rating: 
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <br/>      
                        Img URL:<input type="link"/>
                         <br/>
                         <button>Create/Upadate</button>
                        </form>
                    </section>
                    </div>
            </div>
        )
    }
}


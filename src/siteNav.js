import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import ManagePage from "./ManagePage"
import PreviewPage from "./PreviewPage"



class SiteNav extends Component{

    render (){
        return (
                <div>
                    <nav>
                     <ul className="upper-container">
                        <li className="upper-container>li"><Link to="/"><h1>ManagePage</h1></Link></li>
                        <li className="upper-container>liS"><Link to="/PreviewPage"><h1>PreviewPage</h1></Link></li>
                     </ul>
                    </nav>
                <Route exact path="/" component={ManagePage} />
                <Route path="/PreviewPage" component={PreviewPage} />
                </div>
    
        )
    }
}
export default SiteNav
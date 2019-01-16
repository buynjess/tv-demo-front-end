import React, {Component} from 'react'
import { Link } from 'react-router-dom'




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
                </div>
    
        )
    }
}
export default SiteNav
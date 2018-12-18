import React, { Component } from 'react'

export default class extends Component {

 renderDelete () {
     if(this.props.allowDelete){
         return(<button>{this.props.allowDelete}</button>)
     }
}

    render(){
        return(
            <div>
                <button>{this.props.name}</button>
                {this.renderDelete()}

            </div>
        )
    }
}
import React, { Component } from 'react'

export default class extends Component {

 renderDelete () {
     if(this.props.allowDelete){
         return(<button onClick= {this.props.selectHandeler}>{this.props.allowDelete}</button>)
     }
}

    render(){
        return(
            <div>
                <button onClick={this.props.deleteHandeler}>{this.props.name}</button>
                {this.renderDelete()}

            </div>
        )
    }
}
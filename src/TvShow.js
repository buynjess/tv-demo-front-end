import React, { Component } from 'react'

export default class extends Component {

 renderDelete () {
     if(this.props.allowDelete){
         return(<button onClick= {this.props.deleteHandler}>Delete</button>)
     }
}

    render(){
        return(
            <div>
                <button onClick={this.props.selectHandler}>{this.props.name}</button>
                {this.renderDelete()}
                <button onClick={this.props.saveHandler}>Save</button>
            </div>
        )
    }
}
import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class TvShow extends Component {
    static propTypes = {
        name: propTypes.string,
        optionalBool: propTypes.bool,
        selectHandler: propTypes.func.isRequired,
        deleteHandler: propTypes.func
    }

 renderDelete () {
     if(this.props.allowDelete){
         return(<button onClick= {this.props.deleteHandler}>Delete</button>)
     }
}

    render(){
        console.log(this.props)
        return(
            <div>
                <button onClick={this.props.selectHandler}>{this.props.name}</button>
                {this.renderDelete()}
            </div>
        )
    }
}
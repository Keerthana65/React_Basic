
import React, { Component } from 'react'

export class Welcome extends Component{
    render(){
        const {name,lastname} = this.props
        return(
            <h1>Class Components{name} {lastname}</h1>
        )
    }
}

import React, { Component } from 'react'

export class Message extends Component {
    constructor(){
        super()
        this.state={
            message:'Welcome React'
        }
    }

    changeMessage(){
        this.setState({
            message:'Thank you for subcribing'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>{this.changeMessage()}}>Action</button>
            </div>

        )
    }
}
import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hi React'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message:'Good Bye React'
        })

        console.log(this)
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}
                {/* <button onClick={()=>{this.clickHandler()}}>Click Me</button> */}
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default EventBind

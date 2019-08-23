import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    inCrement() {
        // this.setState({
        //    count:this.state.count+1
        // },
        // ()=>{
        //     console.log('Callvalue ', this.state.count)
        // })

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    inCrementFive(){
        this.inCrement();
        this.inCrement();
        this.inCrement();
        this.inCrement();
        this.inCrement();
    }
    render() {
        return (
            <div>
                <h1>Count-{this.state.count}</h1>
                <button onClick={() => this.inCrementFive()}>Action</button>
            </div>

        )
    }
}
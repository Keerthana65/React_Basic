import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {
    //    if(this.state.isLoggedIn){
    //        return(
    //            <div>Welcome React</div>
    //        )
    //    }else{
    //        return(
    //            <div>Welcome Java</div>
    //        )
    //    }

    let message;
    if(this.state.isLoggedIn){
      message = <div>Welcome React</div>
    }else{
      message = <div>Welcome Java</div>
    }
    return(
        <div>{message}</div>
    )
    }
}

export default UserGreeting

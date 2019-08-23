import React, { Component } from 'react';

export class Hello extends Component{
    render(){
        // return(
        //     <div>
        //         <h1>Hello Keerthi</h1>
        //     </div>
        // )

        return React.createElement('div',{id:'Hello', className:'dummyClass'},React.createElement('h1',null,'Hello World'));
    }
    
}
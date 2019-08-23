import React from 'react';

 export function Greet(props){
    console.log(props);
    return(
        <div>
            <h1>I'm {props.name} {props.lastname}</h1>
            {props.children}
        </div>
    )
}


// const Greet = (props) => {
//     console.log(props);
//     return  <h1>I'm Keerthi</h1>
// }

// export default Greet
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Welcome } from './components/Welcome';
import { Hello } from './components/Hello';
import { Message } from './components/Message';
import { Counter } from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponents from './components/ParentComponents';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      <UserGreeting/>
      {/* <ParentComponents/> */}
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
     {/* <Greet name='ABC' lastname='abc'>
       <p>This is Children Props</p>
     </Greet>
     <Welcome name='ABC' lastname='abc'/> */}
     {/* <Greet name='PQR' lastname='pqr'>
       <button>Action</button>
     </Greet>
     <Greet name='XYZ' lastname='xyz'/>
     <Welcome name='ABC' lastname='abc'/>
     <Welcome name='ABC' lastname='abc'/> */}
     {/* <Hello/> */}
    </div>
  );
}

export default App;

import './App.css';
import {useState} from 'react';
import Child, {myLastName} from './Child';
import ClassComponent from './components/ClassComponent';
import styles from './appStyles';

function App() {
    const [isVisible, setIsVisible] = useState();
    const [name, setName] = useState('');
    const props = {firstName:"Kamal", lastName: "Walia"}
    const names  = ["Kamal", "Walia", "Hello", "World"]
  return (
    <div className="App">
      <div className="App-header">
        {myLastName}
        {new Date().toLocaleTimeString()}
        <input type="text" value={name} onChange={(event) => {
          console.log('KW103', event);
          setName(event.target.value)} 
        }/>
        {isVisible && <ClassComponent name={name} />}
        <button onClick={() => setIsVisible(!isVisible)}>Toggle Class Component</button>
      </div>

      <div style={{backgroundColor:"yellow", border:1, margin:10, borderStyle:"dotted"}}>
        <p style={styles.para}>Hello World</p>
      </div>
      <Child {...props}/>
      {
        names.map((item, index) => (<p key={index}>{item}</p>))
      }
      {[<p key={"hi"}>hi</p>, <p key={"hello"}>Hello</p>]}
    </div>
  );
}



export default App;

import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Active from './components/Active';
import Main from './Main';


function App() {
  return (
    <div className="App">
      <div>
        <Main/>
       <Active/>
      </div>
    </div>
  );
}

export default App;

// <button onClick={handleClick}>Generate Cat Fact</button> <br />
// {catfact}
// const [catfact, setFact] = useState("");

// function handleClick() {
//   axios.get('https://catfact.ninja/fact')
//     .then((res) => {
//       setFact(res.data.fact);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// useEffect(() => {
//   axios.get('https://catfact.ninja/fact')
//     .then((res) => {
//       setFact(res.data.fact);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);
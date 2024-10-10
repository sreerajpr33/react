import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample_class from './component/sample'
import Demo_class from './component/demo'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//           <p>count is {count}</p>
//         <button onClick={() => setCount((count) => count + 1)}>
//           +
//         </button>
//         <button onClick={() => count>0 && setCount((count) => count - 1)}>
//           -
//         </button>
//       </div>
//     </>
//   )
// }
function App() {
  return(
    <>
    <div>
      <Sample_class />  
      <Demo_class color='blue' height='50px'/>
    </div></>
  )
}



export default App

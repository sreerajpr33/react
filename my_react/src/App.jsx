import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
  const data=[
  {id:1,name:'yo', age:20},
  {id:2,name:'ye',age:30},
  {id:3,name:'ya',age:20},
  ]

return(
  <>
  <h1>student details</h1>
  <table>
    <thead>
      <th>ID</th>
      <th>Name</th>
      <th>AGE</th>
    </thead>
    <tbody>
      {data.map((element)=>(
        <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.name}</td>
        <td>{element.age}</td>
        </tr>
      ))}
    </tbody>
  </table>
  </>
)
}

export default App

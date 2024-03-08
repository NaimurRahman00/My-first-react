import './App.css'
import Counter from './Counter';
import Team from './Team';
import New from './New';


function App() {

  function handleClick() {
    alert('Alhamdulillah');
  }

  const addBtn = (num1, num2) => {
    alert(num1 + 5);
  }

  return (
    <>
      <h1>React core concept</h1>
      <New></New>
      <Counter></Counter>
      <Team></Team>
    </>
  )
}

export default App

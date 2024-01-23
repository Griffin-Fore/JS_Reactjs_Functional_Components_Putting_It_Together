
import './App.css'
import Person from './Components/Person'
function App() {

  return (
    <>
        <Person firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
        <Person firstName="John" lastName="Smith" age={65} hairColor="Brown"/>
    </>
  )
}

export default App

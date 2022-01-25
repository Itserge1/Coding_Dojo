import './App.css';


import PersonCard from './components/PersonCard';

const person1 = {firstName :"Jane", lastName:"Doe", age: 45, hairColor: "Black"}
const person2 = {firstName :"John", lastName:"Smith", age: 88, hairColor: "Brown"}

function App() {
  return (
    <div className="App">
      <PersonCard person = {person1}/>
      <PersonCard person = {person2}/>
    </div>
  );
}

export default App;

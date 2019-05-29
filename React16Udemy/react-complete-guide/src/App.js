import React from 'react';
import './App.css';
import Person from './Person/Person'

const app = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Max', age: 29 },
      { name: 'Maxi', age: 22 },
      { name: 'Maxim', age: 30 },
    ]
  });

  const [otherState, setotherState] = useState('some other value');

  console.log(personState, setPersonState);

   switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 11 },
        { name: 'Max3', age: 13 },
        { name: 'Max4', age: 12 },
      ]
    })
  }
  render(){
    return (
      <div className="App">
        <h1> Hi React App</h1>
        <p>This is paragraf</p>
        <button onClick={ ()=>this.switchNameHandler('Maximilia')} >SwitName</button>
        <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} />
        <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Max!!')}
        />
        <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age} />
      </div>
    );
  }
}
export default App;

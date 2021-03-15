
import React , {Component} from 'react';
import Table from './Table'
import Form from './Form'


class App extends Component{
  state = {
    characters : [
      {
        name : 'Chau Ngo',
        job : 'Student'
      },
      {
        name : 'Tam Nguyen',
        job : 'Accounting'
      }, 
      {
        name : 'Chieu',
        job : 'Software Engineer'
      }, 
      {
        name : 'Ta',
        job : 'N/a'
      }
    ]
  }
  removeCharacter = (index) => {
    const {characters} = this.state

    this.setState({
      characters : characters.filter((character , i) =>{
        return i !== index
      }),
    })
  }
  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }
  render(){
    const {characters} = this.state
    /*
    const characters = [
      {
        name : 'Chau Ngo',
        job : 'Student'
      },
      {
        name : 'Tam Nguyen',
        job : 'Accounting'
      }, 
      {
        name : 'Chieu',
        job : 'Software Engineer'
      }, 
      {
        name : 'Ta',
        job : 'N/a'
      }
    ]
*/
    return (
      <div className="container">
        <Table characterData = {characters} removeCharacter = {this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
    /*
    return (
      
      <div className = "container">
        <Table />
        </div>
      )
      */
    }
  }
export default App;

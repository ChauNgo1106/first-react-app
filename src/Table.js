import React, {Component} from 'react';

//define outside class Table
const TableHeader = () => {
  return (
    <thread>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thread>
  )
}

const TableBody = (props) => {
  
  const rows = props.characterData.map((row , index) =>{
    return (
      <tr key = {index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
  )})
  return <tbody>{rows}</tbody>
}

  /*
    <tbody>
      <tr>
        <td>Charlie</td>
        <td>Actress</td>
      </tr>
      <tr>
        <td>Chau</td>
        <td>Student</td>
      </tr>
      <tr>
        <td>Tam</td>
        <td>Accounting</td>
      </tr>
    </tbody>
  )

}
  */
const MyName = () => {
  return (
    <h1> Ngo Bao Chau Dep Trai </h1>
  )
}

const Table = (props) =>{
  const {characterData , removeCharacter} = props
  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  )
}
/*
class Table extends Component{
  render(){
    const {characterData} = this.props
    return (
      <table>
        <TableHeader />
        <TableBody  characterData = {characterData}/>
        <MyName />
      </table>
      /*
      <table>
        <thread>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thread>

        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Actress</td>
          </tr>
          <tr>
            <td>Chau</td>
            <td>Student</td>
          </tr>
          <tr>
            <td>Tam</td>
            <td>Accounting</td>
          </tr>
        </tbody>
      </table>
      */
export default Table

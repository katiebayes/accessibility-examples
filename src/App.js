import React from 'react';
import './App.css';

const tableHeaders = [
  'Name',
  'Birthday',
  'Fav color'
]

const tableValuesUsingJSON = [
  {
    name: 'Katie',
    birthday: 'June 9',
    favColor: 'Purple'
  },
  {
    name: 'Owen',
    birthday: 'Jan 6',
    favColor: 'Green'
  }
]

const Th = props => {
  return (
    <th scope="col">
      {props.children}
    </th>
  )
}

const Tr = props => {
  const { values } = props;
  const keys = Object.keys(values);
  return (
    <tr>
      {keys.map(eachKey => {
        return (
          <td key={eachKey}>{values[eachKey]}</td>
        )
      })}
    </tr>
  )
}

const Table = props => {
  // you can move the standard stuff into a reusable component 
  // so you don't have to touch it in layouts
  const numberOfColumns = tableHeaders.length;
  return (
    <table>
      <colgroup>
        <col />
        <col span={numberOfColumns} />
        <col span={numberOfColumns} />
      </colgroup>
      <thead>
      <tr>
        {props.headers.map((each, key) => {
          return (
            <Th key={key}>{each}</Th>
          )
        })}
      </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </table>
  )
}

function App() {
  return (
    <article className="App">
      <h1>Accessibility Tips</h1>
      <section>
        <h2>Use W3 Standard Tables</h2>
        <h3>It will make everything easier!</h3>
        <Table headers={tableHeaders}>
          {tableValuesUsingJSON.map((each, key) => {
            return <Tr key={key} values={each} />
          })}
        </Table>
      </section>
    </article>
  );
}

export default App;

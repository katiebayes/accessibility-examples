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
  console.log(keys);
  return (
    <tr>
      {keys.map(eachKey => {
        return (
          <td>{values[eachKey]}</td>
        )
      })}
    </tr>
  )
}

const Table = props => {
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
        {props.headers.map(each => {
          return (
            <Th>{each}</Th>
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
        <h2>
        </h2>
        <pre style={{textAlign: "left"}}>
          {`
          h2 {
            font-size: 1.2em;
            color: purple;
          }
          `}
        </pre>
      </section>
      <section>
        <h2>Tables</h2>
        <Table headers={tableHeaders}>
          {tableValuesUsingJSON.map(each => {
            return <Tr values={each} />
          })}
        </Table>
      </section>
    </article>
  );
}

export default App;

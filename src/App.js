import './App.css';
import './style.css'
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [record, setRecord] = useState([]);
  const [datarecord, setRecordData] = useState([]);
console.log(datarecord);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => res.json())
      .then((data) => setRecord(data))
      .catch((err) => {
        console.log(err);
        return false;
      });
  }, []);

  useEffect(() => {
    axios.get(`https://dummyjson.com/posts`)
      .then((res) => {
        // Update the datarecord state with the retrieved data
        setRecordData(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 style={{ color: 'white' }}>Fetch Api</h1>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>albumId</th>
              <th>id</th>
              <th>title</th>
              <th>image</th>
              <th>thumbnail</th>
            
            </tr>
          </thead>
          <tbody>
            {record.map((data) => (
              <tr key={data.id}>
                <td>{data.albumId}</td>
                <td>{data.id}</td>
                <td>{data.title}</td>
                
                <td>
                  <img src={data.url} alt={`Image for `} style={{ width: '70px' }} />
                </td>
                <td>
                  <img src={data.thumbnailUrl} alt={`Image for `} style={{ width: '70px' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />

        <h1 style={{ color: 'white' }}>Axios Api</h1>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>body</th>
              <th>id</th>
              <th>userId</th>
              <th>tags</th>
              <th>title</th>
             
            </tr>
          </thead>
          <tbody>
            {datarecord.map((val) => (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.body}</td>
                <td>{val.userId}</td>
                <td>{val.tags}</td>
                <td>{val.title}</td>
               
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;

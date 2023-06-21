import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            setMyData(response.data);
        });
    }, []);
  return (
    <>
        <ul>
            {myData.map(val => <li key={val.id}>{val.name}</li>)}
        </ul>
    </>
  )
}

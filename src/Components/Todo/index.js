import React, { useState } from 'react';
import './style.css';
import { Button } from 'react-bootstrap';

export default function Todo(){
    const [activity, setActivity] = useState("");
    const [listData, setListData] = useState([]);
    const handleInput = e => setActivity(e.target.value);
    const addActivity = () => {
        setListData((listData) => {
            const updatedList = [...listData, activity];
            setActivity("");
            return updatedList;
        })
    };
    const handleRemove = (id) => {
        const newList = listData.filter((elem, ind) => {
            return id!=ind;
        })
        setListData(newList);
    }

    const handleRemoveAll = () => {
        setListData([]);
    }
    return(
        <>
            <div className="container">
                <h1 className="title">Todo List</h1>
                <input type="text" placeholder='Add activity...' value={activity} onChange={handleInput}/>
                <Button className="addbtn" onClick={addActivity}>Add</Button>
                <h2 className="list-title">Here is your list : {')'}</h2>
                <ul>
                    {listData != [] && listData.map((val, ind) => {
                        return (
                            <>
                                <li key={ind}>
                                    <b>{val}</b>
                                    <Button className="removeBtn" onClick={()=>handleRemove(ind)}>Remove</Button>
                                </li> 
                            </>
                        )
                    })}
                </ul>
                {listData.length > 0 && <Button onClick={handleRemoveAll} className='removeAll'>Remove All</Button>}
            </div>
        </>
    )
}
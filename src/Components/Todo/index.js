import React, { useState } from 'react';
import './style.css';
import { Button } from 'react-bootstrap';

export default function Todo() {
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
            return id != ind;
        })
        setListData(newList);
    }

    const handleRemoveAll = () => {
        setListData([]);
    }
    return (
        <>
            <div className="container bg-success">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="title text-center m-3 text-warning bg-danger p-3">Todo List</h1>
                        <input type="text" placeholder='Add activity...' value={activity} onChange={handleInput} className="form-control" />
                        <Button className="addbtn m-5" onClick={addActivity}>Add</Button>
                        <h2 className="list-title text-center text-warning">Here is your list : {')'}</h2>
                        <ul>
                            {listData != [] && listData.map((val, ind) => {
                                return (
                                    <>
                                        <li key={ind} className='text-center bg-warning m-2'>
                                            <b className="text-light">{val}</b>
                                            <Button className="removeBtn m-3" onClick={() => handleRemove(ind)}>Remove</Button>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                        {listData.length > 0 && <Button onClick={handleRemoveAll} className='removeAll m-5 bg-danger'>Remove All</Button>}
                    </div>
                </div>
            </div>
        </>
    )
}
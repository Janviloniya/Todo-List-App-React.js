import React, { useState } from 'react';

function Todolist() {
    const [activity, setActivity] = useState("");
    const [listData, setListData] = useState([]);

    function addActivity() {
        setListData((prevListData) => {
            const updatedList = [...prevListData, activity];
            console.log(updatedList);
            setActivity('');
            return updatedList;
        });
    }

    function removeActivity(index) {
        const updatedListData = listData.filter((_, id) => index !== id);
        setListData(updatedListData);
    }

    function removeAll() {
        setListData([]);
    }

    return (
        <div className='container'>
            <div className='header'>TODO LIST</div>
            <input
                type='text'
                placeholder='Add Activity'
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
            />
            <button onClick={addActivity}>Add</button>
            <p className='List-heading'>Here is your List :)</p>
            {listData.length > 0 && (
                <>
                    {listData.map((data, i) => (
                        <p key={i}>
                            <div className='ListData'>{data}</div>
                            <div className='btn-position'>
                                <button onClick={() => removeActivity(i)}>remove(-)</button>
                            </div>
                        </p>
                    ))}
                    <button onClick={removeAll}>Remove All</button>
                </>
            )}
        </div>
    );
}

export default Todolist;

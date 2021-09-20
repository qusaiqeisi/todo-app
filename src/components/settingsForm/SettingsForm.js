import React, { useContext, useEffect, useState } from 'react';
import { settingContext } from '../../context/settings';

function SettingsForm() {
    const settings = useContext(settingContext)
    const [show, setShow] = useState(true);
    const [numOfitems, setNumOfitems] = useState(1);

    function handleItemNumber(e) {
        setNumOfitems(Number(e.target.value));
    }
    function handleView(e) {
        if (e.target.checked) {
            setShow(e.target.checked);
        } else {
            setShow(e.target.checked);
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        settings.setItemPerPage(Number(numOfitems));
        settings.setShowCompleted(show);
    }

    useEffect(() => {
        let payload = {
            itemPerPage: settings.itemPerPage,
            showCompleted: settings.showCompleted,
        }
        if (settings.itemPerPage) {
            localStorage.setItem('settings', JSON.stringify(payload));
        }
    }, [settings])

    return (
        <div>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <label>Number of items shown per page</label>
                <input name='items' type='number' placeholder={1} value={numOfitems} min={1} onChange={handleItemNumber}></input>
                <label>View completed items</label>
                <input name='view' type='checkbox' onChange={handleView}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SettingsForm
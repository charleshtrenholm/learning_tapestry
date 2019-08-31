import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';


function EditTable() {
    const styles = {
        width: '500px',
        height: '500px',
        backgroundColor: 'red'
    };

    const [edits, setEdits] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
        }
        fetch(
            'https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=recentchanges&format=json&rcstart=2019-08-29T10:59:20Z&rcnamespace=0&rcshow=!minor%7C!bot%7C!anon%7C!redirect&rclimit=500&rcdir=newer',
            options
        )
        .then(result => console.log(result.json()));
    })

    return(
        <div className="col-12">
            <NavBar />
            {edits.length ? 
                <div style={styles}></div>
                : <p>loading</p>
            }
        </div>
    );
}

export default EditTable;
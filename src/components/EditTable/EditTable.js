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
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setEdits(result.query.recentchanges);
        });
    })

    return (
        <div className="row justify-content-center">
            <div className="col-10">
                <NavBar />
                {edits.length ? 
                    (<table className="table table-striped table-dark">
                        <thead>
                            <th>Title</th>
                            <th>revID</th>
                            <th>old revID</th>
                            <th>Edited on</th>
                        </thead>
                        <tbody>
                            {edits.map(edit => (
                                <tr>
                                    <td>{edit.title}</td>
                                    <td>{edit.revid}</td>
                                    <td>{edit.old_revid}</td>
                                    <td>{edit.timestamp}</td>
                                </tr>
                            )              
                        )}
                        </tbody>
                    </table>
                    )
                    : <p>loading</p>
                }
            </div>
        </div>
    ); 
}

export default EditTable;
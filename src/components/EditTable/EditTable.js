import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';


function EditTable() {
    const styles = {
        width: '500px',
        height: '500px',
        backgroundColor: 'red'
    };
    const d = new Date();
    d.setHours(d.getHours() - 1);
    // set default date to 1 hour ago
    const [edits, setEdits] = useState([]);
    const [date, setDate] = useState(d);

    useEffect(() => {
        const options = {
            method: 'GET',
        }
        fetch(
            `https://en.wikipedia.org/w/api.php?` +
            `&origin=*&action=query&list=recentchanges&format=json&rcstart=${date.toISOString()}` + 
            `&rcprop=title|ids|user|userid|comment|parsedcomment` +
            `&rcnamespace=0&rcshow=!minor%7C!bot%7C!anon%7C!redirect&rclimit=50&rcdir=newer`,
            options
        )
        .then(response => response.json())
        .then(result => {
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
                            <tr>
                                <th>Title</th>
                                <th>revID</th>
                                <th>Page ID</th>
                                <th>Edited By</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {edits.map(edit => (
                                <tr key={edit.pageid}>
                                    <td>{edit.title}</td>
                                    <td>{edit.revid}</td>
                                    <td>{edit.pageid}</td>
                                    <td>{edit.user}</td>
                                    <th>
                                        <Link to={`/e/${edit.pageid}`}>
                                            <button className="btn btn-info">
                                            View
                                            </button>
                                        </Link>
                                    </th>
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
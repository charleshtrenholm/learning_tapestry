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
    const [startTime, setStartTime] = useState(d);
    const [pagination, setPagination] = useState();
    const [sortBy, setSortBy] = useState('newer');

    useEffect(() => {
        const options = {
            method: 'GET',
        }
        fetch(
            `https://en.wikipedia.org/w/api.php?` +
            `&origin=*&action=query&list=recentchanges&format=json&rcstart=${startTime.toISOString()}` + 
            `&rcprop=title|ids|user|userid|comment|parsedcomment|loginfo|tags` +
            `&rcnamespace=0&rcshow=!minor%7C!bot%7C!anon%7C!redirect&rclimit=50&rcdir=${sortBy}`,
            options
        )
        .then(response => response.json())
        .then(result => {
            setEdits(result.query.recentchanges);
        });
    })

    const handleStartTime= $event => {
        if($event) { // clear button emits null
            const split = $event.split(':');
            const hours = split[0];
            const minutes = split[1];
            const d = new Date();
            d.setHours(hours, minutes)
            setStartTime(d);
        }
    }

    const newStartTime = event => console.log(event, typeof event);

    return (
        <div className="row justify-content-center">
            <div className="col-10">
                <NavBar
                    onSortByChange={$event => setSortBy($event)}
                    onStartTimeChange={$event => handleStartTime($event)}
                />
                {edits.length ? 
                    (<div>
                        <table className="table table-striped table-dark">
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
                                    <tr key={edit.rcid}>
                                        <td>{edit.title}</td>
                                        <td>{edit.revid}</td>
                                        <td>{edit.pageid}</td>
                                        <td>{edit.user}</td>
                                        <th>
                                            <Link to={{
                                                pathname: `/e/${edit.rcid}`,
                                                state: {
                                                    comment: edit.comment,
                                                    title: edit.title,
                                                    user: edit.user,
                                                }
                                            }}>
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
                        <div className="row">
                            <span 
                                className="col-2 offset-1" 
                                style={{border: '1px solid grey', borderRadius: '10px', marginBottom: '20px'}}
                                onClick={setPagination}
                                >&laquo; previous</span>
                            <span className="col-2 offset-6" style={{border: '1px solid grey', borderRadius: '10px', marginBottom: '20px'}}>&raquo; next</span>
                        </div>
                    </div>
                    )
                    : <p>loading</p>
                }
            </div>
        </div>
    ); 
}

export default EditTable;
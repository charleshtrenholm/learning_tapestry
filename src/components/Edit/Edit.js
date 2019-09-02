
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Edit = ({ location,  match }) => {
    const styles = {
        width: '500px',
        height: '500px',
        backgroundColor: 'green'
    };

    const { user, comment, title } = location.state;

    useEffect( () => {
        fetch(
            `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts&pageids=${match.params.id}`
        ).then(response => response.json())
        .then(result => {
            console.log(result, match);
        })
    })
    return(
        <div className="row justify-content-center">
            <div className="col-10">
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">User</th>
                        <th scope="col">Edit Comment</th>
                        <th scope="col">Article Title</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user}</td>
                        <td>{comment}</td>
                        <td>{title}</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/">
                <button className="btn btn-info">Go Back</button>
            </Link>
            </div>
        </div>
    );
}

export default Edit;
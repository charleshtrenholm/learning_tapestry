
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Edit = ({ location,  match }) => {
    const styles = {
        width: '500px',
        height: '500px',
        backgroundColor: 'green'
    };

    const { user, comment, title } = location.state;
    const [extracts, setExtracts] = useState('');

    useEffect( () => {
        fetch(
            `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts&pageids=${match.params.id}`
        ).then(response => response.json())
        .then(result => {
            setExtracts(result.query.pages[match.params.id].extract);
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
            <div dangerouslySetInnerHTML={{__html: extracts}} className="col-10 article-container">
            </div>

            <Link to="/">
                <button className="btn btn-info mr-2">Go Back</button>
            </Link>
            <a href={`https://en.wikipedia.org/?curid=${match.params.id}`}>
                <button className="btn btn-success">View Article</button>
            </a>
            </div>
        </div>
    );
}

export default Edit;
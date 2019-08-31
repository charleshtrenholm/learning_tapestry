
import React from 'react';
import { Link } from 'react-router-dom';


function Edit() {
    const styles = {
        width: '500px',
        height: '500px',
        backgroundColor: 'green'
    };
    return(
        <div>
            <div style={styles}>
                single edit works!
            </div>
            <Link to="/">
                <button class="btn btn-info">Go Back</button>
            </Link>
        </div>
    );
}

export default Edit;
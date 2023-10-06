import React from 'react';
import './Choose.css';
import {Link} from 'react-router-dom';
const Choose=()=>{
    return(
        <div>
            <h1>Point of Sale Simulator</h1>
            <Link to="/Signup">
            <button>Login as Staff</button>
            </Link>
            <button>Login as Admin</button>
        </div>
    );
};
export default Choose;
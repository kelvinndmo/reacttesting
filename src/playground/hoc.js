import React from 'react';
import ReactDOM from 'react-dom';

//Higer order component-Component that renders another component
// - Reuse code
// - Prop manipulation
// - Abstract state
const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>This info is: {props.info}</p>
    </div>
) 

const WithAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        <p>This is private info please dont share</p>
        < WrappedComponent {...props}/>
        </div>
    )
};

const Login = (props) => (
    <div>
    <p>Hello welcome!Am {props.name}</p>
    </div>
)

const Authenticated = (WrappedComponent) => {
    return (props) => (
        <div>
           {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please Login in </p>}
            
        </div>
    )
}
const AdminInfo = Authenticated(Login);

ReactDOM.render(<AdminInfo name='onkundi' isAuthenticated={true}/>, document.getElementById('areba'))
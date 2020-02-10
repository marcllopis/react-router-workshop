import React from 'react';
import {Link} from 'react-router-dom';


const Contact = props => (
    <div>
        <h1>{props.contactContent.title}</h1>
        <h2>{props.contactContent.subtitle}</h2>
        <div Style={'display:flex; justify-content: space-around;'}>
            <h3><Link to="/">Home</Link></h3>
            <h3><Link to="about">About</Link></h3>
            <h3><Link to="contact">Contact</Link></h3>
        </div>
    </div>
)

export default Contact;
import React from 'react';

const ContactFilter = (props) => {
    return (
        <div className="flex justify-center align-center">
            <input className="app-input" type="text" placeholder="Search" onInput={props.onFilter} />
        </div>
    )
}
export default ContactFilter;

import React from 'react';
import './styles.scss';

type Props = {
    text : string ;
}
const Button = ( { text }:Props ) =>{

    return (
        <div className="d-flex">
            <button className="btn btn-primary btn-custom">
                <h5 className="btn-title"> { text } </h5>
            </button>
        </div>
    ) ;
}

export default Button;
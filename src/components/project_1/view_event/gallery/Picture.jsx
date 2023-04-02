import React from 'react';


const Picture = (props) => {
    return (
        <div>
            <img className={props.style} alt={'gallery photo'} src={`${props.picture}`}
            />
        </div>
    );
};

export default Picture;


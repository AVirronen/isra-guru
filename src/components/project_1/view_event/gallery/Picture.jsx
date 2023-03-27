import React from 'react';


const Picture = (props) => {
    return (
        // <div>
        //     <div>
        //         <img className={props.style} alt={'main photo'} srs={props.picture}/>
        //     </div>
        <div>
            <img className={props.style} alt={'gallery photo'} src={`${props.picture}`}
            />
        </div>
        // </div>
    );
};

export default Picture;

// src={require(`${props.picture}`)}
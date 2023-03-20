import React from 'react';
import PopUp_deleteEvent from "./popUp_var/PopUp_deleteEvent";
import PopUp_saveEvent from "./popUp_var/PopUp_saveEvent";
import PopUp_duplicateEvent from "./popUp_var/PopUp_duplicateEvent";

const PopUp = (props) => {
     const changeModal = (modal) => {
        switch (modal) {
            case 'save':
                return <PopUp_saveEvent/>
            case 'duplicate':
                return <PopUp_duplicateEvent/>
            case 'delete':
                return <PopUp_deleteEvent/>
        }
    }
    return (changeModal(props.modal));
};

export default PopUp;
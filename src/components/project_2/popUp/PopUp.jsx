import React from 'react';
import PopUp_deleteEvent from "./popUp_var/PopUp_deleteEvent";
import PopUp_saveEvent from "./popUp_var/PopUp_saveEvent";
import PopUp_duplicateEvent from "./popUp_var/PopUp_duplicateEvent";

const PopUp = (props) => {
     const changeModal = (modal) => {
        switch (modal) {
            case 'save':
                return <PopUp_saveEvent close={props.close} idEvent={props.idEvent}/>
            case 'duplicate':
                return <PopUp_duplicateEvent close={props.close} idEvent={props.idEvent}/>
            case 'delete':
                return <PopUp_deleteEvent close={props.close} idEvent={props.idEvent}/>
        }
    }
    return (changeModal(props.modal));
};

export default PopUp;
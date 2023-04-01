import React from 'react';
import PopUp_deleteEvent from "./popUp_var/PopUp_deleteEvent";
import PopUp_saveEvent from "./popUp_var/PopUp_saveEvent";
import PopUp_duplicateEvent from "./popUp_var/PopUp_duplicateEvent";

const PopUp = (props) => {
     const changeModal = (modal) => {
        switch (modal) {
            case 'save':
                return <PopUp_saveEvent close={props.close} idEvent={props.idEvent}
                                        handleActiveClick={props.handleActiveClick}
                />
            case 'duplicate':
                return <PopUp_duplicateEvent close={props.close} idEvent={props.idEvent} handleWrite={props.handleWrite}
                                             handleActiveClick={props.handleActiveClick}
                />
            case 'delete':
                return <PopUp_deleteEvent close={props.close} idEvent={props.idEvent}
                                          handleActiveClick={props.handleActiveClick}
                />
        }
    }
    return (changeModal(props.modal));
};

export default PopUp;
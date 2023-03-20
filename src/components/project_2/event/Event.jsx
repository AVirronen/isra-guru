import React from 'react';
import style from './events.module.css'
import Delete from "../../icons/Delete";
import Copy from "../../icons/Copy";
import Edit from "../../icons/Edit";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


// import PopUp_deleteEvent from "../popUp/popUp_var/PopUp_deleteEvent";
import PopUp from "../popUp/PopUp";
import PopUp_deleteEvent from "../popUp/popUp_var/PopUp_deleteEvent";
import {useNavigate} from "react-router-dom";
import {deleting, dublicating, saving} from "../../utils/constants";

const Event = () => {
    const [modal, changeModal] = React.useState('')

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(true);

    const navigate=useNavigate()

    return (
        <div>
            <div className={style.events}>
                <p className={style.dateEvents}>22 Июня 2020</p>
                <p className={style.dateDesc}>Тель Авив. С чего начиналось и кто во всем виноват.</p>
                <p className={style.dateCost}>35 NIS</p>
                <p className={style.datePeople}>24/30</p>
                <div className={style.iconsEvents}>
                    <div onClick={() => {
                        handleOpen()
                        changeModal('duplicate')
                        navigate(`/${dublicating}`)
                    }}><Copy/></div>
                    <div onClick={() => {
                        handleOpen()
                        changeModal('save')
                        navigate(`/${saving}`)
                    }}><Edit/></div>
                    <div onClick={()=>{
                        handleOpen()
                        changeModal('delete')
                        navigate(`/${deleting}`)
                    }
                    }><Delete/></div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <PopUp modal={modal}/>
                </Box>
            </Modal>
        </div>
    );
}

export default Event;
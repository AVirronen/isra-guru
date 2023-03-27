import React from 'react';
import style from './events.module.css'
import Delete from "../../../icons/Delete";
import Copy from "../../../icons/Copy";
import Edit from "../../../icons/Edit";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PopUp from "../popUp/PopUp";


const Event = () => {
    const [modal, changeModal] = React.useState('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    }}><Copy/></div>
                    <div onClick={() => {
                        handleOpen()
                        changeModal('save')
                    }}><Edit/></div>
                    <div onClick={()=>{
                        handleOpen()
                        changeModal('delete')
                    }
                    }><Delete/></div>
                </div>
            </div>
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <PopUp modal={modal} close={handleClose}/>
                </Box>
            </Modal>
        </div>
    );
}

export default Event;


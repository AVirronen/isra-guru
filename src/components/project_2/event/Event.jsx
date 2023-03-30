import React, {useEffect, useState} from 'react';
import style from './events.module.css'
import Delete from "../../../icons/Delete";
import Copy from "../../../icons/Copy";
import Edit from "../../../icons/Edit";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PopUp from "../popUp/PopUp";
import {off, onValue, ref, set} from "firebase/database";
import {db} from "../../../firebase/firebase-config";
import {writeEventData} from "../../../firebase/dataBase";


const Event = (props) => {
    const [modal, changeModal] = React.useState('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const idEvent = 1;
    const idEvent = props.id


    useEffect(() => {
        async function add() {
            const idsEvent = ["data/number", "data/month", "data/year", "title", "price/amount", "price/currency",
                "count/countsGo", "count/countsPlan"]
            idsEvent.forEach((item) => {
                onValue(ref(db, `/guide/1/event/${props.id}/${item}`), (snapshot) => {
                    document.getElementById(`${item}`).innerHTML = snapshot.val()
                })
            })
        }
        add()
    }, [])



    return (
        <div>
            <div className={style.events}>
                <div className={style.dateEvents}>
                    <p id={"data/number"}></p>
                    &nbsp;
                    <p id={"data/month"}></p>
                    &nbsp;
                    <p id={"data/year"}></p>
                </div>
                <p className={style.dateDesc} id={"title"}></p>
                <div className={style.dateCost}>
                    <p id={"price/amount"}></p>
                    &nbsp;
                    <p id={"price/currency"}></p>
                </div>
                <div className={style.datePeople}>
                    <p id={"count/countsGo"}></p>
                    <p>/</p>
                    <p id={"count/countsPlan"}></p>
                </div>
                <div className={style.iconsEvents}>
                    <div onClick={() => {
                        handleOpen()
                        changeModal('duplicate')
                    }}><Copy/></div>
                    <div onClick={() => {
                        handleOpen()
                        changeModal('save')
                    }}><Edit/></div>
                    <div onClick={() => {
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
                    <PopUp modal={modal} close={handleClose} idEvent={idEvent}
                           // handleWrite={handleWrite}
                    />
                </Box>
            </Modal>
        </div>
    );
}

export default Event;


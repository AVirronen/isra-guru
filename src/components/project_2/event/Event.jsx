import React, {useEffect, useState} from 'react';
import style from './events.module.css'
import Delete from "../../../icons/Delete";
import Copy from "../../../icons/Copy";
import Edit from "../../../icons/Edit";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PopUp from "../popUp/PopUp";
import {onValue, ref} from "firebase/database";
import {db} from "../../../firebase/firebase-config";


const Event = (props) => {
    const [modal, setModal] = useState('');
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const idEvent = props.id

    useEffect(() => {
        async function add() {
            const idsEvent = ["data/number", "data/month", "data/year", "title", "price/amount", "price/currency",
                "count/countsGo", "count/countsPlan"]
            idsEvent.forEach((item) => {
                onValue(ref(db, `/guide/1/event/${props.id}/${item}`), (snapshot) => {
                    setData(prevData => ({...prevData, [item]: snapshot.val()}))
                })
            })
        }

        add()
    }, [])

    return (
        <div>
            <div className={style.events}>
                <div className={style.dateEvents}>
                    <p>{data["data/number"]}</p>
                    &nbsp;
                    <p>{data["data/month"]}</p>
                    &nbsp;
                    <p>{data["data/year"]}</p>
                </div>
                <p className={style.dateDesc}>{data["title"]}</p>
                <div className={style.dateCost}>
                    <p>{data["price/amount"]}</p>
                    &nbsp;
                    <p>{data["price/currency"]}</p>
                </div>
                <div className={style.datePeople}>
                    <p>{data["count/countsGo"]}</p>
                    <p>/</p>
                    <p>{data["count/countsPlan"]}</p>
                </div>
                <div className={style.iconsEvents}>
                    <div onClick={() => {
                        handleOpen()
                        // props.handleActiveClick("active")
                        setModal('duplicate')
                    }}><Copy/></div>
                    <div onClick={() => {
                        handleOpen()
                        // props.handleActiveClick("active")
                        setModal('save')
                    }}><Edit/></div>
                    <div onClick={() => {
                        handleOpen()
                        // props.handleActiveClick("active")
                        setModal('delete')
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
                           handleActiveClick={props.handleActiveClick}
                    />
                </Box>
            </Modal>
        </div>
    );
}

export default Event;

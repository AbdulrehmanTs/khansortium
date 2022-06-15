import { List, ListItem, ListItemIcon, TextField } from '@material-ui/core'

import React, { useEffect } from 'react'

import Modal from './Modal'
import { BsArrowLeftShort } from 'react-icons/bs'

import { coursesData } from '../../components/staffing/coursesData'



const StaffingKeyToSuccess = ({ id, name }) => {

        let current = coursesData.find((item) => item.name === name)

        const closeModal = () => {
                document.getElementById(id).classList.remove('active')
                document.getElementById('staffingCourses').classList.add('active')
        }
        useEffect(() => {
                window.addEventListener('click', (e) => {
                        if (e.target.id === id) {
                                document.getElementById(id).classList.remove('active')

                        }
                })

        })
        return (
                <Modal id={id}>
                        <BsArrowLeftShort className='modalCloseBtn' size={30} onClick={closeModal} />
                        <h2> {name} CheckList</h2>
                        <List spacing={4}>
                                {
                                        current?.checkList?.map((item, index) => {
                                                return (
                                                        <ListItem>
                                                                <strong>{index + 1} </strong> : {item}
                                                        </ListItem>
                                                )
                                        })
                                }
                        </List>
                </Modal>
        )
}

export default StaffingKeyToSuccess
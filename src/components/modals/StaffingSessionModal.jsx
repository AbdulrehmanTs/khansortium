import { TextField } from '@material-ui/core'
import React, { useEffect } from 'react'
import Modal from './Modal'

const StaffingSessionModal = ({ id }) => {
  const closeModal = () => {
    document.getElementById(id).classList.remove('active')
    document.getElementById('staffingLogin').classList.add('active')

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
      <h2> Session Portal</h2>
      <TextField
        required
        id="outlined-required"
        label="Enter Session Portal"
        defaultValue="9900"
        fullWidth
        variant="outlined"
      />
      <button onClick={closeModal} >Submit</button>
    </Modal>
  )
}

export default StaffingSessionModal
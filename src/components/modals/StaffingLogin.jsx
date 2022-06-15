import { TextField } from '@material-ui/core'
import React, { useEffect } from 'react'
import Modal from './Modal'


const StaffingLogin = ({ id, loggedIn, setLoggedIn, training }) => {

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
      <h2> Login</h2>
      <TextField
        required
        id="outlined-required"
        label="Enter Your Username"
        fullWidth
        variant="outlined"

      />
      <br /><br />
      <TextField
        required
        id="outlined-required"
        label="Enter Your Password"
        fullWidth
        variant="outlined"
        type='password'

      />
      <button onClick={closeModal} >Login</button>
    </Modal>
  )
}

export default StaffingLogin
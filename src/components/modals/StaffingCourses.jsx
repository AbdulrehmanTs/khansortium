import { Grid, Paper, styled, TextField } from '@material-ui/core'
import React, { useEffect } from 'react'
import Modal from './Modal'
import { coursesData } from '../../components/staffing/coursesData'
import { BsArrowLeftShort } from 'react-icons/bs'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  cursor: 'pointer',
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  height: '100px',
  fontSize: "25px"
}));


const tempData = [
  {
    name: 'course 1',
  },
  {
    name: 'course 2',
  },
  {
    name: 'course 3',
  },
  {
    name: 'course 4',
  },
  {
    name: 'course 5',
  },
  {
    name: 'course 6',
  },
]


const StaffingCourses = ({ id, setChecList, selectedProgram }) => {
  const goAhead = (e) => {
    document.getElementById(id).classList.remove('active')
    document.getElementById('staffingKeyToSuccess').classList.add('active')
    setChecList(e.target.innerHTML)
  }

  const closeModal = (e) => {
    document.getElementById(id).classList.remove('active')
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
      <h2>Courses</h2>
      <Grid container spacing={2}>
        {
          selectedProgram == "Whole Cell Accessories" ?
            coursesData.map((item, index) => {
              return (
                <Grid key={index} onClick={(e) => goAhead(e)} item xs={12} md={6} lg={4} >
                  <Item>{item.name}</Item>
                </Grid>
              )
            })
            :
            tempData.map((item, index) => {
              return (
                <Grid key={index} item xs={12} md={6} lg={4} >
                  <Item>{item.name}</Item>
                </Grid>
              )
            })
        }
      </Grid>
    </Modal>
  )
}

export default StaffingCourses
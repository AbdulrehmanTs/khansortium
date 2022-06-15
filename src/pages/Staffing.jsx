import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import staffing from '../assets/companies/staffing.webp'
import StaffingSessionModal from '../components/modals/StaffingSessionModal'
import StaffingLogin from '../components/modals/StaffingLogin'
import StaffingCourses from '../components/modals/StaffingCourses'
import StaffingKeyToSuccess from '../components/modals/StaffingKeyToSuccess'
import AllCourses from '../components/staffing/AllCourses'


const Staffing = () => {

  const [checkList, setChecList] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState("")

  const openModal = () => {
    document.getElementById('staffingLogin').classList.add('active')
  }

  useEffect(() => {
    console.log(selectedProgram)
  }, [selectedProgram])
  return (
    <Layout>
      <div id="Hero" className="Hero">
        <div className="HeroSlider">

          <div

            className={`   firstSlide  active'   slide`}
          >
            <div id className="slideImg">
              <img src={staffing} alt="" />

            </div>

            <div className="slideContent">
              <div className="badge">
                <em> Staffing</em>
              </div>
              <h1 >
                Through Patience Great Things are accomplished
              </h1>
              <div className="slideSubContent">
                <p  >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, autem. Nobis sint placeat incidunt nisi, reiciendis quo iure esse magni. Explicabo consequuntur nostrum nesciunt eaque libero harum quo possimus sapiente.
                </p>

                <button onClick={() => window.location.href = "/vertical/staffing#courses"} className='FirstHeroBtnForVerticalPage'>
                  Training
                </button>
                <button className='SecondHeroBtnForVerticalPage'>
                  Join Now
                </button>

              </div>
            </div>
          </div>



        </div>

        <StaffingSessionModal id='staffingSessionModal' />
        <StaffingLogin loggedIn={loggedIn} setLoggedIn={setLoggedIn} id='staffingLogin' />
        <StaffingCourses selectedProgram={selectedProgram} setChecList={setChecList} id='staffingCourses' />
        <StaffingKeyToSuccess name={checkList} id='staffingKeyToSuccess' />
      </div>
      <AllCourses openModal={openModal} selectedProgram={selectedProgram} setSelectedProgram={setSelectedProgram} setChecList={setChecList} />
    </Layout>
  )
}

export default Staffing
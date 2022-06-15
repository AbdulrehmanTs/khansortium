import './modal.css' 
// import OwlCarousel from 'react-owl-carousel';
import Slider from "react-slick";
import { useEffect } from 'react';
import Modal from './Modal';


const AddressModal = ({stores,heading,startCarousel,setShowModal}) => {  
    
  const closeModal =()=>{ 
    document.getElementById('addressModal').classList.remove('active')
    startCarousel((prev)=>!prev)
    setShowModal(false)
  } 
   useEffect(()=>{ 
     window.addEventListener('click',(e)=>{
       
      if(e.target.id ===  'addressModal'){
       document.getElementById('addressModal').classList.remove('active')
        startCarousel((prev)=>!prev)
      }
    }) 
   }) 
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000,
        nav:true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
      <Modal id='addressModal'>
              <h2>{heading} Stores</h2>
             <Slider className='owl-theme'   {...settings}>
                {stores?.map((store,index)=><div ket={index} className='item'>
                   <h3>Store # {store.storeCode ? store.storeCode:index}</h3>
                   <a target={"_blank"} href={store.link}>{store.address}</a>
                   <a target={"_blank"} href={store.link}>{store.city} {" "} {store.postalCode}</a>
                   <span>{store.contact}</span>
                </div>)}
                
            </Slider> 
            
                <button onClick={closeModal} >Back to Page</button>
      </Modal> 
  )
}

export default AddressModal



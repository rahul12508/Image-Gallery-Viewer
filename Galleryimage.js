import React, { useState } from 'react'
import './Galleryimage.css';

const GalleryImage = ({galleryimages}) => {

  const [slide, setSlide] = useState(0);
  const [open, setOpen] = useState(false);

  // const handleOpenModel = (index) => {
  //   setSlide(index)
  //   setOpen(true)
  // }

  //  const closeModel = () => {
  //   setOpen(false)
  //  }

    const handleOpenModel = (index) => {
      setOpen(true)
     setSlide(index)
    }

    const closeModel = () => {
      setOpen(false)
    }
  
  return (
    <div>

       {open &&
   
  <div className="slidewrap">
  {/* <i   onClick={closeModel}  className='cross' class="fa-solid fa-x"></i> */}
  <button  onClick={closeModel} className='cross' >X</button>
   
   <div className="fullScreen">
    <img src={galleryimages[slide].img} alt="" />

    </div>
   </div>
       }
   
       
   <div className='galleryWrap'>
        {
          galleryimages && galleryimages.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModel(index) } >
                <img src={slide.img} alt='' />
              </div>
            )
          })
        }
      </div>
{/* 
     <div className="slideshow">
      <button onClick={closeModel} >X</button>
     </div>
      
       <div className="opengallery">
        <img src={galleryImages[item].img} alt="" />
       </div>

        <div className="maps">
          {
            galleryimages.map((item, index) => {
    
            })
          }
        </div> */}
   

    </div>
  )
}
 
export default GalleryImage;
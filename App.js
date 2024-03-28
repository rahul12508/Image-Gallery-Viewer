
import './App.css';
import GalleryImage from './components/Galleryimage';

function App() {
 
  
  const galleryImages = [

    // {
    //   img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    // },


    // {
    //   img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    // },


    // {
    //   img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    // },


    // {
    //   img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    // },


    // {
    //   img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    // },


    // {
    //   img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    // },

    // {
    //   img: 'https://images.pexels.com/photos/1779485/pexels-photo-1779485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    // },


    // {
    //   img: 'https://images.pexels.com/photos/1779489/pexels-photo-1779489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    // },

    // {
    //   img: 'https://images.pexels.com/photos/1779484/pexels-photo-1779484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    // },

    // {
    //   img: 'https://images.pexels.com/photos/1779488/pexels-photo-1779488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    // },

    // {
    //   img: 'https://images.pexels.com/photos/1779486/pexels-photo-1779486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    // }


    
    {
      img: 'img2.jpeg'
    },


    {
      img: "img1.jpeg"
    },


    {
      img: "img3.jpeg"
    },


    {
      img: "img4.jpeg"
    },


    {
      img: "img13.jpeg"
    },


    {
      img: "img6.jpeg"
    },

    {
      img: 'img7.jpeg'
    },


    {
      img: 'img8.jpeg'
    },

    {
      img: 'img9.jpeg'
    },

    {
      img: 'img10.jpeg'
    },

    {
      img: 'img11.jpg'
    },

    {
      img: 'img12.jpg'
    }

  ]

  return (
    <div className='App'>

      <div className="headline">
        Responsive Image Gallery
      </div>

     <GalleryImage  galleryimages={galleryImages}  />

    </div>
  );
}

export default App;

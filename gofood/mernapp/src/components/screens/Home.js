import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import Card from '../Card';
//import Crausels from '../Crausels';

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/foodData', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    // console.log(response[0],response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  }
  useEffect(() => {
    loadData()
  }, [])


  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
       <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">
          <div className="carousel-inner" id="carousel">
            <div className='carousel-caption' style={{ zIndex: "9" }}>
              <div className="d-flex justify-content-center">
                <input className="form-control me-2 w-5" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                {/* <button className="btn btn-outline-success my-2 my-sm-0 text-white" type="submit">Search</button> */}
              </div>
            </div>
            <div className="carousel-item active ">
              <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{ filter: 'brightness(30%)' }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100" style={{ filter: 'brightness(30%' }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-lock w-100" style={{ filter: 'brightness(30%' }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='container'>
        {
          foodCat != [] ? foodCat.map((data) => {
            return (<div className='row mb-3'>
              <div key={data._id} className='fs-3 m-3'>
                {data.CategoryName}
              </div>
              <hr></hr>
              {foodItem != [] ?
                foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                  .map(filteritems => {
                    return (
                      <div key={filteritems._id} className='col-12 col-md-6 col-lg-3 '>
                        <Card
                          item={filteritems}
                          foodName={filteritems.name}
                          imgsrc={filteritems.img}
                          options={filteritems.options[0]}>
                        </Card>
                      </div>
                    )
                  })
                : <div>no such data found</div>}
            </div>
            )
          }) : <div>""</div>
        }
      </div>
      <div><Footer /></div>
    </div>
  )
}





// import React, { useEffect, useState } from 'react'
// import Navbar from '../Navbar';
// import Footer from '../Footer';
// import Card from '../Card';
// //import Crausels from '../Crausels';

// export default function Home() {
//   const [search, setSearch] = useState('');
//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItem, setFoodItem] = useState([]);

//   const loadData = async () => {
//     let response = await fetch('http://localhost:5000/api/foodData', {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     response = await response.json();
//     // console.log(response[0],response[1]);
//     setFoodItem(response[0]);
//     setFoodCat(response[1]);
//   }

//   useEffect(() => {
//     loadData()
//   }, [])

//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>
//       <div className="search-bar container" style={{ zIndex: "9" }}>
        
//       </div>
//       <div>
//         <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
//           <div className="carousel-inner" id="carousel">
//             <input
//           className="form-control  w-2"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//           value={search}
//           onChange={(e) => { setSearch(e.target.value) }}
//         />
//             <div className="carousel-item active">
//               <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{ filter: 'brightness(30%)' }} alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100" style={{ filter: 'brightness(30%' }} alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-lock w-100" style={{ filter: 'brightness(30%' }} alt="..." />
//             </div>
//           </div>
//           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//       <div className='container'>
//         {
//           foodCat.length !== 0 ? foodCat.map((data) => {
//             return (
//               <div key={data._id} className='row mb-3'>
//                 <div className='fs-3 m-3'>
//                   {data.CategoryName}
//                 </div>
//                 <hr></hr>
//                 {foodItem.length !== 0 ?
//                   foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
//                     .map(filteritems => {
//                       return (
//                         <div key={filteritems._id} className='col-12 col-md-6 col-lg-3'>
//                           <Card
//                             item={filteritems}
//                             foodName={filteritems.name}
//                             imgsrc={filteritems.img}
//                             options={filteritems.options[0]}>
//                           </Card>
//                         </div>
//                       )
//                     })
//                   : <div>no such data found</div>}
//               </div>
//             )
//           }) : <div>""</div>
//         }
//       </div>
//       <div><Footer /></div>
//     </div>
//   )
// }







// import React, { useEffect, useState } from 'react'
// import Footer from '../Footer';
// import Navbar from '../Navbar';
// export default function MyOrder() {

//     const [orderData, setorderData] = useState('')

//     const fetchMyOrder = async () => {
//         console.log(localStorage.getItem('userEmail'))
//         await fetch("http://localhost:5000/api/myOrderData", {
//             // credentials: 'include',
//             // Origin:"http://localhost:3000/login",
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body:JSON.stringify({
//                 email:localStorage.getItem('userEmail')
//             })
//         }).then(async (res) => {
//             let response = await res.json()
//             await setorderData(response)
//         })
//     }
//     useEffect(() => {
//         fetchMyOrder()
//     }, [])
// console.log("orderData:", orderData);
// console.log( orderData);
//     return (
//         <div>
//             <div>
//                 <Navbar />
//             </div>

//             <div className='container'>
//                 <div className='row'>

//                     {orderData != {} ? Array(orderData).map(data => {
//                         return (
//                             data.orderData ?
//                                 data.orderData.order_data.slice(0).reverse().map((item) => {
//                                     return (
//                                         item.map((arrayData) => {
//                                             return (
//                                                 <div  >
//                                                     {arrayData.Order_date ? <div className='m-auto mt-5'>

//                                                         {data = arrayData.Order_date}
//                                                         <hr />
//                                                     </div> :

//                                                         <div className='col-12 col-md-6 col-lg-3' >
//                                                             <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                                                                 <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//                                                                 <div className="card-body">
//                                                                     <h5 className="card-title">{arrayData.name}</h5>
//                                                                     <div className='container w-100 p-0' style={{ height: "38px" }}>
//                                                                         <span className='m-1'>{arrayData.qty}</span>
//                                                                         <span className='m-1'>{arrayData.size}</span>
//                                                                         <span className='m-1'>{data}</span>
//                                                                         <div className=' d-inline ms-2 h-100 w-20 fs-5' >
//                                                                             ₹{arrayData.price}/-
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>



//                                                     }

//                                                 </div>
//                                             )
//                                         })

//                                     )
//                                 }) : ""
//                         )
//                     }) : ""}
//                 </div>


//             </div>

//             <Footer />
//         </div>
//     )
// }



// import React, { useEffect, useState } from 'react'
// import Footer from '../Footer';
// import Navbar from '../Navbar';
// export default function MyOrder() {

//     const [orderData, setorderData] = useState('')

//     const fetchMyOrder = async () => {
//         console.log(localStorage.getItem('userEmail'))
//         await fetch("http://localhost:5000/api/myOrderData", {
//             // credentials: 'include',
//             // Origin:"http://localhost:3000/login",
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body:JSON.stringify({
//                 email:localStorage.getItem('userEmail')
//             })
//         }).then(async (res) => {
//             let response = await res.json()
//             await setorderData(response)
//         })
//     }
//     useEffect(() => {
//         fetchMyOrder()
//     }, [])
// console.log("orderData:", orderData);
// return (
//     <div>
//         <Navbar />
//         <div className='container'>
//             <div className='row'>
//             {orderData && orderData.orderData && orderData.orderData.length > 0 ?
   
//     orderData.orderData.map((order) => {
//         return (
//             <div key={order._id}>
//                 {order.order_data.map((itemData) => {
//                     return (
//                         <div key={order._id}>
//                         {itemData.map((item,index) => {
//                             return(
//                         <div key={index+1}>
//                             { index===0 && item.Order_date ? (
//                                 <div className='m-auto mt-5'>
//                                     {item.Order_date}
//                                     <hr />
//                                 </div>     
//                             ) : (
//                                 <div className='col-12 col-md-6 col-lg-3'>
//                                     {console.log('h1')}
//                                     <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                                         <img src={item.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//                                         <div className="card-body">
//                                             <h5 className="card-title">{item.name}</h5>
//                                             <div className='container w-100 p-0' style={{ height: "38px" }}>
//                                                 <span className='m-1'>{item.qty}</span>
//                                                 <span className='m-1'>{item.size}</span>
//                                                 <span className='m-1'>{item.Order_date}</span>
//                                                 <div className=' d-inline ms-2 h-100 w-20 fs-5' >
//                                                     ₹{item.price}/-
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                             );
//                         })}
//                     </div>
//                     );
//                 })}
//             </div>
//         );
//     }) 
// : ''}

//             </div>
//         </div>
//         <Footer />
//     </div>
// );
// }    












import React, { useEffect, useState } from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
export default function MyOrder() {

    const [orderData, setorderData] = useState('')

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/api/myOrderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
        })
    }
    useEffect(() => {
        fetchMyOrder()
    }, [])
console.log("orderData:", orderData);
return (
    <div>
        <Navbar />
        {/* <div className='container'>
            <div className='row'>
            {orderData && orderData.orderData && orderData.orderData.length > 0 ?
   
    orderData.orderData.map((order) => {
        return (
            <div key={order._id}>
                {order.order_data.map((itemData) => {
                    return (
                        <div key={order._id}>
                        {itemData.map((item,index) => {
                            return(
                        <div key={index+1}>
                            { index===0 && item.Order_date ? (
                                <div className='m-auto mt-5'>
                                    {item.Order_date}
                                    <hr />
                                </div>     
                            ) : (
                                <div className='col-12 col-md-6 col-lg-3'>
                                    {console.log('h1')}
                                    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                        <img src={item.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                <span className='m-1'>{item.qty}</span>
                                                <span className='m-1'>{item.size}</span>
                                                <span className='m-1'>{item.Order_date}</span>
                                                <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                    ₹{item.price}/-
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                            );
                        })}
                    </div>
                    );
                })}
            </div>
        );
    }) 
: ''}

            </div>
        </div> */}
        <div className='container'>
    <table className='table'>
        <thead>
            <tr>
                <th>Order Date</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Size</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {orderData && orderData.orderData && orderData.orderData.length > 0 &&
                orderData.orderData.map((order) => {
                    return order.order_data.map((itemData, index) => {
                        return (
                            <React.Fragment key={index}>
                                {itemData.map((item, subIndex) => {
                                    return (
                                        <tr key={subIndex}>
                                            {subIndex === 0 && item.Order_date ? (
                                                <td rowSpan={itemData.length} style={{ textAlign: 'center', verticalAlign: 'middle' }}>{item.Order_date}</td>
                                            ) : null}
                                            <td>{item.name}</td>
                                            <td>{item.qty}</td>
                                            <td>{item.size}</td>
                                            <td>₹{item.price}/-</td>
                                        </tr>
                                    );
                                })}
                            </React.Fragment>
                        );
                    });
                })}
        </tbody>
    </table>
</div>

        <Footer />
    </div>
);
}  
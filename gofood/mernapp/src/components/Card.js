import React,{useState,useRef,useEffect} from 'react'
import { useDispatchCart,useCart } from './ContextReducer';
import {useNavigate} from "react-router-dom";

export default function Card(props) {

    let dispatch=useDispatchCart();
    let navigate=useNavigate();
    let data=useCart();
    const priceRef=useRef();
    let options=props.options;
    let FoodItem=props.item;
    let priceOptions=Object.keys(options);
    const [qty,setqty]=useState(1)
    const [size,setsize]=useState('')

    const handleAddCart=async ()=>{

        let at=localStorage.getItem('authToken');
      if(at){
        let food=[]
        for(const item of data){
            if(item.id===FoodItem._id){
                food=item;

                break;
            }
        }
        if(food != []){
            if(food.size===size)
                {
                    await dispatch({type:'UPDATE',id:FoodItem._id,price:finalPrice,qty:qty})
                    return;
                }
               else if(food.size!==size){
                await dispatch({type:'ADD',id:FoodItem._id,name:props.foodName,price:finalPrice,qty:qty,size:size})
               return;
            }
            return;
        }
        await dispatch({type:'ADD',id:FoodItem._id,name:props.foodName,price:finalPrice,qty:qty,size:size})
      }
      else{
        alert("please login");
        navigate('/login')
      }
    }

let finalPrice=qty*parseInt(options[size]);
useEffect(()=>{
    setsize(priceRef.current.value);
},[]);
    return (
        <div>
            <div className="card mt-3 " style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img className="card-img-top" src={props.imgsrc} alt="..." style={{"height":"180px",objectFit:"fill"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.foodName}</h5>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded' onChange={(e)=>setqty(e.target.value)}>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })
                            }
                        </select>
                        <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e)=>setsize(e.target.value)}>
                            {priceOptions.map((data)=>{
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>
                        <div className='d-inline h-100 fs-5'>₹{finalPrice}/- </div>
                        
                    </div>
                   
          <button className={`btn btn-success justify-center mt-0`} onClick={handleAddCart}>Add to Cart</button>
                </div>
                
            </div>
        </div>
    )
}

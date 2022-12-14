import React from 'react'
import { Navbar, Hero, Footer } from "../components";
import { logo, ps, drill, spanner, cycle, surf } from "../assets/index"

import {useParams} from "react-router-dom";
import styles from "../style";


function SingleProduct(props) {
const {param}=useParams()
  const product = props.data.find((item,index)=>
  {
  return index==param
});

  return (
    <div>
    <div div className="bg-teal-100 w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>
      <div  className="bg-amber-200 overflow-clip  px-6 py-2 gap-3  grid  h-full mt-10 mx-4 grid-cols-1 sm:grid-cols-2  gap-x-[-2000rem] grid-rows-3 md:grid-cols-2">
      <div className='flex  justify-center'><img className='h-full flex justify-center row-start-2 border-2 border-red-600' src={product.img}></img></div>
      <div className='bg-white w-full h-full row-span-2 row-start-2'>

      </div>
     
      </div>
      <Footer/>
   
    </div>  
)
}

export default SingleProduct
import React, { useState } from 'react'

const Component = ({item,index}) => {
  const [showData,setShowData] = useState(false)
    return (
        <>
    <div style={{cursor:'pointer'}} onClick = {()=>{setShowData(!showData)}}>{index}. {item.name}</div>
    {
        showData && <div>
            <img style = {{height:'50px'}} src={item.imageSrc} alt={item.name} />
            <p><span>Discription: </span>{item.discription}</p>
            <p>Price: Inr {item.price}</p>
            <p>Waranty: {item.warranty}</p>

        </div>
    }
    </>
  )
}

export default Component
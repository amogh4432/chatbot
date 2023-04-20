import React from 'react'
import Component from '../component/Component'

const ListItems = (props) => {
    
  return (
    <div>
        {
            props.shopItem.map((item,index)=><Component item = {item} key = {index} index = {index}/>)
        }
    </div>
  )
}

export default ListItems
import React from 'react'
import Light from '../light/light'
export const Group = ({groupData, sendAhoj}) => {
    return (
        <>
          <h2>{groupData.title}</h2>
            {groupData.lights.map((light, index)=>{
              return <Light sayHi={sendAhoj} lightData={light} key={index}/>
          })}
        </>
    )
}

export default Group
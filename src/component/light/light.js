import React from 'react'

export const Light = ({lightData, sayHi}) => {
    return (
        <>  
            <div className={lightData.bg} onClick={()=>sayHi()}>
                <h3>{lightData.title}</h3>
                <p>{lightData.brightness}</p>
            </div>
        </>
    )
}

export default Light
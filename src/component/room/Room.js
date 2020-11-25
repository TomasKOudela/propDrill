import React from 'react';
import Group from '../group/group';

export const Room = ({roomData}) => {
    const returnAhoj = () => {
        console.log('ahoj')
    }
    return (
       <>
        <h1>{roomData.title}</h1>
         {roomData.group.map((group, index) => {
             return <Group sendAhoj={returnAhoj} groupData={group} key={index}/>
         })}
       </>
    )
}

export default Room
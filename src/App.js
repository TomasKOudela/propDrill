
import './App.css';
import Room from './component/room/Room'
import {lightData} from './data/data'


function App() {

  return (
    <>
      {lightData.map((room, index) => {
       return <Room roomData={room} key={index}/> 
      })}
    </>
  );
}

export default App;

import Greating from "./greating";
import Button from "./button";
import Hellow from "./hellow";
import s from "./App.module.css";
import "./index.css";

function App() {
  return (
   <div>
 <Greating/>
 <h1 className={s.title}> rashmika bvibashana</h1>
  <Button/>
  <Button/>
  <Button/>
  <Hellow/>
  <Button/>


  
   </div>
  )
}

export default App;

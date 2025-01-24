import { useEffect,useState } from "react";
import Body from "./body";

const Time=()=>{
    const [Timer,setTimer]=useState(60);
    function call(){
    const intervalId = setInterval(() => {
      setTimer((prev) => {
        if(prev<10 && prev>=1){
          document.getElementById("less").style.color="red"
        }
        if (prev <= 0 ) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId); 
  }
    
  useEffect(() => {
    let a=0;
    const handleKeyDown = () => {
     if(a==0){
     call();
     a++;
     }
    };

    
    window.addEventListener("keydown", handleKeyDown);

  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
 
    return(
      <>
        <h1 className="tag">Timer</h1>
        <div className="time" id="less" tabIndex={0}>{Timer}</div>
        <Body state={Timer} setState={setTimer}/>
        </>
    )
}
export default Time;
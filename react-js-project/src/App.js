import Button from "./Button";
import styles from "./App.module.css"
import {useState, useEffect} from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("")
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value)
    console.log("i run all the time")
    const iRunOnlyOnce= () =>{
        console.log("i run only once")
    }
    useEffect(() => {
        console.log("Call the API")
    },[])
    useEffect(()=> {
        if (keyword !== "" && keyword.length > 5) {
            console.log("SEARCH FOR", keyword)
        }
    }, [keyword])
  return (
      <div>
          <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
        <h1>{counter}</h1>
          <button onClick={onClick}>click me</button>
      </div>
  );
}

export default App;

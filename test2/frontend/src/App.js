import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [jobID, setID] = useState([]);
  const [jobData, setJobData] = useState([]);
  // const [count, setCount] = useState(0);
  let count = 0;
  const limit = 6;

  const fetchSingle = async (id) => {
    if (count < 6) { 

      const resjobData = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, () => {
  
  
      })
      setJobData((prev) => {
        return [...prev, resjobData.data]
      });

    }
    else {
      return ;
    }

  }

  const fetch = async () => {

   
      const resID = await axios.get("https://hacker-news.firebaseio.com/v0/jobstories.json", () => {

      })

      resID.data.map((id) => {
        
        fetchSingle(id);
        // setCount((count) => count+1);
        count = count +1;

      });

  }

  useEffect(() => {
    if (count === 0 || jobData.length < count * limit) {
      fetch();
    }
  }, [count]);


  const handleButton = () => {

  }

  const formatedTime = (time) => {
    const t = new Date(time);
    return "" + t.getDate() + "/" + t.getMonth() + "/" + t.getFullYear() + ", " + t.getMinutes() + ":" + t.getSeconds();
  }

  return (
    <>
      <h2>Hacker News Job Board</h2>
      {jobData.map(function (item) {
        return (
          <div style={{ margin: "10px", border: "1px solid gray" }}>
            <div >{item.title}</div>
            <div style={{ display: "flex", direction: "row", justifyContent: "space-around" }}></div>
            <span>{item.by}</span>
            <span>{formatedTime(item.time)}</span>
            <a href={item.url}>apply here</a>
          </div>
        );
      })}
      <button type="button" onClick={handleButton}>Load More Job..</button>
    </>

  );
}

export default App;

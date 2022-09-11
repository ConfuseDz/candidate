import axios from 'axios';
import { useState, useEffect } from 'react';

const testUrl = 'https://jsonplaceholder.typicode.com/posts';
function Home()  {
  const [get, getPost] = useState(null);

  useEffect(()=>{
    axios.get(`${testUrl}/1`).then((res) => {
      getPost(res.data);      
    })
  },[]);

  function createPost(){
    axios.post(testUrl, {
      title: "Hello",
      body: 'Testttt Post'
    })
    .then((resPost) => {
      getPost(resPost.data);
      console.log(resPost.data);
    })
  }

  if (!get) return null;

    return (
      <div>
        <h1>Home</h1>
        <h2>{get.title}</h2>
        <p>{get.body}</p>
        <button onClick={createPost}>Postt</button>
      </div>
    )
  };
  
  export default Home;
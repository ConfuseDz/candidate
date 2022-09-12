import axios from 'axios';
import { useState, useEffect } from 'react';

const testUrl = 'https://jsonplaceholder.typicode.com/posts/1';
const urlGetService = 'https://api-candidate.workforce-staging.com/v1/services';
function Home() {
  const [post, setPost] = useState(null);  
    useEffect(()=>{
      axios.get(urlGetService).then((res) => {
        const myData = res.data;
        setPost(myData);
      })
      .catch(error => console.error(`Error : ${error}`));
    },[]);

  
  // function createPost(){
  //   axios.post(testUrl, {
  //     title: "Hello",
  //     body: 'Testttt Post'
  //   })
  //   .then((resPost) => {
  //     getPost(resPost.data);      
  //   })
  // }
  
  if (!post) return null;

    return (
      <div>
        <h1>Home</h1>
        {post.map((p) =>{
          return(
            console.log(p.name)
          )
        })}
        {/* <h2>{post.name}</h2> */}
        {/* <button onClick={createPost}>Postt</button> */}
      </div>
    )
  };
  
  export default Home;
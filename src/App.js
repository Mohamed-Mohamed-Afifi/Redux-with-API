import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './Redux/fetchSlice'
import { useEffect } from 'react';
import { postData } from './Redux/postSlice';
import { taskAutont } from './Redux/taskSlice';
const App = () => {
  let dispatch = useDispatch();
  // let data = useSelector(state => state.Get.data)
  let token = useSelector(state => state.Post.token)
  console.log("token",token)
  const handelAutoraize=()=>{
    dispatch(postData(JSON.stringify({
      "identifier":"super_admin@simcc.com",
      "password": "super_admin#123#"
  })))
  }
const TaskAfterLogin=()=>{
  dispatch(taskAutont(JSON.stringify(
    {
        "filterOptions":{
            "domains": {
                "0": "1"
            },
            "tags": {
                "0": "3"
            }
        }
    }
  )))
}
  return (
    <div className="App">
      <button onClick={()=>handelAutoraize()}>Click First</button>
      <button onClick={()=>TaskAfterLogin()}>Second</button>
    </div>
  );
}

export default App;

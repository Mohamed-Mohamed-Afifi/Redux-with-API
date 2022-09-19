import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './Redux/fetchSlice'
import { useEffect } from 'react';
import { postData } from './Redux/postSlice';
const App = () => {
  let dispatch = useDispatch();
  // let data = useSelector(state => state.Get.data)
  let data2 = useSelector(state => state.Post.data)
  useEffect(() => {
    // dispatch(fetchData())
    dispatch(postData())
  }, [dispatch])
  console.log(data2, "hi")

  return (
    <div className="App">
      hi
    </div>
  );
}

export default App;

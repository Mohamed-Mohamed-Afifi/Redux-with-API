import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './Redux/fetchSlice'
import { useEffect } from 'react';
const App = () => {
  let dispatch = useDispatch();
  let data = useSelector(state => state.Get.data)
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  console.log(data)
  return (
    <div className="App">
      hi
    </div>
  );
}

export default App;

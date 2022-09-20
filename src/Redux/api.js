import axios from "axios";
// import postSlice from "./postSlice";
// let token=
// console.log(token)
export default axios.create({
    baseURL:'https://api.adstarks.com/public/api/login'
});
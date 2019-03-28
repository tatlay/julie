import axios from "axios";

export default axios.create({
	baseURL: "https://www.boredapi.com/api/",
	Headers: {"Accept": "application/json"} 
})


//how to get userName(in state) into this file?
import axios from "axios";

export default axios.create({
	baseURL: "https://d91af856.ngrok.io/api/",
	Headers: {"Accept": "application/json"} 
})


//how to get userName(in state) into this file?
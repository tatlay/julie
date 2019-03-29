import axios from "axios";

export default axios.create({
	baseURL: "http://ec2-18-130-55-71.eu-west-2.compute.amazonaws.com/api",
	Headers: {"Accept": "application/json"} 
});


//how to get userName(in state) into this file?
import data from "./userData.json";


export default defineEventHandler((event) => {

    // accepting user Response

    // const userCredentials = await readBody(event);
    // console.log("Received user credential",userCredentials)
    // data.push(userCredentials);
    // console.log(data);
    // console.log("counselling data length is : ", counsellingData.length);
    // console.log("Array is : ",counsellingData)
    return data;
  })
        
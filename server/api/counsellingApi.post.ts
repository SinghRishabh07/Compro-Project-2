import data from "./userData.json";


export default defineEventHandler(async(event) => {

    // accepting user Response

    let id =11;
    const userCredentials = await readBody(event);

    userCredentials.id = id++;
    console.log("Received user credential",userCredentials)
    data.push(userCredentials);
    console.log(data);
    // console.log("counselling data length is : ", counsellingData.length);
    // console.log("Array is : ",counsellingData)
    return data;
  })
        
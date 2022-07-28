import axios from "axios";


export async function getData(userId){
    try{
        const user = await axios('https://jsonplaceholder.typicode.com/users/'+userId);
        const posts = await axios ('https://jsonplaceholder.typicode.com/posts?userId='+user.data.id)
        user.data.posts = posts.data
        console.log(user.data)
    }catch(e){console.log(e)}
}
import ".././style/style.scss";
import { addPost } from "./createPost.js";
import { timeConverter } from "./unixTimeConverter.js";

let btn = document.querySelector(".loadmore");

let urlNewStories = "https://hacker-news.firebaseio.com/v0/newstories.json";
let idNumbers = 0;

async function getNewStories(url) {
    const idResponse = await axios.get(url);
    console.log(urlNewStories);
    for(let i = 0; i<10; i++){
        let id = idResponse.data[idNumbers];
        
        let storieUrl = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
        const response2 = await axios.get(storieUrl);
        let unixTime = response2.data.time;
        addPost(response2.data.score, response2.data.title, response2.data.url, response2.data.by, timeConverter(unixTime));
        idNumbers++;
    }
}
getNewStories(urlNewStories);

btn.addEventListener("click", ()=>{
    getNewStories(urlNewStories);
})


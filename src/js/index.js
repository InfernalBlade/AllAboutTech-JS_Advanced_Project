import ".././style/style.scss";
import { addPost } from "./createPost.js";
import { timeConverter } from "./unixTimeConverter.js";

const LOAD_MORE_BTN = document.querySelector(".loadmore");
const SPINNER_CONTAINER = document.querySelector(".spinner-container");

const API_URL = "https://hacker-news.firebaseio.com/v0/newstories.json";
let counterId = 0;

async function getNewStories(url) {
    let spinner = `<div class="spinner"></div>`;
    SPINNER_CONTAINER.innerHTML=spinner;
    try {
        const ID_LIST_RESPONSE = await axios.get(url)
        SPINNER_CONTAINER.innerHTML="";

        for(let i = 0; i<10; i++){
            let storyId = ID_LIST_RESPONSE.data[counterId];

            let storyUrl = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;
            try{
                const STORY_RESPONSE = await axios.get(storyUrl);
                let unixTime = STORY_RESPONSE.data.time;
                addPost(STORY_RESPONSE.data.score, STORY_RESPONSE.data.title, STORY_RESPONSE.data.url, STORY_RESPONSE.data.by, timeConverter(unixTime));
                counterId++;
            }
            catch(err){
                console.log(err);
            }
        }
   } catch(err) {
        console.log(err)
   }
   
}

getNewStories(API_URL);

LOAD_MORE_BTN.addEventListener("click", ()=>{
    getNewStories(API_URL);
})


let mainContainer = document.querySelector(".postContainer");

export function addPost(score,title,url,user,date){
    /* Creating elements in DOM */
    let post = document.createElement("div");
    let scoreContainer = document.createElement("p");
    let titleContainer = document.createElement("h3");
    let urlContainer = document.createElement("a");
    let dateContainer = document.createElement("p");
    let userContainer = document.createElement("p");

    let title_row = document.createElement("div");

    let line = document.createElement("hr"); 

    /* Assigning class to elements */
    post.classList.add("post");
    scoreContainer.classList.add("score");
    titleContainer.classList.add("title");
    urlContainer.classList.add("link");
    userContainer.classList.add("user");
    dateContainer.classList.add("date");

    title_row.classList.add("title-row");

    title_row.append(
        titleContainer,
        urlContainer
        );

    /* Appending elements to DOM */
    post.append(
        scoreContainer,
        title_row,
        userContainer,
        dateContainer,
    );
    

    /* Show data from API */
    scoreContainer.innerText=("Likes: " + score);
    titleContainer.innerText=(title);
    urlContainer.innerHTML=("Go to full article &rarr;");
    urlContainer.setAttribute("href", url);
    userContainer.innerText=("by " + user);
    dateContainer.innerText=(date);

    /* Url undefined handling */
    if(url==null){
        urlContainer.innerText=("Link not available");
        urlContainer.removeAttribute("href");
    }

    mainContainer.append(post, line);
};
let mainContainer = document.querySelector(".postContainer");

function createElement(type, className, text, innerHTML, attributeType, attribute){
    try{
        const ELEMENT = document.createElement(type);
        
        if(className!=undefined) ELEMENT.className = className;
        if(text!=undefined) ELEMENT.textContent = text;
        if(innerHTML!=undefined) ELEMENT.innerHTML = (innerHTML);
        if(attribute!=undefined) ELEMENT.setAttribute(attributeType, attribute);

        return ELEMENT;
    }
    catch (e){
        console.log(e);
    }
}

export function addPost(score,title,url,user,date){
    const POST = createElement("div", "post");
    const TITLE_CONTAINER = createElement("h3", "title", title);
    const URL_CONTAINER = createElement("a", "link", null, "Go to full article &rarr;", "href", url);
    URL_CONTAINER.setAttribute("target", "_blank");
    URL_CONTAINER.setAttribute("rel", "noopener");
    const SCORE_CONTAINER = createElement("p", "score", "Likes: " + score);
    const DATE_CONTAINER = createElement("p", "date", date);
    const USER_CONTAINER = createElement("p", "user", "by: " + user)

    const TITLE_ROW = createElement("div", "title-row");

    const line = document.createElement("hr");

    /* Appending elements to DOM */
    TITLE_ROW.append(
        TITLE_CONTAINER,
        URL_CONTAINER
        );

    POST.append(
        SCORE_CONTAINER,
        TITLE_ROW,
        USER_CONTAINER,
        DATE_CONTAINER,
    );
    
    /* Url undefined handling */
    if(url==null){
        URL_CONTAINER.textContent=("Link not available");
        URL_CONTAINER.removeAttribute("href");
    }

    mainContainer.append(POST, line);
};
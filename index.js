const url = "https://jsonplaceholder.typicode.com/posts"

fetch(url)
.then(response => response.json())
.then(posts => {
    console.log(posts);
})
.catch(error => {
    console.error("Error fetching data:", error)
})

function displayPosts(posts) {
    const postList = document.getElementById("post-list")

    posts.forEach((post) => {
        const listItem = document.createElement("li");

        const heading = document.createElement("h1");
        heading.textContent = `${post.title}`
        
        const body =document.createElement("p");
        body.textContent = `${post.body}`

        listItem.appendChild(heading);
        listItem.appendChild(body);

        postList.appendChild(listItem);
    })
}

fetch(url)
.then(response => response.json())
.then(posts => {
    displayPosts(posts);
})


//using async/await
async function fetchPosts() {
    try {
        const response = await fetch(url)
        const posts = await response.json()
        console.log(posts)
    }
    catch (error){
        console.error("Error fetching data:", error);
    }
}
fetchPosts();
 
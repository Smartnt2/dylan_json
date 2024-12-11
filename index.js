fetchPhotoData()

fetchUserData()

fetchPostData()

async function fetchUserData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/')
    let usersJSON = await response.json()

    for(let i = 0; i < usersJSON.length; i++) {
        let userJSON = usersJSON[i]
        let container = document.getElementById("usr-container")
        let pUser = document.createElement("p")
        pUser.innerHTML = "Username: " + userJSON.username + "<br>Name: " + userJSON.name
        container.appendChild(pUser)
    }
}

async function fetchPostData() {
    let postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts')
    let postsJSON = await postsResponse.json()
    
    for(let i = 0; i < postsJSON.length; i++) {
        let postJSON = postsJSON[i]
        let userResponse = await fetch('https://jsonplaceholder.typicode.com/users/' + postJSON.userId)
        let userJSON = await userResponse.json()

        let container = document.getElementById("post-container")
        pPost = document.createElement("p")
        pPost.innerHTML = "User: " + userJSON.username + "<br>Title: " + postJSON.title + "<br>Message: " + postJSON.body
        container.appendChild(pPost)
    }
}

async function fetchPhotoData() {
    for(let i = 0; i < 5; i++) {
        let container = document.getElementById("photo-container")
        let photoId = Math.floor(Math.random() * 5000)
        let photoResponse = await fetch('https://jsonplaceholder.typicode.com/photos/' + photoId)
        let photoJSON = await photoResponse.json()

        pTitle = document.createElement("p")
        pTitle.innerHTML = "Title: " + photoJSON.title

        img = document.createElement("img")
        img.src = photoJSON.url
        console.log(photoJSON.url)

        container.appendChild(pTitle)
        container.appendChild(img)
    }
    
}
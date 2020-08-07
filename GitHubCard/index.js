import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/kalvinzhao11')
  .then(response =>{
    console.log(response)
    const gitProfile = githubMarkUp(response.data)
    cards.appendChild(gitProfile)
    // debugger
  })
  .catch(error =>{
    debugger
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["sekotszs", "jdulay91", "DeeDowns", "HarryHenryGebel", "avawing"];
followersArray.forEach(name =>{
  axios.get(`https://api.github.com/users/${name}`)
    .then(response =>{
      const gitProfile = githubMarkUp(response.data)
      cards.appendChild(gitProfile)
    })
    .catch(error => {
      debugger
    })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const cards = document.querySelector('.cards')
const githubMarkUp = (obj) => {
  const card = document.createElement('div')
  const profilePic = document.createElement('img')
  const userInfo = document.createElement('div')
  const fullName = document.createElement('h1')
  const userName = document.createElement('h3')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const profileURL = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  card.appendChild(profilePic)
  card.appendChild(userInfo)
  userInfo.appendChild(fullName)
  userInfo.appendChild(userName)
  userInfo.appendChild(location)
  userInfo.appendChild(profile)
  profile.textContent = `Profile: `
  profile.appendChild(profileURL)
  userInfo.appendChild(followers)
  userInfo.appendChild(following)
  userInfo.appendChild(bio)

  card.classList.add('card')
  userInfo.classList.add('card-info')
  fullName.classList.add('name')
  userName.classList.add('username')

  profilePic.setAttribute('src', obj.avatar_url)
  fullName.textContent = obj.name
  userName.textContent = obj.login
  location.textContent = `Location: ${obj.location}`
  profileURL.setAttribute('href', obj.html_url)
  profileURL.textContent = obj.html_url
  followers.textContent = `Followers: ${obj.followers}`
  following.textContent = `Followings: ${obj.following}`
  bio.textContent = `Bio: ${obj.bio}`
  console.log(card)
  debugger

  return card

}
// githubMarkUp('hi')
const instructorsGit = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"]
instructorsGit.forEach(name =>{
  axios.get(`https://api.github.com/users/${name}`)
    .then(response =>{
      const gitProfile = githubMarkUp(response.data)
      cards.appendChild(gitProfile)
    })
    .catch(error => {
      debugger
    })
})
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

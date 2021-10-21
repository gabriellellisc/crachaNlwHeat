const linksUsers = {
  github: 'gabriellellisc',
  youtube: 'gabriel',
  facebook: 'gabriel.lellis.3',
  instagram: 'gabriel.lellis',
  twitter: 'maykbrito'
}

/*function changeSocialMediaLink(){
  document.getElementById('userName').textContent = 'Lellis' // acessando elemento pelo id
  userName.textContent = "Lellin" // mesma coisa de cima, porém resumida
}
changeSocialMediaLink() */
function changeSocialMediaLink() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksUsers[social]}`
  }
}
changeSocialMediaLink()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksUsers.github}`

  fetch(url)
    .then(response => response.json()) // convertendo dados do url para json
    .then(data => {
      userName.textContent = data.name
      bioGit.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
      /*let h1 = userName
      const changeGithub = h1.getAttribute('id')
      data.name = changeGithub */
      //alert(data.bio)
    })
}
getGithubProfileInfos()

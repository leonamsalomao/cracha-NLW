const linksSocialMedia = {
  github: 'leonamsalomao',
  linkedin: 'leonam-salomao',
  facebook: 'leonamsalomao',
  instagram: 'leo_salomao7',
  twitter: 'LeonamSalomao'
}

function changeSocialMediaLinks() {
  /* document.getElementById('userName').textContent = 'Léo Salomão' */

  /*  userName.textContent = 'Sheldon Lee Cooper' */
  /* for(let i= 0; i<= 10; i++) */
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      //userName.textContent = data.name
      userBio.textContent = data.bio
      useLink.href = data.html_url
      userImage.src = data.avatar_ulr
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

/* Arrow functions */

/* function nomeDaFuncao(argumentos){
  //code

}

argumentos => {
  
}

nomeDaFuncao() */

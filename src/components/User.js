import React, { useState } from 'react'

function UserProfile(props) {
  const [uName, setUname] = useState(`${props.userName}`)
  let nUserName = ''

  const [uPic, setUpic] = useState(`${props.userImage}`)
  let nUserPic = ''

  function newName() {
    nUserName = prompt('Digite o Novo Nome!')
    setUname(nUserName)
  }

  function newPic() {
    nUserPic = prompt('Coloque aqui o link da imagem!')
    setUpic(nUserPic)
  }

  return (
    <div class="usuario">
      <img onClick={newPic} src={uPic} alt={'Profile'} />
      <div class="texto">
        <strong>{props.userAt}</strong>
        {uName}
        <ion-icon onClick={newName} name="pencil"></ion-icon>
      </div>
    </div>
  )
}

export default function User() {
  return (
    <UserProfile
      userImage="assets/img/catanacomics.svg"
      userAt="catanacomics"
      userName="Catana"
    />
  )
}

import React, { useState } from 'react'

function Post(props) {
  const [clicked, setClicked] = useState(
    !(<ion-icon onClick={ifBooked} name="bookmark-outline"></ion-icon>)
  )
  const [liked, setLiked] = useState(!props.liked)
  console.log(liked)
  const [counter, setCounter] = useState(props.likesNumber)

  function ifClicked() {
    setLiked(!liked)
    likesCounter()
  }

  function likesCounter() {
    !liked
      ? setCounter(Number(props.likesNumber) + 1)
      : setCounter(Number(props.likesNumber) - 0, 5)
  }

  function imageLiker() {
    setLiked(true)
    if (!liked) {
      likesCounter()
    }
  }

  function ifBooked() {
    setClicked(!clicked)
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.userImage} alt={'you can see the person'} />
          {props.userName}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img
          onDoubleClick={imageLiker}
          src={props.postImage}
          alt={'you can see the person'}
        />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            {liked ? (
              <ion-icon
                onClick={ifClicked}
                class="if-liked"
                name="heart"
              ></ion-icon>
            ) : (
              <ion-icon onClick={ifClicked} name="heart-outline"></ion-icon>
            )}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            {clicked ? (
              <ion-icon onClick={ifBooked} name="bookmark"></ion-icon>
            ) : (
              <ion-icon onClick={ifBooked} name="bookmark-outline"></ion-icon>
            )}
          </div>
        </div>

        <div class="curtidas">
          <img src={props.likesImage} alt={'you can see the person'} />
          <div class="texto">
            Curtido por <strong>{props.likesName}</strong> e{' '}
            <strong>outras {counter} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

const posts = [
  {
    liked: 'false',
    userImage: 'assets/img/meowed.svg',
    userName: 'meowed',
    postImage: 'assets/img/gato-telefone.svg',
    likesImage: 'assets/img/respondeai.svg',
    likesName: 'respondeai',
    likesNumber: '101523'
  },
  {
    liked: 'false',
    userImage: 'assets/img/barked.svg',
    userName: 'barked',
    postImage: 'assets/img/dog.svg',
    likesImage: 'assets/img/adorable_animals.svg',
    likesName: 'adorable_animals',
    likesNumber: '99159'
  }
]

export default function Posts() {
  return (
    <div class="posts">
      {posts.map(post => (
        <Post
          userImage={post.userImage}
          userName={post.userName}
          postImage={post.postImage}
          likesImage={post.likesImage}
          likesName={post.likesName}
          likesNumber={post.likesNumber}
          liked={post.liked}
        />
      ))}
    </div>
  )
}

function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.userImage} />
          {props.userName}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.postImage} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon onClick={()=>alert("haverá uma função em freve nesse ícone!")}
            name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={()=>alert("haverá uma função em freve nesse ícone!")} name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.likesImage} />
          <div class="texto">
            Curtido por <strong>{props.likesName}</strong> e{' '}
            <strong>outras {props.likesNumber} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

const posts = [
  {
    userImage: 'assets/img/meowed.svg',
    userName: 'meowed',
    postImage: 'assets/img/gato-telefone.svg',
    likesImage: 'assets/img/respondeai.svg',
    likesName: 'respondeai',
    likesNumber: '101.523'
  },
  {
    userImage: 'assets/img/barked.svg',
    userName: 'barked',
    postImage: 'assets/img/dog.svg',
    likesImage: 'assets/img/adorable_animals.svg',
    likesName: 'adorable_animals',
    likesNumber: '99.159'
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
        />
      ))}
    </div>
  )
}

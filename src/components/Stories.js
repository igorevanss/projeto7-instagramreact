function Storie(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.image} alt={"you can see the person"} />
      </div>
      <div class="usuario">{props.user}</div>
    </div>
  )
}

const stories = [
  { image: 'assets/img/9gag.svg', user: '9gag' },
  { image: 'assets/img/meowed.svg', user: 'meowed' },
  { image: 'assets/img/barked.svg', user: 'barked' },
  {
    image: 'assets/img/nathanwpylestrangeplanet.svg',
    user: 'nathanwpylestrangeplanet'
  },
  { image: 'assets/img/wawawicomics.svg', user: 'wawawicomics' },
  { image: 'assets/img/respondeai.svg', user: 'respondeai' },
  { image: 'assets/img/filomoderna.svg', user: 'filomoderna' },
  { image: 'assets/img/memeriagourmet.svg', user: 'memeriagourmet' },
  { image: 'assets/img/9gag.svg', user: '9gag' }
]

export default function Stories() {
  return (
    <div class="stories">
      {stories.map(storie => (
        <Storie image={storie.image} user={storie.user} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}

function Suggestion(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.suggestionImage} />
        <div class="texto">
          <div class="nome">{props.suggestionAt}</div>
          <div class="razao">{props.followStatus}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  )
}

const suggestions = [
  {
    suggestionImage: 'assets/img/bad.vibes.memes.svg',
    suggestionAt: 'bad.vibes.memes',
    followStatus: 'Segue você'
  },
  {
    suggestionImage: 'assets/img/chibirdart.svg',
    suggestionAt: 'chibirdart',
    followStatus: 'Segue você'
  },
  {
    suggestionImage: 'assets/img/razoesparaacreditar.svg',
    suggestionAt: 'razoesparaacreditar',
    followStatus: 'Novo no Instagram'
  },
  {
    suggestionImage: 'assets/img/adorable_animals.svg',
    suggestionAt: 'adorable_animals',
    followStatus: 'Segue você'
  },
  {
    suggestionImage: 'assets/img/smallcutecats.svg',
    suggestionAt: 'smallcutecats',
    followStatus: 'Segue você'
  }
]

export default function Suggestions() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {suggestions.map(suggestion => (
        <Suggestion
          suggestionImage={suggestion.suggestionImage}
          suggestionAt={suggestion.suggestionAt}
          followStatus={suggestion.followStatus}
        />
      ))}
    </div>
  )
}

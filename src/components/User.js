function UserProfile(props) {
  return (
    <div class="usuario">
      <img src={props.userImage} />
      <div class="texto">
        <strong>{props.userAt}</strong>
        {props.userName}
        <ion-icon name="pencil"></ion-icon>
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

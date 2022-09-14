import Stories from './Stories'
import Posts from './Posts'
import Sidebar from './Sidebar'

export default function Main() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />

        <Posts />
      </div>

      <Sidebar />
    </div>
  )
}

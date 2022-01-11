import { useMyContext } from "../../contexts/MyContext"


export default function Home() {
  const { myState } = useMyContext()
  return (
    <div>
      <h2>Home</h2>
      <p>Welcom to my template app. Please use to create future projects!</p>
      <p>{myState && myState}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum sequi iste at consequatur enim repudiandae? Similique distinctio dolores commodi!</p>
    </div>
  )
}

import { useIsMobile } from "../../contexts/IsMobileContext"


export default function Home() {
  const { isMobile } = useIsMobile()
  return (
    <div>
      <h1>Home</h1>
      <p>Welcom to my template app. Please use to create future projects!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum sequi iste at consequatur enim repudiandae? Similique distinctio dolores commodi!</p>
    </div>
  )
}

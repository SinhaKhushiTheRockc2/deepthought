import Card from "../components/card/Card"
import JourneyBoard from "../components/journeyboard/JourneyBoard"
import NoticeBoard from "../components/noticeboard/NoticeBoard"
import SideIcons from "../components/sideicons/SideIcons"
import Task from "../components/task/Task"

const Home = () => {
  return (
    <div>
      <JourneyBoard/>
      <Task/>
      <Card/>
      <SideIcons/>
      <NoticeBoard/>
    </div>
  )
}

export default Home

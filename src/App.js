import Navbar from "./components/nav/Navbar"
import Home from "./sections/Home"

const App = () => {
  return (
    <main>
      <section className="parentNavbarContainer">
        <Navbar/>
      </section>
      <section className="parentHomeContainer">
        <Home/>
      </section>
    </main>
  )
}

export default App

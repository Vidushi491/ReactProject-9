import Nav from "./components/Nav"
import MainRoutes from "./routes/MainRoutes"

const App = () => {
  return (
  <div className="bg-black">
    <Nav />
    <div className="pt-10 md:pt-12">
      <MainRoutes/>
    </div>
  </div>
  )
}

export default App
import { Suspense } from "react"
import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Players from "./components/Players/players"
import type { Player } from "./types/playerType"
import Footer from "./components/Footer"

const playerFetch = async (): Promise<Player[]> => {
  const res = await fetch("/data.json")
  return res.json()
}

const playerPromise = playerFetch()

function App() {
  return (
    <>
      <div className="mx-auto max-w-300 px-4">
        <Nav />
        <Banner />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Players playerPromise={playerPromise} />
        </Suspense>
      </div>
      <Footer />
    </>
  )
}

export default App

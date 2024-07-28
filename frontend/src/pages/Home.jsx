import Hero from "../components/Hero"
import Products from "../components/Products"

const Home = () => {
  return (
    <div className="h-[calc(100vh - 100px)]">
<Hero/>
<Products/>
  </div>
  )
}

export default Home
import BestSeller from "../component/BestSeller"
import Hero from "../component/Hero"
import LatesCollection from "../component/LatesCollection"
import Ourpolycy from "../component/Ourpolycy"
import NewsletterBox from "../component/NewsletterBox"


const Home = () => {
  return (
    <div>
      <Hero/>
      <LatesCollection></LatesCollection>
      <BestSeller/>
      <Ourpolycy/>
      <NewsletterBox></NewsletterBox>
    </div>
  )
}

export default Home
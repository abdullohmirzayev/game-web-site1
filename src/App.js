import Games from "./components/games";
import Navbar from "./components/navbar";
import OurSponsors from "./components/our-sponsors";
import Pages from "./components/pages";
import Team from "./components/team";
import About from "./components/about";
import { styles } from "./util/style";
import Shop from "./components/shop";
import SearchingPanel from "./components/searching-panel";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={styles.container}>
        {/* Navbar */}
        <Navbar />
        {/* Our Sponsors */}
        <OurSponsors />
        {/* About */}
        <About />
        {/* Team */}
        <Team />
        {/* Pages */}
        <Pages />
        {/* Games */}
        <Games />
        {/* shop */}
        <Shop />
        {/* searching-panel */}
        <SearchingPanel />
        {/* footer */}
        <Footer />
      </div>
    </div>
  )
};

export default App 
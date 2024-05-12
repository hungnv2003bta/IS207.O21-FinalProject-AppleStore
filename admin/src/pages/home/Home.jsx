import Navbar from "../../components/navbar/navbar";
import sidebar from "../../components/sidebar/sidebar";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
          <div className="homeContainer">
              <Navbar />
      </div>
    </div>
  );
};

export default Home;

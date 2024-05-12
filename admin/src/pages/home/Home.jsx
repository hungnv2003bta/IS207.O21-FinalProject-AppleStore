import sidebar from "../../components/sidebar/sidebar";
import "./home.css";

const home = () => {
  return (
    <div className="home">
      <sidebar />
      <div className="homeContainer">Container</div>
    </div>
  );
};

export default home;
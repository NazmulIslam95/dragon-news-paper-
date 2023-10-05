import BreakingNews from "../../Components/BreakingNews/BreakingNews";
import Header from "../../Components/Header/Header";
import LeftSideSec from "../../Components/LeftSideSec/LeftSideSec";
import Navbar from "../../Components/Navbar/Navbar";
import RightSideSec from "../../Components/RightSideSec/RightSideSec";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="border text-center">
          <LeftSideSec></LeftSideSec>
        </div>
        <div className="col-span-2 border text-center">
          <h2 className="text-2xl">News Coming Soon...</h2>
        </div>
        <div className="border text-center">
          <RightSideSec></RightSideSec>
        </div>
      </div>
    </div>
  );
};

export default Home;

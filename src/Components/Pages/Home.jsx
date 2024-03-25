import Banner from "./Banner";
import wave from "../../assets/wave.svg";

const Home = () => {
  return (
    <div className="flex items-center justify-center relative min-h-[calc(100vh-116px)]">
      <Banner></Banner>
      <img className="absolute bottom-0 w-full" src={wave} alt="" />
    </div>
  );
};

export default Home;

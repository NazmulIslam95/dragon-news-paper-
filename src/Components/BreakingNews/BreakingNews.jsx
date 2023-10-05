import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="my-4 h-20 py-4 px-2 bg-[#F3F3F3] flex gap-4">
      <button className="bg-[#D72050] text-white w-24 h-12">Latest</button>
      <Marquee>
        <p className="text-lg font-semibold text-[#403F3F]">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default BreakingNews;

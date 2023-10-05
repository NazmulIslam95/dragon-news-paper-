import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const RightSideSec = () => {
  return (
    <div>
      <div className="py-4 space-y-3 mb-6">
        <h1 className="text-xl font-semibold">Login With</h1>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Login With Github
        </button>
      </div>
      <div className="py-4  mb-6">
        <h1 className="text-xl font-semibold mb-4">Find Us On</h1>
        <a
          href=""
          className="flex gap-2 items-center p-3 border border-[#E7E7E7] rounded-t-md"
        >
          <FaFacebook></FaFacebook>
          <span className="text-base text-[#706F6F] font-medium">Facebook</span>
        </a>
        <a
          href=""
          className="flex gap-2 items-center p-3 border-x border-[#E7E7E7]"
        >
          <FaTwitter></FaTwitter>
          <span className="text-base text-[#706F6F] font-medium">Twitter</span>
        </a>
        <a
          href=""
          className="flex gap-2 items-center p-3 border border-[#E7E7E7] rounded-b-md"
        >
          <FaInstagram></FaInstagram>
          <span className="text-base text-[#706F6F] font-medium">
            Instagram
          </span>
        </a>
      </div>
      <div className="bg-[#F3F3F3] py-4 px-4 mb-6">
        <h1 className="text-xl font-semibold mb-4">Q-Zone</h1>
        <img src="https://i.ibb.co/Q814tpY/qZone1.png" alt="" />
        <img src="https://i.ibb.co/6Y2wShL/qZone2.png" alt="" />
        <img src="https://i.ibb.co/W6PjJPp/qZone3.png" alt="" />
      </div>
      <div className="bg-[url('https://i.ibb.co/nRBn7Vg/bg.png')] py-16 px-8 mb-6">
        <h1 className="text-white text-3xl text-center font-bold ">
          Create an Amazing Newspaper
        </h1>
        <p className="text-white text-center text-base font-normal my-6">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <div className="flex justify-center items-center ">
          <button className="text-white font-semibold text-xl bg-[#D72050] px-5 py-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideSec;

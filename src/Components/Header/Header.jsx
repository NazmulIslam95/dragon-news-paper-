import moment from "moment/moment";


const Header = () => {
    return (
        <div className="flex flex-col gap-4 mt-4 justify-center items-center">
            <img src="https://i.ibb.co/C7hhsDv/logo.png" alt="" />
            <p className="text-lg font-normal text-[#706F6F]">Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd,MMMM D,YYYY")}</p>
        </div>
    );
};

export default Header;
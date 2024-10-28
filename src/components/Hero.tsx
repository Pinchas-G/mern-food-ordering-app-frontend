import coke from "../assets/coke.png";
import burger from "../assets/burger.png";

const Hero = () => {
  return (
    <div className="h-fit flex items-center justify-center bg-[#ebebeb] p-[60px_30px_40px_30px]">
      <div className="flex items-end justify-center w-[clamp(350px,100%,900px)] max-h-[400px] border-4 border-[#ea580c] rounded-[23%_77%_71%_29%_/_77%_64%_36%_23%] shadow-[10px_-20px_0_4px_#ea580c] overflow-hidden bg-white pt-4 pb-7 md:p-10">
        <img
          src={coke}
          alt="Exploded view of a coke"
          className="object-contain h-[28vw] md:h-[23vw] me-[-3vw]"
        />
        <img
          src={burger}
          alt="Exploded view of a burger"
          className="object-contain w-[36vw] md:w-[26vw] h-fit ms-[-2vw] mb-[-1vw]"
        />
      </div>
    </div>
  );
};

export default Hero;

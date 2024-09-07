
import banner1 from "../../assets/banner/banner1.avif"
import banner2 from "../../assets/banner/banner2.avif"
import banner3 from "../../assets/banner/banner3.avif"
import banner4 from "../../assets/banner/banner4.avif"


import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={1300} // interval in milliseconds
      className="lg:h-[450px] relative"
    >
      <div>
        <img className="lg:h-[950px]" src={banner2} alt="" />
        <div className="absolute top-[300px] left-0 right-0 mx-auto text-center text-white hidden md:block">
          <div className="bg-black bg-opacity-60 p-4 rounded-lg inline-block">
            <p className="text-xl font-semibold">
              Welcome to our book library blog, your go-to resource for all
              things literary! Discover book reviews, author interviews, and
              reading recommendations tailored for every genre enthusiast. Join
              our community of book lovers and dive into engaging discussions.
              Stay tuned for upcoming events and exclusive library updates!
            </p>
          </div>
        </div>
      </div>
      <div>
        <img className="lg:h-[1000px]" src={banner1} alt="" />
        <div className="absolute top-[300px] left-0 right-0 mx-auto text-center text-white hidden md:block">
          <div className="bg-black bg-opacity-60 p-4 rounded-lg inline-block">
            <p className="text-xl font-semibold">
              Welcome to our book library blog, your go-to resource for all
              things literary! Discover book reviews, author interviews, and
              reading recommendations tailored for every genre enthusiast. Join
              our community of book lovers and dive into engaging discussions.
              Stay tuned for upcoming events and exclusive library updates!
            </p>
          </div>
        </div>
      </div>
      <div>
        <img className="lg:h-[1000px]" src={banner4} alt="" />
        <div className="absolute top-[300px] left-0 right-0 mx-auto text-center text-white hidden md:block">
          <div className="bg-black bg-opacity-60 p-4 rounded-lg inline-block">
            <p className="text-xl font-semibold">
              Welcome to our book library blog, your go-to resource for all
              things literary! Discover book reviews, author interviews, and
              reading recommendations tailored for every genre enthusiast. Join
              our community of book lovers and dive into engaging discussions.
              Stay tuned for upcoming events and exclusive library updates!
            </p>
          </div>
        </div>
      </div>
      <div>
        <img className="lg:h-[1000px]" src={banner3} alt="" />
        <div className="absolute top-[300px] left-0 right-0 mx-auto text-center text-white hidden md:block">
          <div className="bg-black bg-opacity-60 p-4 rounded-lg inline-block">
            <p className="text-xl font-semibold">
              Welcome to our book library blog, your go-to resource for all
              things literary! Discover book reviews, author interviews, and
              reading recommendations tailored for every genre enthusiast. Join
              our community of book lovers and dive into engaging discussions.
              Stay tuned for upcoming events and exclusive library updates!
            </p>
          </div>
        </div>
      </div>
    </AutoplaySlider>
  );
};

export default Slider;

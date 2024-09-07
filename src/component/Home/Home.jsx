import Books from "../Books/Books";
import Contact from "../Contact/Contact";
import ExtraSection1 from "../ExtraSection1/ExtraSection1";
import ExtraSection2 from "../ExtraSection2/ExtraSection2";
import ExtraSection3 from "../ExtraSection3/ExtraSection3";
import Slider from "../Slider/Slider";


const Home = () => {
       return (
              <div>
                    <Slider></Slider>
                    <Books></Books>
                    <ExtraSection1></ExtraSection1>
                    <ExtraSection2></ExtraSection2>
                    <ExtraSection3></ExtraSection3>
                    <Contact></Contact>
                     
              </div>
       );
};

export default Home;
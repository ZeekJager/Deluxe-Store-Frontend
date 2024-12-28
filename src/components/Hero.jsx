import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold trascking-tight  sm:text-6xl ">
          Furnishing Homes with Elegance
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Transform your living spaces into timeless havens of style and comfort
          with our commitment to refined craftsmanship and sophisticated design.
          &apos;Furnishing Homes with Elegance&apos; reflects our passion for
          curating pieces that elevate your home into a sanctuary of beauty and
          grace.
        </p>
        <div className="mt-10 ">
          <Link
            to="products"
            className="btn bg-yellow-700 text-neutral-content"
          >
            OUR PRODUCTS
          </Link>
        </div>
      </div>
      <div className="hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80  object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;

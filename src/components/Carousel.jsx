import { Carousel } from "flowbite-react";
import { assets } from "../assets/assets";

export function CarouselComponent() {
  const left = <img className="ml-4 w-[25px]" src={assets.left} alt="Left Control" />;
  const right = <img className="mr-4 w-[25px]" src={assets.right} alt="Right Control" />;

  return (
    <div className="h-72 relative">
      {/* Carousel */}
      <Carousel indicators={true} leftControl={left} rightControl={right} className="px-4">
        <img src={assets.manCover} alt="Carousel Image 1" />
        <img src={assets.manCover} alt="Carousel Image 2" />
        <img src={assets.manCover} alt="Carousel Image 3" />
        <img src={assets.manCover} alt="Carousel Image 4" />
        <img src={assets.manCover} alt="Carousel Image 5" />
      </Carousel>

      <div className="absolute bottom-[-45px] left-[15px]">
        <img
          src={assets.like}
          alt="Like Icon"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

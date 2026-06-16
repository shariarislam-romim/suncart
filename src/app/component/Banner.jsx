import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div 
     style={{ backgroundImage: "url('/beach.jpg')" }}
    className=" h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/40 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <p className="text-lg md:text-xl  max-w-xl text-gray-200">
            Summer Collection Sale
          </p>
          <h1 className="text-4xl md:text-7xl font-bold mb-10 max-w-4xl">
             <span className="text-red-700"> 40%  OFF  </span>  to All Products
          </h1>

          <div className="flex gap-5">
            <Link href="/sign-up">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500 text-lg p-5 transition-all duration-200 
              hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10">
                Shop Now
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white text-lg p-5">
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
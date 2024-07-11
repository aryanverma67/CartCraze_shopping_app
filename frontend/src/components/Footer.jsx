import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="text-3xl text-red-600 font-bold rounded-2xl px-2 py-1">
            CART
            <span className="text-2xl text-blue-900 font-semibold">Craze</span>
          </h1>
          <p className="text-sm mt-6 mb-3">
            Discover a seamless online shopping experience with CartCraze.
            Offering the latest trends in fashion, electronics, and more, we
            ensure top-notch customer service and fast shipping. Join our
            community and enjoy exclusive deals, easy returns, and a secure
            shopping environment. Shop smart, shop CartCraze.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare
              className="cursor-pointer hover:text-orange-600"
              size={30}
            />
            <FaInstagram
              className="cursor-pointer hover:text-orange-600"
              size={30}
            />
            <FaTwitterSquare
              className="cursor-pointer hover:text-orange-600"
              size={30}
            />
            <FaGithubSquare
              className="cursor-pointer hover:text-orange-600"
              size={30}
            />
            <FaDribbbleSquare
              className="cursor-pointer hover:text-orange-600"
              size={30}
            />
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col sm:flex-row justify-between mt-6">
          <div className="mb-4 sm:mb-0">
            <h6 className="font-medium text-[#9b9b9b] hover:scale-125 transition-all">
              Company
            </h6>
            <ul>
              <li className="py-2 text-sm hover:text-orange-600">About Us</li>
              <li className="py-2 text-sm hover:text-orange-600">Careers</li>
              <li className="py-2 text-sm hover:text-orange-600">Blog</li>
              <li className="py-2 text-sm hover:text-orange-600">Press</li>
            </ul>
          </div>
          <div className="mb-4 sm:mb-0">
            <h6 className="font-medium text-[#9b9b9b] hover:scale-125 transition-all">
              Customer Service
            </h6>
            <ul>
              <li className="py-2 text-sm hover:text-orange-600">Help Center</li>
              <li className="py-2 text-sm hover:text-orange-600">Returns</li>
              <li className="py-2 text-sm hover:text-orange-600">Shipping</li>
              <li className="py-2 text-sm hover:text-orange-600">Contact Us</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b] hover:scale-125 transition-all">
              Resources
            </h6>
            <ul>
              <li className="py-2 text-sm hover:text-orange-600">FAQ</li>
              <li className="py-2 text-sm hover:text-orange-600">Terms of Service</li>
              <li className="py-2 text-sm hover:text-orange-600">Privacy Policy</li>
              <li className="py-2 text-sm hover:text-orange-600">Sitemap</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

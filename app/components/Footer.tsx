import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-6 px-6 md:px-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
       
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Logo</h2>
          <div className="flex gap-4">
            <FaFacebookF className="cursor-pointer hover:text-gray-400" />
            <FaTwitter className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
          </div>
          <p className="text-sm text-gray-400">Copyright © 2024 | All Rights Reserved.</p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer font-semibold text-white">Sand Stone</li>
            <li className="hover:text-white cursor-pointer">Stone</li>
            <li className="hover:text-white cursor-pointer">Cement</li>
            <li className="hover:text-white cursor-pointer">Soft Stone</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Measurement Service</li>
            <li className="hover:text-white cursor-pointer">Product Advice</li>
            <li className="hover:text-white cursor-pointer">Interior Design</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            3181 Al Imam Saud Ibn Abdul Aziz Branch Rd,<br />
            An Nuzhah, Riyadh 12474,<br />
            Saudi Arabia
          </p>
        </div>
      </div>

      
      <div className="mt-12 text-sm text-gray-400 text-right pr-4 md:pr-0">
        Created with love by <span className="text-white font-medium">thecreation.design</span>
      </div>
    </footer>
    

  );
};

export default Footer;

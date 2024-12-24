import React from "react";
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined, YoutubeOutlined } from "@ant-design/icons";

const FooterEl = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section: Social Media and Address */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <div className="flex space-x-4 text-2xl text-gray-600">
            <a
              href="#"
              aria-label="Instagram"
              title="Follow us on Instagram"
              className="hover:text-pink-500 transition"
            >
              <InstagramOutlined />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              title="Like us on Facebook"
              className="hover:text-blue-600 transition"
            >
              <FacebookOutlined />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              title="Subscribe to our YouTube channel"
              className="hover:text-red-600 transition"
            >
              <YoutubeOutlined />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              title="Chat with us on WhatsApp"
              className="hover:text-green-500 transition"
            >
              <WhatsAppOutlined />
            </a>
          </div>
          <p className="text-sm">
            Ganga Harmu Ranchi, Near Naman Vidya School, Ranchi
          </p>
        </div>

        {/* Center Section: Logo */}
        <div className="flex-shrink-0">
          <img src="/logo.png" alt="Kanchan Stationery Logo" className="w-36 bg-black rounded-lg" />
        </div>

        {/* Right Section: WhatsApp Inquiry */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4">
          <p className="text-sm">
            Connect on WhatsApp for any inquiry or services
          </p>
          <a
            href="#"
            className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            <WhatsAppOutlined />
            <span>Enquiry Now</span>
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} shriradhavallabhlal.com. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterEl;

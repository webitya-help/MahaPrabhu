import React from "react";
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined, YoutubeOutlined } from "@ant-design/icons";

const FooterEl = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-6 select-none">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-y-6 gap-x-10">
        {/* Left Column: Address */}
        <div className="flex-1 min-w-[200px] text-center md:text-left">
          <p className="text-sm font-medium leading-relaxed">
            <b> गोo श्रीहित निमिष जी महाराज</b>,<br />
            <b>श्रीहित राधावल्लभ लाल मंदिर, वृंदावन</b>
            <p><b>संपर्क सूत्र :</b> 8168100515 , 9890455777
            </p>
          </p>
          
        </div>

        {/* Middle Column: Social Media Links */}
        <div className="flex-1 flex justify-center space-x-6 text-2xl text-gray-600 min-w-[200px]">
          <a
            href="https://www.instagram.com/shrihitradhavallabhlal/profilecard/?igsh=MW15N252NW80Zm5tYw=="
            aria-label="Instagram"
            title="Follow us on Instagram"
            className="hover:text-pink-500 transition transform hover:scale-110"
          >
            <InstagramOutlined />
          </a>
          <a
            href="https://www.facebook.com/share/kqsnsRNxBETYHXkM/?mibextid=wwXIfr"
            aria-label="Facebook"
            title="Like us on Facebook"
            className="hover:text-blue-600 transition transform hover:scale-110"
          >
            <FacebookOutlined />
          </a>
          <a
            href="https://youtube.com/@shrihitradhavallabhlal?si=T6eS2SPCQN7WkR-s"
            aria-label="YouTube"
            title="Subscribe to our YouTube channel"
            className="hover:text-red-600 transition transform hover:scale-110"
          >
            <YoutubeOutlined />
          </a>
          <a
            href="https://wa.link/woao1u"
            aria-label="WhatsApp"
            title="Chat with us on WhatsApp"
            className="hover:text-green-500 transition transform hover:scale-110"
          >
            <WhatsAppOutlined />
          </a>
        </div>

        {/* Right Column: WhatsApp Inquiry */}
        <div className="flex-1 min-w-[200px] text-center md:text-right">
          <p className="text-sm font-medium mb-3">
            Connect on WhatsApp for any inquiry or services
          </p>
          <a
            href="https://wa.link/woao1u"
            className="inline-flex items-center justify-center space-x-2 bg-green-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-green-600 transition transform hover:scale-105"
          >
            <WhatsAppOutlined />
            <span>मंदिर से जुड़े
            </span>
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-300 mt-6 pt-4">
        <div className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} <a href="/" className="hover:underline">shriradhavallabhlal.com</a>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterEl;

import React from 'react';
import { InstagramOutlined, LinkedinOutlined, TwitterOutlined, YoutubeOutlined, FacebookOutlined } from '@ant-design/icons';

function SocialLinks() {
  return (
    <div className="flex space-x-4 mb-4">
      <a href="#" className="text-gray-600 hover:text-indigo-600">
        <InstagramOutlined className="text-lg" />
      </a>
      <a href="#" className="text-gray-600 hover:text-indigo-600">
        <LinkedinOutlined className="text-lg" />
      </a>
      <a href="#" className="text-gray-600 hover:text-indigo-600">
        <TwitterOutlined className="text-lg" />
      </a>
      <a href="#" className="text-gray-600 hover:text-indigo-600">
        <YoutubeOutlined className="text-lg" />
      </a>
      <a href="#" className="text-gray-600 hover:text-indigo-600">
        <FacebookOutlined className="text-lg" />
      </a>
    </div>
  );
}

export default SocialLinks;

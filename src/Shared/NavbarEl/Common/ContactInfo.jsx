import React from 'react';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

function ContactInfo() {
  return (
    <div className="space-y-2 text-sm text-gray-600">
      <div className="flex items-center">
        <PhoneOutlined className="text-base mr-2" />
        <span>+91 9693245941</span>
      </div>
      <div className="flex items-center">
        <MailOutlined className="text-base mr-2" />
        <span>webitya@gmail.com</span>
      </div>
      <div className="flex items-center">
        <EnvironmentOutlined className="text-base mr-2" />
        <span>Ganga nagar Harmu Ranchi, Ranchi Jharkhand</span>
      </div>
    </div>
  );
}

export default ContactInfo;

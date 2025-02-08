import React from 'react';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

function ContactInfo() {
  return (
    <div className="space-y-2 text-sm text-gray-600 py-5">
      <div className="flex items-center">
        <PhoneOutlined className="text-base mr-2" />
        <span><b>सेवा संपर्क सूत्र </b>: 8168100515 , 9890455777
        </span>
      </div>
      <div className="flex items-center">
        <MailOutlined className="text-base mr-2" />
        <span>shrihitradhavallabh@gmail.com
        </span>
      </div>
      <div className="flex items-center">
        <EnvironmentOutlined className="text-base mr-2" />
        <span>गोo श्रीहित निमिष जी महाराज <br></br>
        श्रीहित राधावल्लभ लाल जी मंदिर, वृंदावन

        </span>
      </div>
    </div>
  );
}

export default ContactInfo;

import React from 'react';
import LayoutEl from '../LayoutEl';

const ComingSoon = ({ message = 'We are launching soon!', estimatedTime = null }) => {
  return (
    <LayoutEl>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800 text-center px-6">
        <div className="space-y-6 max-w-lg">
          {/* Logo */}
          <div className="mb-6">
            <img src="/seva.png" alt="Logo" className="mx-auto h-20" />
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl font-semibold">
            Coming Soon
          </h1>

          {/* Sub-Message */}
          <p className="text-lg md:text-xl text-gray-600">{message}</p>

          {/* Estimated Time */}
          {estimatedTime && (
            <p className="text-sm text-gray-500">
              Launch Date: <span className="font-medium">{estimatedTime}</span>
            </p>
          )}

          {/* Back to Home Button */}
          <div>
            <a
              href="/"
              className="inline-block px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-md shadow hover:bg-blue-700 transition"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </LayoutEl>
  );
};

export default ComingSoon;

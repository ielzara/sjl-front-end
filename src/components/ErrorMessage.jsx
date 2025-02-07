import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="my-8">
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex items-start gap-4">
          {/* Error icon */}
          <div className="text-red-500 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 font-merriweather mb-2">
              Error Loading Articles
            </h3>
            <p className="text-gray-600 mb-4">
              {message}
            </p>
            {onRetry && (
              <button 
                onClick={onRetry}
                className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-colors"
              >
                Try Again
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func
};

export default ErrorMessage;
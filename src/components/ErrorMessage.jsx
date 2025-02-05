import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div>
      <div>
        <span>✕</span>
        <div>
          <h3>Error Loading Articles</h3>
          <p>{message}</p>
        </div>
        {onRetry && (
          <button onClick={onRetry}>
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func
};

export default ErrorMessage;
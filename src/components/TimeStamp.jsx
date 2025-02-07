import { DateTime } from 'luxon';
import PropTypes from 'prop-types';

const TimeStamp = ({ time }) => {
  // Parse the input time as GMT/UTC
  const parsedTime = DateTime.fromISO(time, { zone: 'utc' });
  
  if (!parsedTime.isValid) {
    console.error('Invalid time format:', time);
    return null;
  }

  // Convert to user's local timezone
  const localTime = parsedTime.toLocal();
  
  // Format the date
  const formattedDate = localTime.toLocaleString({
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  return (
    <time 
      dateTime={parsedTime.toISO()} 
      title={formattedDate}
      className="text-gray-500"
    >
      {formattedDate}
    </time>
  );
};

TimeStamp.propTypes = {
  time: PropTypes.string.isRequired,
};

export default TimeStamp;
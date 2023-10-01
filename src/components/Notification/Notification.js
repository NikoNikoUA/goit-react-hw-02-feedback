import { Notifier } from './Notification.styled';
import { FaRegSadCry } from 'react-icons/fa';

export const Notification = ({ message }) => {
  return (
    <Notifier>
      {message}
      <FaRegSadCry />
    </Notifier>
  );
};

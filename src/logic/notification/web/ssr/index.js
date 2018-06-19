import { notification } from 'antd';

const sendNotification = function(type, message, description) {
  notification[type]({
    message,
    description
  });
}
const notificationServiceWrapper = {
  success: (message) => sendNotification('success', message),
  error: (message) => sendNotification('error', message),
  info: (message) => sendNotification('info', message),
  warning: (message) => sendNotification('warning', message),
  warn: (message) => sendNotification('warn', message),
}

export default notificationServiceWrapper;

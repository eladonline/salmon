import {notificationService} from 'src/logic';

export default class notification {
  static error(message) {
    notificationService.error(message)
  }
};

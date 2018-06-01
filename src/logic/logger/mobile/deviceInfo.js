import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const deviceType = Platform.OS;
const timeZone = DeviceInfo.getTimezone();
const firstInstallTime = DeviceInfo.getFirstInstallTime();
const lastUpdateTime = DeviceInfo.getLastUpdateTime();
const brand = DeviceInfo.getBrand();
const readableVersion = DeviceInfo.getReadableVersion();
const systemVersion = DeviceInfo.getSystemVersion();
const version = DeviceInfo.getVersion();

const deviceInfo = {
  deviceType,
  timeZone,
  firstInstallTime,
  lastUpdateTime,
  brand,
  readableVersion,
  systemVersion,
  version,
};

export default deviceInfo;

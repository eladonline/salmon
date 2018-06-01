import { clearLastUserInStorage } from './persist';


export default function* cleanLastUserWorker() {
  yield clearLastUserInStorage();
}

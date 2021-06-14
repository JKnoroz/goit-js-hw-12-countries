import { alert, defaultModules } from 'node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from 'node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

defaultModules.set(PNotifyMobile, {});

alert({
  text: 'Notice me, senpai!',
});

import { alert, notice, info, success, error } from '@pnotify/core';

const mySuccess = success({
  text: "I'm a success message.",
});

const myInfo = info({
  text: "I'm an info message.",
});

export default { mySuccess };

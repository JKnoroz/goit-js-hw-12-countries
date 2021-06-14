import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';

import { notice, info, success, error } from '@pnotify/core';

const mySuccess = success({
  text: 'WOW! You found the country',
  autoOpen: false,
});

const myNotice = notice({
  text: 'Put in some more letters',
  autoOpen: false,
});

const myInfo = info({
  text: 'Too many matches found. Please enter a more specific query!',
  autoOpen: false,
});

const myError = error({
  title: 'Oh No!',
  text: 'Something terrible happened.',
  autoOpen: false,
});

export default { myInfo, mySuccess, myNotice, myError };

// import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';

import { notice, info, success, error, defaultStack } from '@pnotify/core';

// const mySuccess = success({
//   text: 'WOW! You found the country',
// });

function onSuccess() {
  defaultStack.close();
  success({
    text: 'WOW! You found the country',
    delay: 1000,
  });
}

function moreLetters() {
  defaultStack.close();
  notice({
    text: 'Put in some more letters',
    delay: 1000,
  });
}

function tooMany() {
  defaultStack.close();
  info({
    text: 'Too many matches found. Please enter a more specific query!',
    delay: 2000,
  });
}

function notFound() {
  defaultStack.close();
  error({
    title: 'Ups!',
    text: 'No such country',
  });
}

function myError() {
  defaultStack.close();
  error({
    title: 'Oh no',
    text: 'Something went wrong',
    delay: 10000,
  });
}

export default { tooMany, onSuccess, moreLetters, notFound, myError };

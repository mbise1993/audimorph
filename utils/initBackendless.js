import Backendless from 'backendless';

const APP_ID = 'B4165B5D-F915-3859-FF59-D7A8AC7C3F00';
const JS_API_KEY = 'BB32B956-6162-4085-BF7F-73F71BCA8D19';

export function initBackendless() {
  Backendless.initApp(APP_ID, JS_API_KEY);
}

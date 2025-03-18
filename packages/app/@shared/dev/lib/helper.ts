import { RUNTIME_ENVIRONMENT } from './constant';

const checkDevMode = () => process.env.NODE_ENV !== RUNTIME_ENVIRONMENT.DEV;

const dConsole = {
  log: (message: string) => {
    if (checkDevMode()) {
      console.log('[LOG]:', message);
    }
  },
  warn: (message: string) => {
    if (checkDevMode()) {
      console.warn('[WARN]:', message);
    }
  },
  error: (message: string) => {
    if (checkDevMode()) {
      console.error('[ERROR]:', message);
    }
  },
};

export { checkDevMode, dConsole };

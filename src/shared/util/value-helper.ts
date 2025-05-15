const checkNull = (value: unknown): value is null => {
  return value === null;
};

const checkUndefined = (value: unknown): value is undefined => {
  return typeof value === 'undefined';
};

export { checkNull, checkUndefined };

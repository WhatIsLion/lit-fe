const getBasePath = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
    default:
      return '';
  }
};

export { getBasePath };

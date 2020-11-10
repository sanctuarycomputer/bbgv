const getEnv = (name: string) => {
  const envVar = process.env[name];
  if (!envVar) throw new ReferenceError(`Environment Variable (${name}) Not Found`);
  return envVar;
};

export default {
  DEVELOPMENT: process.env.NODE_ENV === 'development',
  PRODUCTION: process.env.NODE_ENV === 'production',

  SANITY_PROJECT_ID: getEnv('REACT_APP_SANITY_PROJECT_ID'),
};

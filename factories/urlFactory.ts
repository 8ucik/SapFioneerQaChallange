type Environment = 'production';

const baseUrls: Record<Environment, string> = {
  production: 'https://www.sapfioneer.com',
};

const getBaseUrl = (env: Environment = 'production'): string => {
  return baseUrls[env];
};

export const UrlFactory = {
  home: (env?: Environment) => `${getBaseUrl(env)}/`,
  esgKpiEngine: (env?: Environment) => `${getBaseUrl(env)}/finance-esg/esg-kpi-engine/`,
  contactSales: (env?: Environment) => `${getBaseUrl(env)}/contact-sales/`,
};

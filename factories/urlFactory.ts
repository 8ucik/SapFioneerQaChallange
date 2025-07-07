type Environment = 'production';

const baseUrls: Record<Environment, string> = {
  production: 'https://www.sapfioneer.com',
};

class UrlFactory {
  private static readonly routes: Record<
    | 'home'
    | 'esgKpiEngine'
    | 'contactSales'
    | 'bankingSection'
    | 'insuranceSection'
    | 'financeEsgSection',
    string
  > = {
    home: '/',
    esgKpiEngine: '/finance-esg/esg-kpi-engine/',
    contactSales: '/contact-sales/',
    bankingSection: '/banking/',
    insuranceSection: '/insurance/',
    financeEsgSection: '/finance-esg/',
  };
  static bankingSection: any;
  static insuranceSection: any;
  static financeEsgSection: any;

  static getUrl(route: keyof typeof UrlFactory.routes, env: Environment = 'production'): string {
    return `${baseUrls[env]}${UrlFactory.routes[route]}`;
  }
}

export { UrlFactory };

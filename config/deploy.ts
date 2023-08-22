import { type ConfigType } from 'PackageNameByCore';

const conf: Partial<ConfigType<'swc'>> = {
  devtool: false,
  bar: false,
  seo: {
    domain: '这里修改成你部署文档的域名',
    nojekyll: true,
  },
  routeBaseName: '/libraryNameTemplate',
  publicPath: '/libraryNameTemplate/',
  bundleAnalyzer: false,
  fixBrowserRouter: {
    pathSegmentsToKeep: 1,
    path: '404.html',
  },
};

export default conf;

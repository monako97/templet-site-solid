import { type ConfigType, PACKAGENAME } from 'PackageNameByCore';

const conf: Partial<ConfigType> = {
  devtool: false,
  bar: false,
  seo: {
    domain: '这里修改成你部署文档的域名',
    jekyll: false,
  },
  basename: `/${PACKAGENAME}`,
  publicPath: `/${PACKAGENAME}/`,
  bundleAnalyzer: false,
  fixBrowserRouter: {
    pathSegmentsToKeep: 1,
    path: '404.html',
  },
};

export default conf;

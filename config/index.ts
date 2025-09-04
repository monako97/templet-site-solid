import type { ConfigType } from 'PackageNameByCore';

const conf: Partial<ConfigType> = {
  proxy: {
    '/api/': {
      target: 'http://localhost:8007/',
      changeOrigin: true,
      pathRewrite: { '^/api/': '/' },
      secure: false,
    },
  }
};

export default conf;

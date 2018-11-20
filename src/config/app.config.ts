const env: any = process.env;

const appConfig = {
  name: '后台管理系统',
  version: 'V1.0.0',
  // 网络响应超时时间
  timeout: 30000,
  debug: env.ENV === 'dev',
};

export default appConfig;

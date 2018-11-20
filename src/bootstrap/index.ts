import baseInit from './base.init';
import pluginInit from './plugin.init';
export default async function() {
  // 基础初始化
  await baseInit();
  // 插件初始化
  await pluginInit();
}

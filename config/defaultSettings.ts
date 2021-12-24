/*
 * @Author: wangxuepeng@hsuanyuen.com
 * @Date: 2021-10-09 11:33:47
 * @Last Modified by:   wangxuepeng@hsuanyuen.com
 * @Last Modified time: 2021-10-09 11:33:47
 */

import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'react+ts',
  pwa: false,
  logo: '/logo.png',
  iconfontUrl: '',
  menu: { defaultOpenAll: true },
};

export default Settings;

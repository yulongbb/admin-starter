import { NbMenuItem } from '@nebular/theme';

export const ADMIN_MENU_ITEMS: NbMenuItem[] = [
  {
    title: '概览',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: '子模块',
    group: true,
  },
  {
    title: '示例模块一',
    icon: 'nb-locked',
    children: [
      {
        title: '示例功能一',
        link: '/pages/example',
      },
    ],
  },
  {
    title: '认证和授权',
    group: true,
  },
  {
    title: '认证和授权',
    icon: 'nb-locked',
    children: [
      {
        title: '用户',
        link: '/pages/auth/user',
      },
      {
        title: '角色',
        link: '/pages/auth/role',
      },
    ],
  },
  {
    title: '开发资源文档',
    group: true,
  },
  {
    title: 'angular',
    url: 'https://angular.cn/',
    target: '_blank',
  },
  {
    title: 'ngx-admin',
    url: 'https://akveo.github.io/nebular/docs/components/components-overview',
    target: '_blank',
  },
];

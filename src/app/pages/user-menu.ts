import { NbMenuItem } from '@nebular/theme';

export const USER_MENU_ITEMS: NbMenuItem[] = [
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
  }
];

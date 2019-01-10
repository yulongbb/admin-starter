import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
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
    title: '模块一',
    icon: 'nb-locked',
    children: [
      {
        title: '功能1',
        link: '/pages/dashboard',
      },
    ],
  },
];

import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Companies',
    icon: 'command',
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Menu Item 1',
            link: '/menu-item-1',
          },
          {
            label: 'Menu Item 2',
            link: '/menu-item-2',
          }
        ]
      }
    ]
  },
  {
    label: 'Representative',
    icon: 'users',
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'Menu Item 1',
            link: '/menu-item-1',
          },
          {
            label: 'Menu Item 2',
            link: '/menu-item-2',
          }
        ]
      }
    ]
  },
  {
    label: 'Portal User',
    icon: 'settings',
    link: '/menu-item-3'
  },
];

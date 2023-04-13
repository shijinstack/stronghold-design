import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Clients',
    icon: 'command',
    link: 'companies'
  },
  {
    label: 'Representative',
    icon: 'users',
    link: 'representative'
  },
  {
    label: 'Portal User',
    icon: 'settings',
    link: '/portal-users'
  },
  {
    label: 'Role Management',
    icon: 'user-check',
  },
];

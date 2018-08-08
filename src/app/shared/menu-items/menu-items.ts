import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: '',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'ড্যাশবোর্ড',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'student',
        short_label: 'S',
        name: 'ছাত্র',
        type: 'link',
        icon: 'ti-id-badge'
      },
      {
        state: 'employee',
        short_label: 'E',
        name: 'কর্মকর্তা/কর্মচারী',
        type: 'link',
        icon: 'ti-user'
      },
      {
        state: 'store',
        short_label: 'S',
        name: 'হল স্টোর',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      },
      {
        state: 'accounting',
        short_label: 'A',
        name: 'হিসাবনিকাশ',
        type: 'link',
        icon: 'ti-money'
      },
      {
        state: 'room',
        short_label: 'R',
        name: 'আবাসিক কক্ষ',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
      {
        state: 'notifications',
        short_label: 'n',
        name: 'নটিফিকেশন',
        type: 'link',
        icon: 'ti-bell'
      },
    ],
  }
  // {
  //   state: 'basic',
  //   short_label: 'B',
  //   name: 'Basic Components',
  //   type: 'sub',
  //   icon: 'ti-layout-grid2-alt',
  //   children: [
  //     {
  //       state: 'button',
  //       name: 'Button'
  //     },
  //     {
  //       state: 'typography',
  //       name: 'Typography'
  //     }
  //   ]
  // },
  // {
  //   label: 'Tables',
  //   main: [
  //     {
  //       state: 'bootstrap-table',
  //       short_label: 'B',
  //       name: 'Bootstrap Table',
  //       type: 'link',
  //       icon: 'ti-receipt'
  //     }
  //   ]
  // },
  // {
  //   label: 'Map And Extra Pages ',
  //   main: [
  //     {
  //       state: 'map',
  //       short_label: 'M',
  //       name: 'Maps',
  //       type: 'link',
  //       icon: 'ti-map-alt'
  //     },
  //     {
  //       state: 'authentication',
  //       short_label: 'A',
  //       name: 'Authentication',
  //       type: 'sub',
  //       icon: 'ti-id-badge',
  //       children: [
  //         {
  //           state: 'login',
  //           type: 'link',
  //           name: 'Login',
  //           target: true
  //         }, {
  //           state: 'registration',
  //           type: 'link',
  //           name: 'Registration',
  //           target: true
  //         }
  //       ]
  //     },
  //     {
  //       state: 'error',
  //       external: 'http://lite.codedthemes.com/guru-able/error.html',
  //       name: 'Error',
  //       type: 'external',
  //       icon: 'ti-layout-list-post',
  //       target: true
  //     },
  //     {
  //       state: 'user',
  //       short_label: 'U',
  //       name: 'User Profile',
  //       type: 'link',
  //       icon: 'ti-user'
  //     }
  //   ]
  // },
  // {
  //   label: 'Other',
  //   main: [
  //     {
  //       state: '',
  //       short_label: 'M',
  //       name: 'Menu Levels',
  //       type: 'sub',
  //       icon: 'ti-direction-alt',
  //       children: [
  //         {
  //           state: '',
  //           name: 'Menu Level 2.1',
  //           target: true
  //         }, {
  //           state: '',
  //           name: 'Menu Level 2.2',
  //           type: 'sub',
  //           children: [
  //             {
  //               state: '',
  //               name: 'Menu Level 2.2.1',
  //               target: true
  //             },
  //             {
  //               state: '',
  //               name: 'Menu Level 2.2.2',
  //               target: true
  //             }
  //           ]
  //         }, {
  //           state: '',
  //           name: 'Menu Level 2.3',
  //           target: true
  //         }, {
  //           state: '',
  //           name: 'Menu Level 2.4',
  //           type: 'sub',
  //           children: [
  //             {
  //               state: '',
  //               name: 'Menu Level 2.4.1',
  //               target: true
  //             },
  //             {
  //               state: '',
  //               name: 'Menu Level 2.4.2',
  //               target: true
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       state: 'simple-page',
  //       short_label: 'S',
  //       name: 'Simple Page',
  //       type: 'link',
  //       icon: 'ti-layout-sidebar-left'
  //     }
  //   ]
  // }, {
  //   label: 'Support',
  //   main: [
  //     {
  //       state: 'Upgrade To Pro',
  //       short_label: 'U',
  //       external: 'https://codedthemes.com/item/guru-able-admin-template/',
  //       name: 'Upgrade To Pro',
  //       type: 'external',
  //       icon: 'ti-layout-list-post',
  //       target: true
  //     }
  //   ]
  // }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}

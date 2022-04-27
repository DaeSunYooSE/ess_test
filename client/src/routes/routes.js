export const dashboardRoutes = {
  label: 'Dashboard',
  labelDisable: true,
  children: [
    {
      name: 'Dashboard',
      active: true,
      icon: 'chart-pie',
      children: [
        {
          name: 'Default',
          href: '/',
          exact: true,
          active: true
        },
        {
          name: 'Analytics',
          href: '/dashboard/analytics',
          active: true
        },
        {
          name: 'CRM',
          href: '/dashboard/crm',
          active: true
        },
        {
          name: 'E Commerce',
          href: '/dashboard/e-commerce',
          active: true
        },
        {
          name: 'Management',
          href: '/dashboard/project-management',
          active: true
        },
        {
          name: 'SaaS',
          href: '/dashboard/saas',
          active: true
        }
      ]
    }
  ]
};
export const appRoutes = {
  label: 'app',
  children: [
    {
      name: 'Calendar',
      icon: 'calendar-alt',
      href: '/app/calendar',
      active: true
    },
    {
      name: 'Chat',
      icon: 'comments',
      href: '/app/chat',
      active: true
    },
    {
      name: 'Email',
      icon: 'envelope-open',
      active: true,
      children: [
        {
          name: 'Inbox',
          href: '/email/inbox',
          active: true
        },
        {
          name: 'Email detail',
          href: '/email/email-detail',
          active: true
        },
        {
          name: 'Compose',
          href: '/email/compose',
          active: true
        }
      ]
    },
    {
      name: 'Events',
      icon: 'calendar-day',
      active: true,
      children: [
        {
          name: 'Create an event',
          href: '/events/create-an-event',
          active: true
        },
        {
          name: 'Event detail',
          href: '/events/event-detail',
          active: true
        },
        {
          name: 'Event list',
          href: '/events/event-list',
          active: true
        }
      ]
    },
    {
      name: 'E Commerce',
      icon: 'shopping-cart',
      active: true,
      children: [
        {
          name: 'Product',
          active: true,
          children: [
            {
              name: 'Product list',
              href: '/e-commerce/product/product-list',
              active: true
            },
            {
              name: 'Product grid',
              href: '/e-commerce/product/product-grid',
              active: true
            },
            {
              name: 'Product details',
              href: '/e-commerce/product/product-details',
              active: true
            }
          ]
        },
        {
          name: 'Orders',
          active: true,
          children: [
            {
              name: 'Order list',
              href: '/e-commerce/orders/order-list',
              active: true
            },
            {
              name: 'Order details',
              href: '/e-commerce/orders/order-details',
              active: true
            }
          ]
        },
        {
          name: 'Customers',
          href: '/e-commerce/customers',
          active: true
        },
        {
          name: 'Customer details',
          href: '/e-commerce/customer-details',
          active: true
        },
        {
          name: 'Shopping cart',
          href: '/e-commerce/shopping-cart',
          active: true
        },
        {
          name: 'Checkout',
          href: '/e-commerce/checkout',
          active: true
        },
        {
          name: 'Billing',
          href: '/e-commerce/billing',
          active: true
        },
        {
          name: 'Invoice',
          href: '/e-commerce/invoice',
          active: true
        }
      ]
    },
    {
      name: 'Kanban',
      icon: ['fab', 'trello'],
      href: '/app/kanban',
      active: true
    },
    {
      name: 'Social',
      icon: 'share-alt',
      active: true,
      children: [
        {
          name: 'Feed',
          href: '/social/feed',
          active: true
        },
        {
          name: 'Activity log',
          href: '/social/activity-log',
          active: true
        },
        {
          name: 'Notifications',
          href: '/social/notifications',
          active: true
        },
        {
          name: 'Followers',
          href: '/social/followers',
          active: true
        }
      ]
    }
  ]
};

export const pagesRoutes = {
  label: 'pages',
  children: [
    {
      name: 'Starter',
      icon: 'flag',
      href: '/pages/starter',
      active: true
    },
    {
      name: 'Landing',
      icon: 'globe',
      href: '/landing',
      active: true
    },
    {
      name: 'Authentication',
      icon: 'lock',
      active: true,
      children: [
        {
          name: 'Simple',
          active: true,
          children: [
            {
              name: 'Login',
              href: '/authentication/simple/login',
              active: true
            },
            {
              name: 'Logout',
              href: '/authentication/simple/logout',
              active: true
            },
            {
              name: 'Register',
              href: '/authentication/simple/register',
              active: true
            },
            {
              name: 'Forgot password',
              href: '/authentication/simple/forgot-password',
              active: true
            },
            {
              name: 'Confirm mail',
              href: '/authentication/simple/confirm-mail',
              active: true
            },
            {
              name: 'Reset password',
              href: '/authentication/simple/reset-password',
              active: true
            },
            {
              name: 'Lock screen',
              href: '/authentication/simple/lock-screen',
              active: true
            }
          ]
        },
        {
          name: 'Card',
          active: true,
          children: [
            {
              name: 'Login',
              href: '/authentication/card/login',
              active: true
            },
            {
              name: 'Logout',
              href: '/authentication/card/logout',
              active: true
            },
            {
              name: 'Register',
              href: '/authentication/card/register',
              active: true
            },
            {
              name: 'Forgot password',
              href: '/authentication/card/forgot-password',
              active: true
            },
            {
              name: 'Confirm mail',
              href: '/authentication/card/confirm-mail',
              active: true
            },
            {
              name: 'Reset password',
              href: '/authentication/card/reset-password',
              active: true
            },
            {
              name: 'Lock screen',
              href: '/authentication/card/lock-screen',
              active: true
            }
          ]
        },
        {
          name: 'Split',

          active: true,
          children: [
            {
              name: 'Login',
              href: '/authentication/split/login',
              active: true
            },
            {
              name: 'Logout',
              href: '/authentication/split/logout',
              active: true
            },
            {
              name: 'Register',
              href: '/authentication/split/register',
              active: true
            },
            {
              name: 'Forgot password',
              href: '/authentication/split/forgot-password',
              active: true
            },
            {
              name: 'Confirm mail',
              href: '/authentication/split/confirm-mail',
              active: true
            },
            {
              name: 'Reset password',
              href: '/authentication/split/reset-password',
              active: true
            },
            {
              name: 'Lock screen',
              href: '/authentication/split/lock-screen',
              active: true
            }
          ]
        },
        {
          name: 'Wizard',
          href: '/authentication/wizard',
          active: true
        },
        {
          name: 'Modal',
          href: '/authentication-modal',
          active: true
        }
      ]
    },
    {
      name: 'User',
      icon: 'user',
      active: true,
      children: [
        {
          name: 'Profile',
          href: '/user/profile',
          active: true
        },
        {
          name: 'Settings',
          href: '/user/settings',
          active: true
        }
      ]
    },
    {
      name: 'Pricing',
      icon: 'tags',
      active: true,
      children: [
        {
          name: 'Pricing default',
          href: '/pricing/pricing-default',
          active: true
        },
        {
          name: 'Pricing alt',
          href: '/pricing/pricing-alt',
          active: true
        }
      ]
    },
    {
      name: 'Faq',
      icon: 'question-circle',
      active: true,
      children: [
        {
          name: 'Faq basic',
          href: '/faq/faq-basic',
          active: true
        },
        {
          name: 'Faq alt',
          href: '/faq/faq-alt',
          active: true
        },
        {
          name: 'Faq accordion',
          href: '/faq/faq-accordion',
          active: true
        }
      ]
    },
    {
      name: 'Errors',
      active: true,
      icon: 'exclamation-triangle',
      children: [
        {
          name: '404',
          href: '/errors/404',
          active: true
        },
        {
          name: '500',
          href: '/errors/500',
          active: true
        }
      ]
    },
    {
      name: 'Miscellaneous',
      icon: 'thumbtack',
      active: true,
      children: [
        {
          name: 'Associations',
          href: '/miscellaneous/associations',
          active: true
        },
        {
          name: 'Invite people',
          href: '/miscellaneous/invite-people',
          active: true
        },
        {
          name: 'Privacy policy',
          href: '/miscellaneous/privacy-policy',
          active: true
        }
      ]
    }
  ]
};

export const modulesRoutes = {
  label: 'Modules',
  children: [
    {
      name: 'Forms',
      active: true,
      icon: 'file-alt',
      children: [
        {
          name: 'Basic',
          active: true,
          children: [
            {
              name: 'Form control',
              href: '/forms/basic/form-control',
              active: true
            },
            {
              name: 'Input group',
              href: '/forms/basic/input-group',
              active: true
            },
            {
              name: 'Select',
              href: '/forms/basic/select',
              active: true
            },
            {
              name: 'Checks',
              href: '/forms/basic/checks',
              active: true
            },
            {
              name: 'Range',
              href: '/forms/basic/range',
              active: true
            },
            {
              name: 'Layout',
              href: '/forms/basic/layout',
              active: true
            }
          ]
        },
        {
          name: 'Advance',
          active: true,
          children: [
            {
              name: 'Advance select',
              href: '/forms/advance/advance-select',
              active: true
            },
            {
              name: 'Date picker',
              href: '/forms/advance/date-picker',
              active: true
            },
            {
              name: 'Editor',
              href: '/forms/advance/editor',
              active: true
            },
            {
              name: 'Emoji button',
              href: '/forms/advance/emoji-button',
              active: true
            },
            {
              name: 'File uploader',
              href: '/forms/advance/file-uploader',
              active: true
            },
            {
              name: 'Rating',
              href: '/forms/advance/rating',
              active: true
            }
          ]
        },
        {
          name: 'Floating labels',
          href: '/forms/floating-labels',
          active: true
        },
        {
          name: 'Wizard',
          href: '/forms/wizard',
          active: true
        },
        {
          name: 'Validation',
          href: '/forms/validation',
          active: true
        }
      ]
    },
    {
      name: 'Tables',
      icon: 'table',
      active: true,
      children: [
        {
          name: 'Basic tables',
          href: '/tables/basic-tables',
          active: true
        },
        {
          name: 'Advance tables',
          href: '/tables/advance-tables',
          active: true
        }
      ]
    },
    {
      name: 'Charts',
      icon: 'chart-line',
      active: true,
      children: [
        {
          name: 'Chartjs',
          href: '/charts/chartjs',
          active: true
        },
        {
          name: 'ECharts',
          active: true,
          children: [
            {
              name: 'How to use',
              href: '/charts/echarts/how-to-use',
              active: true
            },
            {
              name: 'Line charts',
              href: '/charts/echarts/line-charts',
              active: true
            },
            {
              name: 'Bar charts',
              href: '/charts/echarts/bar-charts',
              active: true
            },
            {
              name: 'Candlestick charts',
              href: '/charts/echarts/candlestick-charts',
              active: true
            },
            {
              name: 'Geo map',
              href: '/charts/echarts/geo-map',
              active: true
            },
            {
              name: 'Scatter charts',
              href: '/charts/echarts/scatter-charts',
              active: true
            },
            {
              name: 'Pie charts',
              href: '/charts/echarts/pie-charts',
              active: true
            },
            {
              name: 'Radar charts',
              href: '/charts/echarts/radar-charts',
              active: true
            },
            {
              name: 'Heatmap charts',
              href: '/charts/echarts/heatmap-charts',
              active: true
            }
          ]
        }
      ]
    },
    {
      name: 'Icons',
      active: true,
      icon: 'shapes',
      children: [
        {
          name: 'Font awesome',
          href: '/icons/font-awesome',
          active: true
        },
        {
          name: 'React icons',
          href: '/icons/react-icons',
          active: true
        }
      ]
    },
    {
      name: 'Maps',
      icon: 'map',
      active: true,
      children: [
        {
          name: 'Google map',
          href: '/maps/google-map',
          active: true
        },
        {
          name: 'Leaflet map',
          href: '/maps/leaflet-map',
          active: true
        }
      ]
    },
    {
      name: 'Components',
      active: true,
      icon: 'puzzle-piece',
      children: [
        {
          name: 'Alerts',
          href: '/components/alerts',
          active: true
        },
        {
          name: 'Accordion',
          href: '/components/accordion',
          active: true
        },
        {
          name: 'Animated icons',
          href: '/components/animated-icons',
          active: true
        },
        {
          name: 'Background',
          href: '/components/background',
          active: true
        },
        {
          name: 'Badges',
          href: '/components/badges',
          active: true
        },
        {
          name: 'Breadcrumbs',
          href: '/components/breadcrumb',
          active: true
        },
        {
          name: 'Buttons',
          href: '/components/buttons',
          active: true
        },
        {
          name: 'Calendar',
          href: '/components/calendar',
          active: true
        },
        {
          name: 'Cards',
          href: '/components/cards',
          active: true
        },
        {
          name: 'Carousel',
          active: true,
          children: [
            {
              name: 'Bootstrap',
              href: '/components/carousel/bootstrap',
              label: 'bootstrap-carousel',
              active: true
            },
            {
              name: 'Slick',
              href: '/components/carousel/slick',
              active: true
            }
          ]
        },
        {
          name: 'Collapse',
          href: '/components/collapse',
          active: true
        },
        {
          name: 'Cookie notice',
          href: '/components/cookie-notice',
          active: true
        },
        {
          name: 'Countup',
          href: '/components/countup',
          active: true
        },
        {
          name: 'Draggable',
          href: '/components/draggable',
          active: true
        },
        {
          name: 'Dropdowns',
          href: '/components/dropdowns',
          active: true
        },
        {
          name: 'List group',
          href: '/components/list-group',
          active: true
        },
        {
          name: 'Modals',
          href: '/components/modals',
          active: true
        },
        {
          name: 'Offcanvas',
          href: '/components/offcanvas',
          active: true
        },
        {
          name: 'Navs & Tabs',
          active: true,
          children: [
            {
              name: 'Navs',
              href: '/components/navs-and-tabs/navs',
              active: true
            },
            {
              name: 'Navbar',
              href: '/components/navs-and-tabs/navbar',
              active: true
            },
            {
              name: 'Vertical navbar',
              href: '/components/navs-and-tabs/vertical-navbar',
              active: true
            },
            {
              name: 'Top navbar',
              href: '/components/navs-and-tabs/top-navbar',
              active: true
            },
            {
              name: 'Combo navbar',
              href: '/components/navs-and-tabs/combo-navbar',
              active: true
            },
            {
              name: 'Tabs',
              href: '/components/navs-and-tabs/tabs',
              active: true
            }
          ]
        },
        {
          name: 'Pictures',
          active: true,
          children: [
            {
              name: 'Avatar',
              href: '/components/pictures/avatar',
              active: true
            },
            {
              name: 'Images',
              href: '/components/pictures/images',
              active: true
            },
            {
              name: 'Figures',
              href: '/components/pictures/figures',
              active: true
            },
            {
              name: 'Hoverbox',
              href: '/components/pictures/hoverbox',
              active: true
            },
            {
              name: 'Lightbox',
              href: '/components/pictures/lightbox',
              active: true
            }
          ]
        },
        {
          name: 'Progress Bar',
          href: '/components/progress-bar',
          active: true
        },
        {
          name: 'Pagination',
          href: '/components/pagination',
          active: true
        },
        {
          name: 'Placeholder',
          href: '/components/placeholder',
          active: true
        },
        {
          name: 'Popovers',
          href: '/components/popovers',
          active: true
        },
        {
          name: 'Scrollspy',
          href: '/components/scrollspy',
          active: true
        },
        {
          name: 'Search',
          href: '/components/search',
          active: true
        },
        {
          name: 'Spinners',
          href: '/components/spinners',
          active: true
        },
        {
          name: 'Timeline',
          href: '/components/timeline',
          active: true,
          badge: {
            type: 'success',
            text: 'New'
          }
        },
        {
          name: 'Toasts',
          href: '/components/toasts',
          active: true
        },
        {
          name: 'Tooltips',
          href: '/components/tooltips',
          active: true
        },
        {
          name: 'Treeview',
          href: '/components/treeview',
          active: true
        },
        {
          name: 'Typed text',
          href: '/components/typed-text',
          active: true
        },
        {
          name: 'Videos',
          active: true,
          children: [
            {
              name: 'Embed',
              href: '/components/videos/embed',
              active: true
            },
            {
              name: 'React Player',
              href: '/components/videos/react-player',
              active: true
            }
          ]
        }
      ]
    },
    {
      name: 'Utilities',
      active: true,
      icon: 'fire',
      children: [
        {
          name: 'Borders',
          href: '/utilities/borders',
          active: true
        },
        {
          name: 'Colors',
          href: '/utilities/colors',
          active: true
        },
        {
          name: 'Colored links',
          href: '/utilities/colored-links',
          active: true
        },
        {
          name: 'Display',
          href: '/utilities/display',
          active: true
        },
        {
          name: 'Flex',
          href: '/utilities/flex',
          active: true
        },
        {
          name: 'Float',
          href: '/utilities/float',
          active: true
        },
        {
          name: 'Grid',
          href: '/utilities/grid',
          active: true
        },
        {
          name: 'Scroll Bar',
          href: '/utilities/scroll-bar',
          active: true
        },
        {
          name: 'Position',
          href: '/utilities/position',
          active: true
        },
        {
          name: 'Spacing',
          href: '/utilities/spacing',
          active: true
        },
        {
          name: 'Sizing',
          href: '/utilities/sizing',
          active: true
        },
        {
          name: 'Stretched link',
          href: '/utilities/stretched-link',
          active: true
        },
        {
          name: 'Text truncation',
          href: '/utilities/text-truncation',
          active: true
        },
        {
          name: 'Typography',
          href: '/utilities/typography',
          active: true
        },
        {
          name: 'Vertical align',
          href: '/utilities/vertical-align',
          active: true
        },
        {
          name: 'Visibility',
          href: '/utilities/visibility',
          active: true
        }
      ]
    },
    {
      name: 'Widgets',
      icon: 'poll',
      href: '/widgets',
      active: true
    },
    {
      name: 'Multi level',
      active: true,
      icon: 'layer-group',
      children: [
        {
          name: 'Level two',
          active: true,
          children: [
            {
              name: 'Item 1',
              active: true,
              href: '#!'
            },
            {
              name: 'Item 2',
              active: true,
              href: '#!'
            }
          ]
        },
        {
          name: 'Level three',
          active: true,
          children: [
            {
              name: 'Item 3',
              active: true,
              href: '#!'
            },
            {
              name: 'Item 4',
              active: true,
              children: [
                {
                  name: 'Item 5',
                  active: true,
                  href: '#!'
                },
                {
                  name: 'Item 6',
                  active: true,
                  href: '#!'
                }
              ]
            }
          ]
        },
        {
          name: 'Level four',
          active: true,
          children: [
            {
              name: 'Item 6',
              active: true,
              href: '#!'
            },
            {
              name: 'Item 7',
              active: true,
              children: [
                {
                  name: 'Item 8',
                  active: true,
                  href: '#!'
                },
                {
                  name: 'Item 9',
                  active: true,
                  children: [
                    {
                      name: 'Item 10',
                      active: true,
                      href: '#!'
                    },
                    {
                      name: 'Item 11',
                      active: true,
                      href: '#!'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const documentationRoutes = {
  label: 'documentation',
  children: [
    {
      name: 'Getting started',
      icon: 'rocket',
      href: '/documentation/getting-started',
      active: true
    },
    {
      name: 'Customization',
      active: true,
      icon: 'wrench',
      children: [
        {
          name: 'Configuration',
          href: '/documentation/configuration',
          active: true
        },
        {
          name: 'Styling',
          href: '/documentation/styling',
          active: true
        },
        {
          name: 'Dark mode',
          href: '/documentation/dark-mode',
          active: true
        },
        {
          name: 'Plugin',
          href: '/documentation/plugin',
          active: true
        }
      ]
    },
    {
      name: 'Faq',
      icon: 'question-circle',
      href: '/documentation/faq',
      active: true
    },
    {
      name: 'Design file',
      icon: 'palette',
      href: '/documentation/design-file',
      active: true
    },
    {
      name: 'Changelog',
      icon: 'code-branch',
      href: '/changelog',
      active: true
    }
  ]
};

export default [
  dashboardRoutes,
  appRoutes,
  pagesRoutes,
  modulesRoutes,
  documentationRoutes
];

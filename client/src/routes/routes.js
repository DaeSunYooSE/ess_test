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
          name: 'Index',
          href: '/dashboard',
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
    }
  ]
};

export default [
  dashboardRoutes,
  appRoutes
  // pagesRoutes,
  // modulesRoutes,
  // documentationRoutes
];

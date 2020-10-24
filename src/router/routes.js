
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Register', component: () => import('pages/Register.vue') },
      { path: 'Login', component: () => import('pages/Login.vue') },
      { path: 'Recovery', component: () => import('pages/Recovery.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'Home', component: () => import('pages/Home.vue') },
      { path: 'Shop', component: () => import('pages/Shop.vue') },
      { path: 'Cart', component: () => import('pages/Cart.vue') },
      { path: 'Profile', component: () => import('pages/Profile.vue') },
      { path: 'Contact', component: () => import('pages/Contact.vue') }
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

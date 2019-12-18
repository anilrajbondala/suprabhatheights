
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'home', component: () => import('pages/Index.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
      { path: 'contact', component: () => import('pages/Contact.vue') },
      { path: 'gallery', component: () => import('pages/Gallery.vue') },
      { path: 'documents', component: () => import('pages/Documents.vue') },
      { path: 'location', component: () => import('pages/Location.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

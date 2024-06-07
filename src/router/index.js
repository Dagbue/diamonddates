import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "faq" */ '../views/FaqView.vue')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import(/* webpackChunkName: "testimonials" */ '../views/TestimonialsView.vue')
  },
  {
    path: '/eliteDating',
    name: 'eliteDating',
    component: () => import(/* webpackChunkName: "eliteDating" */ '../views/EliteDatingView.vue')
  },
  {
    path: '/findAKeptWoman',
    name: 'findAKeptWoman',
    component: () => import(/* webpackChunkName: "findAKeptWoman" */ '../views/FindAKeptWomanView.vue')
  },
  {
    path: '/travelOrganization',
    name: 'travelOrganization',
    component: () => import(/* webpackChunkName: "travelOrganization" */ '../views/TravelOrganizationView.vue')
  },
  {
    path: '/relationships',
    name: 'relationships',
    component: () => import(/* webpackChunkName: "relationships" */ '../views/RelationshipsView.vue')
  },
  {
    path: '/becomekeptWomanView',
    name: 'becomekeptWomanView',
    component: () => import(/* webpackChunkName: "becomekeptWomanView" */ '../views/BecomekeptWomanView.vue')
  },
  {
    path: '/requestView',
    name: 'requestView',
    component: () => import(/* webpackChunkName: "requestView" */ '../views/RequestView.vue')
  },


  {
    path: '/admin',
    name: 'dashBoardAdminLogin',
    component: () => import(/* webpackChunkName: "dashBoardAdminLogin" */ '../views/Admin/DashBoardAdminLogin.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/dashBoard-side-bar-admin',
    name: 'dashBoardSideBarAdmin',
    component: () => import(/* webpackChunkName: "dashBoardSideBarAdmin" */ '../views/Admin/DashBoardSideBarAdmin.vue'),
    meta: { hideNavigation: true },
    redirect: { name: 'listOfUsers' },
    children: [
      {
        path: "/list-of-users",
        name: "listOfUsers",
        component: () =>
            import(/* webpackChunkName: "listOfUsers" */ "../views/Admin/ListOfUsers.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/list-of-messages",
        name: "listOfMessages",
        component: () =>
            import(/* webpackChunkName: "listOfMessages" */ "../views/Admin/ListOfMessages.vue"),
        meta: { hideNavigation: true }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

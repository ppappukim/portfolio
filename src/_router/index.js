import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const baseRoutes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: "/home",
    component: () => import("@/_routes/Home")
  },
]

const routes = baseRoutes

// _router에 하위폴더를 만들면 밑에 코드가 필요함.
// import tabsRoutes from '@/_routes/tabs/_router'
// import settingsRoutes from '@/_routes/settings/_router'
// import newtestRoutes from '@/_routes/newtest/_router'
// const routes = baseRoutes.concat(tabsRoutes)
//                          .concat(settingsRoutes)
//                          .concat(newtestRoutes)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Faq from '@/components/Faq';
import NewForm from '@/components/Form';
import Quote from '@/components/advance-comp-usage/Quote';
import Author from '@/components/advance-comp-usage/Author';
import New from '@/components/advance-comp-usage/New';
import Forms from '@/components/Forms/Forms';
// import MonsterGame from '@/compopent/Monster';
import WonderfulQuotes from '@/components/WonderfulQuotes/Quotes';
import VueResource from '@/components/VueResource/VueResource';
import RouterHome from '@/components/Routing/Home';
import User from '@/components/Routing/User';
import UserStart from '@/components/Routing/UserStart';
import UserDetail from '@/components/Routing/UserDetail';
import UserEdit from '@/components/Routing/UserEdit';
import Header from '@/components/Header/Header';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/faq', name: 'Faq', component: Faq },
    { path: '/form', name: 'Form', component: NewForm },
    { path: '/quote', name: 'Quote', component: Quote },
    { path: '/author', name: 'Author', component: Author },
    { path: '/new', name: 'New', component: New },
    // { path: '/monster-game', name: 'Monster Game', component: MonsterGame }, // see game-vue project
    { path: '/wonderful-quotes', name: 'Wonderful Quotes', component: WonderfulQuotes },
    { path: '/forms', name: 'Forms', component: Forms },
    { path: '/vue-resource', name: 'Vue Resource', component: VueResource },
    { path: '/home', name: 'RouterHome', component: RouterHome },
    { path: '/user',
      name: 'User',
      component: User,
      children: [
        { path: '', name: 'userStart', component: UserStart },
        { path: ':id', name: 'UserDetail', components: { default: UserDetail, 'header-bottom': Header }, beforeEnter: (to, from, next) => {
          console.log('inside route setup');
          next();
        } },
        { path: ':id/edit', name: 'UserEdit', components: { default: UserEdit, 'header-top': Header } }
      ]
    },
    { path: '/redirect-me', redirect: '/user' },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      console.log('to.savedPosition: ', savedPosition);
      return savedPosition;
    }
    if (to.hash) {
      console.log('to.hash: ', to.hash);
      return { selector: to.hash };
    }
    return {x: 0, y: 0};
  }
});

router.beforeEach((to, from, next) => {
  console.log('global beforEach');
  // next(next); // stay on this page
  next();
});

export default router;

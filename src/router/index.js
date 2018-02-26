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

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/form',
      name: 'Form',
      component: NewForm
    },
    {
      path: '/quote',
      name: 'Quote',
      component: Quote
    },
    {
      path: '/author',
      name: 'Author',
      component: Author
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    /* see game-vue project
    {
      path: '/monster-game',
      name: 'Monster Game',
      component: MonsterGame
    },
     */
    {
      path: '/wonderful-quotes',
      name: 'Wonderful Quotes',
      component: WonderfulQuotes
    },
    {
      path: '/forms',
      name: 'Forms',
      component: Forms
    }
  ]
});

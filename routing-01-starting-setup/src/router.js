import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from '@/pages/TeamsList';
import TeamsFooter from '@/components/teams/TeamsFooter';
import TeamMembers from '@/components/teams/TeamMembers';
import UsersList from '@/pages/UsersList';
import UsersFooter from '@/components/users/UsersFooter';
import NotFound from '@/pages/NotFound';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path : '/',
      redirect: '/teams',
    },
    {
      name: 'teams',
      path: '/teams',
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      alias: '/another-team-path',
      children: [
        {
          name: 'team-members',
          path: ':teamId(t[0-9])',
          //can have any custom key:values
          meta: {
            needsAuth: true
          },
          component: TeamMembers,
          props: true},
      ]
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from, next);
        next();
      }
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition)
    if(savedPosition){
      return savedPosition
    }
    return {
      left: 0,
      top: 0
    }
  }
});

router.beforeEach(function(to, from, next) {
  console.log('Global before each')
  console.log(to, from, next);
  next(true);
  //cancels everything
  // next(false);

  //moves to this route
  // next('/teams')

  // moves based on json param in next
  // if(to.name ==='team-members'){
  //   next()
  // }
  // else {
  //   next({ name: 'team-members', params: { teamId: 't2' } })
  // }
})


router.afterEach(function(to, from) {
  //good for sending analytics
  console.log('Global after each')
  console.log(to, from)
})

export default router;
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const requireAuth = (to, from, next) => {
  /* eslint-disable no-console */
  console.log("Router: to/from/next",to, from, next);
  if (!("token" in localStorage) || !localStorage.token) {
    next({
      path: "/login"
    });
  } else {
    next();
  }
};

export default new Router({
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
  routes: [
        {
            path: '/',
            component: () => import('../pages/AllVotesHistory.vue'),
            
        },
        {
          name: "terms",
            path: "/terms",
            meta: { layout: "default" },
            component: () => import("../pages/TermsAndConditions.vue"),
            
        },
        {
          name : "verify-email",
          path : "/verify-email",
          meta: { layout: "default" },
          component: () => import("../pages/VerifyToken.vue"),
        },
      {
          name: 'all-votes',
          path: '/voting/all-votes',
          meta: { layout: "default" },
          component: () => import('../pages/AllVotesHistory.vue'),
          
      },
      {
          name: 'new-voting',
          path: '/voting-management/new-voting',
          meta: { layout: "default" },
          component: () => import('../pages/NewVoting.vue'),
          beforeEnter: requireAuth
      },
      {
          name: 'new-voting-list',
          path: '/voting-list/create',
          meta: { layout: "default" },
          component: () => import('../pages/NewVoting.vue'),
          beforeEnter: requireAuth
      },
        {
            name: 'votings',
            path: '/voting',
            meta: { layout: "default" },
            component: () => import('../pages/VotingList.vue'),
            beforeEnter: requireAuth
        },
        {
            name: 'manage-voting',
            path: '/voting-management/manage-voting',
            meta: { layout: "default" },
            component: () => import('../pages/ManageVotings.vue'),
            beforeEnter: requireAuth
        },
        {
            name: 'manage-voter',
            path: '/voting-list-management/manage-voter',
            meta: { layout: "default" },
            component: () => import('../pages/ManageVoters.vue'),
            beforeEnter: requireAuth
        },
        {
            name: 'manage-voting-list',
            path: '/voting-list-management/manage-list',
            meta: { layout: "default" },
            component: () => import('../pages/ManageVotersLists.vue'),
            beforeEnter: requireAuth
        },
        {
            name: 'vote',
            path: '/voting/:id',
            meta: { layout: "default" },
            component: () => import('../pages/VotingHistory.vue'),
            
        },
        {
            name: 'voting-history',
            path: '/voting/history',
            meta: { layout: "default" },
            component: () => import('../pages/VotingHistory.vue'),
            
        },
        {
          path: "/login",
          name: "login",
          meta: { layout: "default" },
          component: () => import("../pages/Login.vue"),
          
        },
        {
          path: "/register",
          name: "register",
          meta: { layout: "default" },
          component: () => import("../pages/Register.vue"),
          
        },
        {
            path: "/signal",
            name: "signal",
            meta: { layout: "default" },
            component: () => import("../pages/Signal.vue"),
            
        },
        {
            path: "/vote-results/:id",
            name: "results",
            meta: { layout: "default" },
            component: () => import("../pages/VoteResults.vue"),
            
        }
    ]
});

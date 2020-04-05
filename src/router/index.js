import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const requireAuth = (to, from, next) => {
  if (!("token" in localStorage) || !localStorage.token) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else if (localStorage.role === "anonymous") {
    next({
      path: "/voting",
      query: { redirect: to.fullPath },
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
      path: "/",
      redirect: "/voting-management/manage-voting",
    },
    routes: [
        {
            path: '/',
            redirect: '/voting/history'
        },
        {
            name: 'new-voting',
            path: '/voting-management/new-voting',
            component: () => import('../pages/NewVoting.vue'),
            beforeEnter: requireAuth
        },
        {
            name: 'votings',
            path: '/voting',
            component: () => import('../pages/VotingList.vue'),
            beforeEnter: requireAuth
        },
        {
            name: 'manage-voting',
            path: '/voting-management/manage-voting',
            component: () => import('../pages/ManageVotings.vue'),
            beforeEnter: requireAuth
        },
        {
            name: 'manage-voter',
            path: '/voting-list-management/manage-voter',
            component: () => import('../pages/ManageVoters.vue'),
            beforeEnter: requireAuth
        },
        {
            name: 'manage-voting-list',
            path: '/voting-list-management/manage-list',
            component: () => import('../pages/ManageVotersLists.vue'),
            beforeEnter: requireAuth
        },
        {
            name: 'vote',
            path: '/voting/:id',
            component: () => import('../pages/VotingHistory.vue'),
        },
        {
            name: 'voting-history',
            path: '/voting/history',
            component: () => import('../pages/VotingHistory.vue'),
        },
        {
          path: "/login",
          name: "login",
          meta: { layout: "userpages" },
          component: () => import("../pages/Login.vue"),
        },
        {
          path: "/register",
          name: "register",
          meta: { layout: "userpages" },
          component: () => import("../pages/Register.vue"),
        },
    ]
});
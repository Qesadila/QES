import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5034e798 = () => interopDefault(import('../pages/after-login.vue' /* webpackChunkName: "pages/after-login" */))
const _01b6da33 = () => interopDefault(import('../pages/anonym/index.vue' /* webpackChunkName: "pages/anonym/index" */))
const _34aa8e44 = () => interopDefault(import('../pages/terms-and-conditions.vue' /* webpackChunkName: "pages/terms-and-conditions" */))
const _822816aa = () => interopDefault(import('../pages/voter/index.vue' /* webpackChunkName: "pages/voter/index" */))
const _5fe53bed = () => interopDefault(import('../pages/voting-form-manager/index.vue' /* webpackChunkName: "pages/voting-form-manager/index" */))
const _7a874572 = () => interopDefault(import('../pages/voting-list-manager/index.vue' /* webpackChunkName: "pages/voting-list-manager/index" */))
const _ba703fdc = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _8ff530ec = () => interopDefault(import('../pages/auth/register.vue' /* webpackChunkName: "pages/auth/register" */))
const _64606fa2 = () => interopDefault(import('../pages/auth/verify-email.vue' /* webpackChunkName: "pages/auth/verify-email" */))
const _323eb0b8 = () => interopDefault(import('../pages/auth/verify-resend.vue' /* webpackChunkName: "pages/auth/verify-resend" */))
const _5ccd3532 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _e665f9fc = () => interopDefault(import('../pages/voting-form-manager/form/create.vue' /* webpackChunkName: "pages/voting-form-manager/form/create" */))
const _78f838dc = () => interopDefault(import('../pages/voting-list-manager/form/create.vue' /* webpackChunkName: "pages/voting-list-manager/form/create" */))
const _abeb11b4 = () => interopDefault(import('../pages/voter/form/_id.vue' /* webpackChunkName: "pages/voter/form/_id" */))
const _f8700dec = () => interopDefault(import('../pages/voting-list-manager/form/_id.vue' /* webpackChunkName: "pages/voting-list-manager/form/_id" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/after-login",
    component: _5034e798,
    name: "after-login___en"
  }, {
    path: "/anonym",
    component: _01b6da33,
    name: "anonym___en"
  }, {
    path: "/terms-and-conditions",
    component: _34aa8e44,
    name: "terms-and-conditions___en"
  }, {
    path: "/voter",
    component: _822816aa,
    name: "voter___en"
  }, {
    path: "/voting-form-manager",
    component: _5fe53bed,
    name: "voting-form-manager___en"
  }, {
    path: "/voting-list-manager",
    component: _7a874572,
    name: "voting-list-manager___en"
  }, {
    path: "/auth/login",
    component: _ba703fdc,
    name: "auth-login___en"
  }, {
    path: "/auth/register",
    component: _8ff530ec,
    name: "auth-register___en"
  }, {
    path: "/auth/verify-email",
    component: _64606fa2,
    name: "auth-verify-email___en"
  }, {
    path: "/auth/verify-resend",
    component: _323eb0b8,
    name: "auth-verify-resend___en"
  }, {
    path: "/cs/",
    component: _5ccd3532,
    name: "index___cs"
  }, {
    path: "/cs/after-login",
    component: _5034e798,
    name: "after-login___cs"
  }, {
    path: "/cs/anonym",
    component: _01b6da33,
    name: "anonym___cs"
  }, {
    path: "/cs/terms-and-conditions",
    component: _34aa8e44,
    name: "terms-and-conditions___cs"
  }, {
    path: "/cs/voter",
    component: _822816aa,
    name: "voter___cs"
  }, {
    path: "/cs/voting-form-manager",
    component: _5fe53bed,
    name: "voting-form-manager___cs"
  }, {
    path: "/cs/voting-list-manager",
    component: _7a874572,
    name: "voting-list-manager___cs"
  }, {
    path: "/sk/",
    component: _5ccd3532,
    name: "index___sk"
  }, {
    path: "/sk/after-login",
    component: _5034e798,
    name: "after-login___sk"
  }, {
    path: "/sk/anonym",
    component: _01b6da33,
    name: "anonym___sk"
  }, {
    path: "/sk/terms-and-conditions",
    component: _34aa8e44,
    name: "terms-and-conditions___sk"
  }, {
    path: "/sk/voter",
    component: _822816aa,
    name: "voter___sk"
  }, {
    path: "/sk/voting-form-manager",
    component: _5fe53bed,
    name: "voting-form-manager___sk"
  }, {
    path: "/sk/voting-list-manager",
    component: _7a874572,
    name: "voting-list-manager___sk"
  }, {
    path: "/cs/auth/login",
    component: _ba703fdc,
    name: "auth-login___cs"
  }, {
    path: "/cs/auth/register",
    component: _8ff530ec,
    name: "auth-register___cs"
  }, {
    path: "/cs/auth/verify-email",
    component: _64606fa2,
    name: "auth-verify-email___cs"
  }, {
    path: "/cs/auth/verify-resend",
    component: _323eb0b8,
    name: "auth-verify-resend___cs"
  }, {
    path: "/sk/auth/login",
    component: _ba703fdc,
    name: "auth-login___sk"
  }, {
    path: "/sk/auth/register",
    component: _8ff530ec,
    name: "auth-register___sk"
  }, {
    path: "/sk/auth/verify-email",
    component: _64606fa2,
    name: "auth-verify-email___sk"
  }, {
    path: "/sk/auth/verify-resend",
    component: _323eb0b8,
    name: "auth-verify-resend___sk"
  }, {
    path: "/voting-form-manager/form/create",
    component: _e665f9fc,
    name: "voting-form-manager-form-create___en"
  }, {
    path: "/voting-list-manager/form/create",
    component: _78f838dc,
    name: "voting-list-manager-form-create___en"
  }, {
    path: "/cs/voting-form-manager/form/create",
    component: _e665f9fc,
    name: "voting-form-manager-form-create___cs"
  }, {
    path: "/cs/voting-list-manager/form/create",
    component: _78f838dc,
    name: "voting-list-manager-form-create___cs"
  }, {
    path: "/sk/voting-form-manager/form/create",
    component: _e665f9fc,
    name: "voting-form-manager-form-create___sk"
  }, {
    path: "/sk/voting-list-manager/form/create",
    component: _78f838dc,
    name: "voting-list-manager-form-create___sk"
  }, {
    path: "/cs/voter/form/:id?",
    component: _abeb11b4,
    name: "voter-form-id___cs"
  }, {
    path: "/cs/voting-list-manager/form/:id?",
    component: _f8700dec,
    name: "voting-list-manager-form-id___cs"
  }, {
    path: "/sk/voter/form/:id?",
    component: _abeb11b4,
    name: "voter-form-id___sk"
  }, {
    path: "/sk/voting-list-manager/form/:id?",
    component: _f8700dec,
    name: "voting-list-manager-form-id___sk"
  }, {
    path: "/voter/form/:id?",
    component: _abeb11b4,
    name: "voter-form-id___en"
  }, {
    path: "/voting-list-manager/form/:id?",
    component: _f8700dec,
    name: "voting-list-manager-form-id___en"
  }, {
    path: "/",
    component: _5ccd3532,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

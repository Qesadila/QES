import Cookie from 'js-cookie'

export default ({ $axios, store }) => {
  const JWT = Cookie.get('JWT')
  const JWTUser = Cookie.get('JWT_USER')

  if (JWT && JWTUser) {
    $axios.setHeader('Authorization', 'Bearer ' + JWT)
    store.commit('auth/setAuth', true)
    store.commit('auth/setAuthUser', JSON.parse(JWTUser))
  }

  return $axios
}

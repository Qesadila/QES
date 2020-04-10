export default function({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.auth.auth) {
    return redirect('/auth/login')
  }
}

export default function ({ $auth }) {
  if (!$auth.loggedIn) {
    return redirect('/login')
  } else if (!$auth.user.is_admin) {
    return redirect('/dashboard')
  }
}

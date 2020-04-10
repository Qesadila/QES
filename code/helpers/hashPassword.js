import shajs from 'sha.js'

export function hashPassword(password) {
  return shajs('sha256')
    .update(password)
    .digest('hex')
}

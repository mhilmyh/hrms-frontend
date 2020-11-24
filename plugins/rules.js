class Validator {
  static isRequired(name = '') {
    return (v) => !!v || `${name} is required`
  }
  static isEmailValid() {
    return (v) => /.+@.+\..+/.test(v) || 'email must be valid'
  }
  static isMinLen(name = '', len = 20) {
    return (v) =>
      v.length >= len || `${name} must have more than ${len} characters`
  }
  static isPhone() {
    return (v) =>
      /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/.test(v) || 'phone must be number'
  }
  static isMaxFileSize(s) {
    return (v) =>
      !v || v.size < 1000000 * s || `image size should be less than ${s} MB`
  }
}

class Rules {
  static email() {
    return [Validator.isRequired('email'), Validator.isEmailValid()]
  }
  static password() {
    return [Validator.isRequired('password'), Validator.isMinLen('password', 6)]
  }
  static firstName() {
    return [Validator.isRequired('first name')]
  }
  static midName() {
    return []
  }
  static lastName() {
    return []
  }
  static phone() {
    return [Validator.isRequired('phone'), Validator.isPhone()]
  }
  static gender() {
    return [Validator.isRequired('gender')]
  }
  static birthday() {
    return [Validator.isRequired('birthday')]
  }
  static country() {
    return [Validator.isRequired('country')]
  }
  static province() {
    return [Validator.isRequired('province')]
  }
  static city() {
    return [Validator.isRequired('city')]
  }
  static postalCode() {
    return [Validator.isRequired('postal code')]
  }
  static street() {
    return [Validator.isRequired('street')]
  }
  static adminSecret() {
    return [Validator.isRequired('admin secret')]
  }
  static officeName() {
    return [Validator.isRequired('office name')]
  }
  static officeId() {
    return [Validator.isRequired('office')]
  }
  static chairman() {
    return [Validator.isRequired('chairman')]
  }
  static imageAvatar() {
    return [Validator.isRequired('image'), Validator.isMaxFileSize(3)]
  }
}

export default function (_, inject) {
  inject('rules', Rules)
}

import moment from 'moment'
class Helper {
  static deepCopy(thing = {}) {
    if (typeof thing !== 'object' || thing === null) return thing

    let value, key
    const result = Array.isArray(thing) ? [] : {}

    for (key in thing) {
      value = thing[key]
      result[key] = Helper.deepCopy(value)
    }

    return result
  }

  static toCurrency(value = 0) {
    return new Intl.NumberFormat('id-ID', {
      currency: 'IDR',
      style: 'currency',
    }).format(isFinite(value) ? value : 0)
  }

  static formData(thing = {}) {
    const data = new FormData()

    let value, key
    for (key in thing) {
      value = thing[key]
      if (typeof value !== 'object') data.set(key, value)
      else console.log(`Skip ${key} because the type is ${typeof value}`)
    }

    return data
  }

  static errMsg(err = {}) {
    if (typeof err.response === 'object' && !!Object.keys(err.response).length)
      return !!err.response.data && !!Object.keys(err.response.data)
        ? err.response.data.message
        : err.response.message
    else if (!!err.message && typeof err.message === 'string')
      return err.message
    else return 'There was an error'
  }

  static showError(err, store) {
    store.dispatch('alert/show', {
      type: 'error',
      message: Helper.errMsg(err),
    })
  }

  static when(value) {
    return moment(value).fromNow()
  }
}

export default function (_, inject) {
  inject('helper', Helper)
}

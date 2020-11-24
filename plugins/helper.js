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
      else console.log(`Skip ${key} because the type is object`)
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

  static showSuccess(message, store) {
    store.dispatch('alert/show', {
      type: 'success',
      message,
    })
  }

  static when(value) {
    return moment(value).fromNow()
  }

  static verboseDate(value) {
    return moment(value).format('MMMM d, YYYY')
  }

  static defaultOffice() {
    return {
      id: '',
      name: '',
      opening_time: '',
      closing_time: '',
      building: '',
      is_branch: false,
      country: '',
      province: '',
      city: '',
      postal_code: '',
      street: '',
    }
  }

  static toOffice(item) {
    return {
      id: item.id,
      name: item.name,
      opening_time: String(item.opening_time).replace(/:00$/, ''),
      closing_time: String(item.closing_time).replace(/:00$/, ''),
      building: item.building,
      is_branch: item.is_branch,
      country: item.address.country,
      province: item.address.province,
      city: item.address.city,
      postal_code: item.address.postal_code,
      street: item.address.street,
    }
  }

  static defaultDepartment() {
    return {
      id: '',
      name: '',
      code: '',
      chairman_id: null,
      office_id: null,
    }
  }

  static toDepartment(item) {
    return {
      id: item.id,
      name: item.name,
      code: item.code,
      chairman_id: item.chairman_id,
      office_id: item.office_id,
    }
  }

  static initActivity() {
    return { desc: '', start_time: '', stop_time: '' }
  }
}

export default function (_, inject) {
  inject('helper', Helper)
}

class Formatter {
  toCurrency() {}
}

export default function (_, inject) {
  const formatter = new Formatter()
  inject('formatter', formatter)
}

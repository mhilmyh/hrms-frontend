class Transformer {
  deepCopy() {}
}

export default function (_, inject) {
  const transformer = new Transformer()
  inject('transformer', transformer)
}

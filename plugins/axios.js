export default function ({ $axios }) {
  $axios.onRequest((config) => {
    console.log('Axios config')
    console.log(config)
  })
  $axios.onResponse((response) => {
    console.log('Axios response')
    console.log(response)
  })
  $axios.onError((error) => {
    console.error('Axios error')
    console.error(error)
  })
  $axios.onRequestError((error) => {
    console.error('Axios request error')
    console.error(error)
  })
  $axios.onResponseError((error) => {
    console.error('Axios response error')
    console.error(error)
  })
}

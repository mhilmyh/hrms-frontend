export default function ({ $axios }) {
  $axios.onRequest((config) => {
    console.log('[plugin:axios] Axios config')
    console.log(config)
  })
  $axios.onResponse((response) => {
    console.log('[plugin:axios] Axios response')
    console.log(response)
  })
  $axios.onRequestError((error) => {
    console.log('[plugin:axios] Axios request error')
    console.error(error)
  })
  $axios.onResponseError((error) => {
    console.log('[plugin:axios] Axios response error')
    console.error(error)
  })
}

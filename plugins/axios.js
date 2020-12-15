export default function ({ $axios }) {
  $axios.onRequest((_conf) => {
    // console.log('[plugin:axios] Axios config')
  })
  $axios.onResponse((_res) => {
    // console.log('[plugin:axios] Axios response')
  })
  $axios.onRequestError((_err) => {
    // console.log('[plugin:axios] Axios request error')
  })
  $axios.onResponseError((_err) => {
    // console.log('[plugin:axios] Axios response error')
  })
}

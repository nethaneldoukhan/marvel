import md5 from 'blueimp-md5'


const PRIVATE_KEY = '28bbb3cd1153d220cd0c632cff5f71c758e57bcd'
const PUBLIC_KEY = '01b1d9f4fe9d881ffcdbff45863039ab'
const BASE_URL = 'https://gateway.marvel.com'
const PATH = '/v1/public/characters'

export default function configGet(search) {
    const ts = Date.now()
    const hash = md5(ts+PRIVATE_KEY+PUBLIC_KEY)
    return `${BASE_URL}${PATH}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&name=${search}`
}
import md5 from 'blueimp-md5'

// export const PUBLIC_KEY = 'c0557821b6929cce11e6f47f43659b8a'
// export const PRIVATE_KEY = '0b6a0ba5b83c4b366289c97254acdc38e318ce4b'

const PRIVATE_KEY = '28bbb3cd1153d220cd0c632cff5f71c758e57bcd'
const PUBLIC_KEY = '01b1d9f4fe9d881ffcdbff45863039ab'
// const BASE_URL = 'http://developer.marvel.com'
const BASE_URL = 'https://gateway.marvel.com'
const PATH = '/v1/public/characters'

export default function configGet(search) {
    const ts = Date.now()
    const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY)
    return `${BASE_URL}${PATH}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&nameStartsWith=${search}`
}
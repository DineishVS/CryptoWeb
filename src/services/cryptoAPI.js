import {createApi,fetchBaseQuery} from  '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
    'x-rapidapi-key': 'ad0a81273dmshe8d596dd950d549p18cf44jsnd23c99cd01d7',
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
    
    
}

const baseUrl='https://coinranking1.p.rapidapi.com'

const createRequest=(url)=>({url, headers:cryptoApiHeaders})


export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query ({
            query:()=>createRequest('/coins')
        })
    })
})

export const {
    useGetCryptosQuery,
} =cryptoApi



// const options = {
// 	method: 'GET',
// 	hostname: 'coinranking1.p.rapidapi.com',
// 	port: null,
// 	path: '/stats?referenceCurrencyUuid=yhjMzLPhuIDl',
// 	headers: {
// 		'x-rapidapi-key': 'ad0a81273dmshe8d596dd950d549p18cf44jsnd23c99cd01d7',
// 		'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
// 	}
// };
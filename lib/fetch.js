// const GRAPHQL_ENDPOINT = 'http://localhost:1337/graphql';

// const headers = {'Content-Type': 'application/json'};

// const _fetch = async(...args) => {

//   const options = {
//     headers : headers,
//     method: 'POST',
//     body: JSON.stringify(args[0])
//   };
//   const res = await fetch(GRAPHQL_ENDPOINT, options)
//   const res_json = await res.json();
//   if(res_json.errors) {
//   	throw(JSON.stringify(res_json.errors));
//   }
//   return res_json.data;
// }

// export default _fetch;




// INCLUIR NO INDEX


// import fetch from './../lib/fetch';

// import useSWR from 'swr'

// // const query = {
// //   'query': 'query Jobs{ jobs(order_by:{created_at: desc}) { id } }'
// // };

// const query = {
//     'query': 'query { jobs { data { attributes {slug}} }}'
//   };
  
//   const getData = async(...args) => {
//     return await fetch(query);
//   };
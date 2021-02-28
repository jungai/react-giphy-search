import React, { useState } from 'react';
import Search from './components/Search'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';

const __IU__ = "https://media2.giphy.com/media/UkYA557fdMYTe/giphy.gif?cid=4cc0f42248q6ocbzlu93nw288wcmde9nlxcs55tlte723o75&rid=giphy.gif"

// const fetchGiphy = (tag: string) => {
//   if (tag) {
//       return   useQuery('get_giphy', () =>
//       axios.get(`https:/api.giphy.com/v1/gifs/search?api_key=${__KEY__}&q=${tag}&limit=1`)
//       .then((res) => res.data.data[0])
//       .catch((err) =>  new Error(err)) 
//     , {
//       retry: false,
//     })
//   }

//   return Promise.resolve(__IU__)
// }

// Create a client
const queryClient = new QueryClient()


export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Index />
    </QueryClientProvider>
  );
}



const Index: React.FC = () => {

  const [searchText, setSearchText] = useState('');

  const { isLoading, data } = fetchGiphy(searchText);

  if (isLoading) {
    return (
      <div className="h-screen bg-gray-700 flex justify-center items-center" >
        <div className="w-4 h-4 rounded-full animate-ping bg-white transition delay-100 mr-8"/>
        <div className="w-4 h-4 rounded-full animate-ping bg-white transition delay-300 mr-8"/>
        <div className="w-4 h-4 rounded-full animate-ping bg-white transition delay-500 mr-8"/>
      </div>
    )
  }

  return (
    <div className="h-screen bg-gray-700 flex flex-col justify-center items-center">
      {
        data?.images
        ? <img src={data.images.original.url} alt="gif" className="mb-4"/>
        : <img src={__IU__} alt="gif" className="mb-4"/>
      }
      <Search
        searchText={searchText}
        onSubmitSearchText={(txt) => setSearchText(txt)}
      />
    </div>
  )
}

export default App;
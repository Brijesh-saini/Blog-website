// import { useEffect, useState } from "react"

// export const useFetch = (url, option = {}, dependencies = []) => {
//   const [data, setData] = useState()
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState()

//   useEffect(() => {
//     const fetData = async () => {
//       setLoading(true)
//       try {
//         const response = await fetch(url, option)
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}, ${response.status}`);
//         }
//         const responseData = await response.json()
//         console.log('Fetch Response:', responseData)
//         setData(responseData)
//         setError(null)
//       } catch (error) {
//         console.error('Fetch Error:', error)
//         setError(error)
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetData()
//   }, [url, ...dependencies])

//   return { data, loading, error }
// };

import { useEffect, useState } from "react";

export const useFetch = (url, option = {}, dependencies = []) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, option)
        const responseData = await response.json()
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}, ${response.status}`);
        }
        setData(responseData);
        setError();
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetData();
  }, dependencies);

  return { data, loading, error };
};

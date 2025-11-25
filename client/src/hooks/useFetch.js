// // src/hooks/useFetch.js
// import { useState, useEffect } from "react";

// export const API_BASE = import.meta.env.VITE_API_BASE || "https://gnwq12ff-3000.inc1.devtunnels.ms";

// function makeUrl(path = "") {
//   const base = API_BASE.replace(/\/+$/, ""); // remove trailing slashes
//   const p = path.startsWith("/") ? path : `/${path}`;
//   return `${base}${p}`;
// }

// /**
//  * Low-level fetch helper
//  */
// export async function apiFetch(path, opts = {}) {
//   const url = makeUrl(path);

//   const defaultOpts = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       ...(opts.headers || {}),
//     },
//     credentials: opts.credentials ?? "same-origin",
//     ...opts,
//   };

//   const res = await fetch(url, defaultOpts);

//   // Throw on non-2xx
//   if (!res.ok) {
//     let body;
//     try { body = await res.json(); } catch { body = await res.text(); }
//     const err = new Error(`HTTP ${res.status} ${res.statusText}`);
//     err.status = res.status;
//     err.body = body;
//     throw err;
//   }

//   const text = await res.text();
//   try { return JSON.parse(text); } catch { return text; }
// }

// /**
//  * React hook: useFetch
//  * - path: "/category/all-category" or "category/all-category"
//  * - options: same options you would pass to apiFetch (method, body, credentials)
//  * Returns { data, loading, error, reload }
//  */
// export function useFetch(path, options = null) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(Boolean(path));
//   const [error, setError] = useState(null);
//   const [reloadCounter, setReloadCounter] = useState(0);

//   useEffect(() => {
//     if (!path) return;

//     let mounted = true;
//     setLoading(true);
//     setError(null);

//     apiFetch(path, options)
//       .then((res) => {
//         if (!mounted) return;
//         setData(res);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (!mounted) return;
//         setError(err);
//         setLoading(false);
//       });

//     return () => { mounted = false; };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [path, reloadCounter, JSON.stringify(options || {})]);

//   const reload = () => setReloadCounter((c) => c + 1);

//   return { data, loading, error, reload };
// }


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
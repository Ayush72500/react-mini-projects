import { useEffect, useState } from "react";
// React ke built-in Hooks import kiye


function useFetch(url) {

  // API se aane wala data
  const [data, setData] = useState(null);

  // API request chal rahi hai ya nahi
  const [loading, setLoading] = useState(true);

  // Agar API request fail ho
  const [error, setError] = useState(null);


  // --------------------------------
  // API CALL FUNCTION
  // --------------------------------

  async function fetchData(signal) {

    try {

      // API request start hui
      setLoading(true);

      // Purana error clear kar diya
      setError(null);


      // API ko request bheji
      // signal AbortController se aa raha hai
      const response = await fetch(url, {
        signal: signal
      });


      // Agar HTTP response successful nahi hai
      if (!response.ok) {
        throw new Error("Something went wrong");
      }


      // Response ko JSON me convert kiya
      const result = await response.json();


      // Data state me store
      setData(result);

    } catch (err) {

      // Agar request AbortController ne cancel ki hai
      // to isko normal error mat samjho
      if (err.name === "AbortError") {
        return;
      }

      // Normal error ko state me store karo
      setError(err);

    } finally {

      // Request complete hone ke baad
      // loading false
      setLoading(false);
    }
  }


  // --------------------------------
  // useEffect
  // --------------------------------

  useEffect(() => {

    // Har API request ke liye
    // ek naya AbortController
    const controller = new AbortController();


    // API call
    fetchData(controller.signal);


    // --------------------------------
    // CLEANUP
    // --------------------------------

    return () => {

      // Agar component unmount ho gaya
      // ya url change ho gaya
      // to purani request cancel kar do
      controller.abort();
    };

  }, [url]);


  // --------------------------------
  // RETURN
  // --------------------------------

  return {
    data,
    loading,
    error,

    // fetchData ka reference return kar rahe hain
    // taaki component manually API dobara call kar sake
    refetch: () => {

      // Manual refetch ke liye
      // naya controller banana zaroori hai
      const controller = new AbortController();

      fetchData(controller.signal);
    }
  };
}


export default useFetch;
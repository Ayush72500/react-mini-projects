import useFetch from "./useFetch";
// Apna Custom Hook import kiya


function App() {

  // Custom Hook ko call kiya
  const {
    data,
    loading,
    error,
    refetch
  } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );


  return (
    <div>

      <h1>User List</h1>


      {/* API request chal rahi hai */}
      {loading && (
        <p>Loading...</p>
      )}


      {/* API request fail hui */}
      {error && (
        <p>{error.message}</p>
      )}


      {/* API se data aa gaya */}
      {data &&
        data.map((user) => (

          <div key={user.id}>

            <h3>
              {user.name}
            </h3>

            <p>
              {user.email}
            </p>

          </div>
        ))
      }


      <hr />


      {/* 
        Button click:

        refetch()
          ↓
        fetchData()
          ↓
        API dobara call
      */}
      <button onClick={refetch}>
        Refresh Users
      </button>

    </div>
  );
}


export default App;
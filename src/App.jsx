import { useEffect, useState } from 'react';
import Home from './Home';
import './App.css';

function App() {
  // Define state variables for data, error, and loading
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading state to true

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('/api/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        // Update state with the fetched data and set loading to false
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        // Handle errors by updating the error state and set loading to false
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <Home />
      {/* Render other components as needed */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <p>Received data: {JSON.stringify(data)}</p>
      )}
    </>
  );
}

export default App;

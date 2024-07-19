import axios from 'axios';

const handleServerData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/getServerData');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

const handlePlayerData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/getPlayerData');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

const handleServerSettings = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/getServerSettings');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

const handleServerMetrics = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/getServerMetrics');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Need to add body called "message" that takes a stringified message from an input on the page.
const handleAnnounce = async () => {
  const message = JSON.stringify({ message: "Hello nutto" });

  try {
    const response = await axios.post('http://localhost:3001/api/postAnnounce', message, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};



const Home = () => {
  return (
    <section className="container mt-4 p-5 bg-dark border border-4 rounded-5 shadow text-white" data-bs-theme="dark">
      <div className="container">
        <h1 className="fs-1">Home</h1>
        <button onClick={handleServerData} className='btn btn-primary'> Get Server Data </button>
        <button onClick={handlePlayerData} className='btn btn-primary'> Get Online Players </button>
        <button onClick={handleServerSettings} className='btn btn-primary'> Get Server Settings </button>
        <button onClick={handleServerMetrics} className='btn btn-primary'> Get Server Metrics </button>
        <button onClick={handleAnnounce} className='btn btn-primary'> Announce </button>
        

      </div>
    </section>
  );
};

export default Home;
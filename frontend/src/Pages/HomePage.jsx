import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import axios from "axios";

const HomePage = () => {
  const [isRateLimited, _setIsRateLimited] = useState(true);
  const [notes, _setNotes] = useState([]);
  const [loading, _setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        console.log(res.data); //console logging for fetched notes
      } catch (error) {
        console.error("Error fetching notes");
      }
    };

    fetchNotes(); // Fetch notes from the API
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
    </div>
  );
};

export default HomePage;

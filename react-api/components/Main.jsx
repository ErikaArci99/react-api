import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [actresses, setActresses] = useState([]);
    const endpoint = 'https://lanciweb.github.io/demo/api/actresses';

    useEffect(() => {
        fetchActresses();
    }, []);

    const fetchActresses = () => {
        axios.get(endpoint)
            .then((response) => {
                const actressesData = response.data?.results || response.data || [];
                setActresses(actressesData);
            })
            .catch((error) => console.log(`Error Fetching Actresses: ${error}`));
    };

    return (
        <div>
            {actresses.map((act) => (
                <div key={act.id}>
                    <img src={act.image} alt={act.name} />
                    <h2>{act.name}</h2>
                    <p><strong>Anno di nascita:</strong> {act.birth_year}</p>
                    <p><strong>Nazionalità:</strong> {act.nationality}</p>
                    <p><strong>Biografia:</strong> {act.biography}</p>
                    <p><strong>Premi:</strong> {act.awards}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default App;
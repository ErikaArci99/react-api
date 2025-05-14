import { useState, useEffect } from 'react';
import axios from 'axios';

// Funzione principale del componente React
function App() {
    // Stato per memorizzare l'elenco delle attrici
    const [actresses, setActresses] = useState([]);

    // Endpoint API da cui prelevare i dati
    const endpoint = 'https://lanciweb.github.io/demo/api/actresses';

    // useEffect viene eseguito al montaggio del componente (una sola volta)
    useEffect(() => {
        fetchActresses(); // Chiama la funzione per recuperare le attrici
    }, []);

    // Funzione per effettuare la richiesta GET all'API
    const fetchActresses = () => {
        axios.get(endpoint)
            .then((response) => {
                // Prova a ottenere i dati da response.data.results, oppure da response.data
                const actressesData = response.data?.results || response.data || [];
                setActresses(actressesData); // Aggiorna lo stato con i dati ricevuti
            })
            .catch((error) => console.log(`Error Fetching Actresses: ${error}`)); // Gestione errori
    };

    // Rendering del componente
    return (
        <div className="container">
            <div className="row">
                {/* Mappa l'elenco delle attrici e crea una card per ciascuna */}
                {actresses.map((act) => (
                    <div key={act.id} className="col-12 col-md-4 col-lg-3">
                        <div className="card">
                            <img src={act.image} alt={act.name} /> {/* Immagine attrice */}
                            <h2>{act.name}</h2> {/* Nome */}
                            <p><strong>Anno di nascita:</strong> {act.birth_year}</p> {/* Anno di nascita */}
                            <p><strong>Nazionalità:</strong> {act.nationality}</p> {/* Nazionalità */}
                            <p><strong>Biografia:</strong> {act.biography}</p> {/* Biografia */}
                            <p><strong>Premi:</strong> {act.awards}</p> {/* Premi */}
                            <hr />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
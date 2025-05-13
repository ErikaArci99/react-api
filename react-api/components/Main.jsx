import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Main = () => {
    const [actresses, setActresses] = useState([]);

    const fetchActresses = () => {
        axios.get("https://lanciweb.github.io/demo/api/actresses/")
            .then((response) => {
                console.log(response);
                setActresses(response.data.results);
            })
            .catch((error) => {
                console.error("Errore nella richiesta:", error);
            });
    };

    useEffect(() => {
        fetchActresses();
    }, []);

    return (
        <>

        </>
    )
}

export default Main
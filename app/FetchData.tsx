import { useEffect, useState } from 'react';

const FetchData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5', {mode: "cors"})
            .then((res) => {
                if (res.status >= 400) {
                    throw new Error("server error");
                }
                return res.json();
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);
};

export default FetchData;
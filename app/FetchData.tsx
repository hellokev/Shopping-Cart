import { useEffect, useState } from 'react';

const FetchData = ({ children, onDataReceived }) => {
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
            .then((fetchedData) => {
                setData(fetchedData);
                if(onDataReceived) {
                    onDataReceived(fetchedData);
                }
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [onDataReceived]);

    return children;
};

export default FetchData;
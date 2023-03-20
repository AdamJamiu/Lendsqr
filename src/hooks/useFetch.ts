import React from "react";

const useFetch = () => {
    const [data, setData] = React.useState<[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
            const data = await response.json();
            setData(data);
        };
        fetchData();
    }, []);

    return { data };
};

export default useFetch;
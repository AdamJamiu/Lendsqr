import React from "react";

const useFetchId = (id: number) => {
    const [data, setData] = React.useState<[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("");
            const data = await response.json();
            setData(data);
        };
        fetchData();
    }, [id]);

    return data;
};


export default useFetchById;
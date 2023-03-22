import React from "react";
import AppContext from "../context";

const useFetchId = (id: number) => {
    const [data, setData] = React.useState<[]>([]);
    const { setLoading } = React.useContext(AppContext);

    React.useEffect(() => {
        if (!id) return;

        setLoading(true);
        fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => setLoading(false))
    }, [id]);

    return { data };
};


export default useFetchId;
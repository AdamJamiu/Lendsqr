import React from "react";
import AppContext from "../context";


const useFetch = () => {
    const [data, setData] = React.useState<[]>([]);
    const { setLoading } = React.useContext(AppContext);

    React.useEffect(() => {

        setLoading(true)
        fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                setLoading(false);
            })
            .catch((error) => console.log(error))
    }, []);

    return { data };
};

export default useFetch;
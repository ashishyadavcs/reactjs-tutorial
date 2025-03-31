import {useEffect, useState} from "react";

export const useFetch = (url) => {
    const [data, setdata] = useState();
    const [error, seterror] = useState();
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true);
        fetch(url)
            .then((res) => {
                if(!res.ok) throw new Error("network error 404")
                return res.json()
            })
            .then((data) => {
                setloading(false);
                setdata(data);
            })
            .catch((err) => {
                setloading(false);
                seterror(err.message);
            });
    }, [url]);

    return { data, error, loading };
};

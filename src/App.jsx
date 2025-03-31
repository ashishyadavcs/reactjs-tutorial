import { useEffect, useState } from "react";
import Button from "./components/Button";
import "./styles/App.css";
import { useFetch } from "./hooks/useFetch";
function App() {
    const { data, error, loading } = useFetch(
        "https://jsonplaceholder.typicode.com/postsfhjy"
    );
    console.log(data,loading,error)
    const [counter, setcounter] = useState(0);
    const handleScroll = () => console.log("resizing");
    useEffect(() => {
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <>
           {loading?"loading...":JSON.stringify(data)}
            <h1 title="heading">APP</h1>
            <Button href="/home" title="save title">
                save user
            </Button>
        </>
    );
}
export default App;

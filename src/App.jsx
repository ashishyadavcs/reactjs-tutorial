import { useEffect, useState } from "react";
import Button from "./components/Button";
import "./styles/App.css";

function App() {
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
            <h1 title="heading">APP</h1>
            <Button href="/home" title="save title" >save user</Button>
        </>
    );
}
export default App;

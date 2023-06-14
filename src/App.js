import { useState, useEffect } from "react";
import Heading from "./Heading";

export default function App() {
    const [advice, setAdvice] = useState("");

    async function getAdvice() {
        // fetch api endpoint
        const res = await fetch("https://api.adviceslip.com/advice");
        // convert json to js object
        const data = await res.json();
        const advice = data.slip.advice;
        setAdvice(advice);
        // return the advice
    }

    useEffect(() => {
        getAdvice();
    }, []);

    return (
        <>
            <Heading adviceProps={advice} />
            <button onClick={getAdvice}>Helo</button>
        </>
    );
}

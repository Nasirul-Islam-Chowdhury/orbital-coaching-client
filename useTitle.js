import { useEffect } from "react";

const handleTitle = (newTitle) =>{
    useEffect(() => {
        document.title = `Orbital | ${newTitle}`
     }, []);
}
export default handleTitle

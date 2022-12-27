import { Magic } from "magic-sdk";

 const createMagic = () => {

const API_KEY = (process.env.REACT_APP_MAGIC_API_KEY)
    return ( typeof window !== "undefined" && 
    new Magic (API_KEY) 
    );  // ✨
};

export const magic = createMagic();

console.log("magic setup", magic);
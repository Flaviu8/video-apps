import { Magic } from "magic-sdk";

 const createMagic = () => {


    return ( typeof window !== "undefined" && 
    new Magic (process.env.REACT_APP_MAGIC_API_KEY) 
    );  // ✨
};

export const magic = createMagic();

console.log("magic setup", magic);
import { Magic } from "magic-sdk";

 const createMagic = () => {
const MAGIC_API = String(process.env.REACT_APP_MAGIC_API)

    const API = {MAGIC_API}

    return ( typeof window !== "undefined" && 
    new Magic(API) 
    );  // ✨
};

export const magic = createMagic();

console.log("magic setup", magic);
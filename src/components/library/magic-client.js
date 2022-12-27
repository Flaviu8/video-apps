import { Magic } from "magic-sdk";

 const createMagic = () => {

    const API_KEY = 'pk_live_63BD2DCE060F4708' 

    return ( typeof window !== "undefined" && 
    new Magic (API_KEY) 
    );  // ✨
};

export const magic = createMagic();

console.log("magic setup", magic);
import React, {createContext, useState, useContext, useEffect} from "react";

interface RefreshContextType {
    refresh: boolean;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
    spin: boolean;
    setSpin: React.Dispatch<React.SetStateAction<boolean>>;
    lang: string;
    setLang: React.Dispatch<React.SetStateAction<string>>;
}

const RefreshContext = createContext<RefreshContextType | undefined>(undefined);

{/**
    ({
        refresh: true,
        setRefresh: () => {},
        spin: true,
        setSpin: () => {},
        lang: "POR",
        setLang: () => {},
    });
*/}
export default function RefreshProvider({ children }: { children: React.ReactNode }){

    const [refresh, setRefresh] = useState(true);
    const [spin, setSpin] = useState(true);
    const [lang, setLang] = useState('POR');   
   
    useEffect(() => {      
            const timeOutId = setTimeout(() => setSpin(false), 2000);
           // console.log('init autoRefresh')
            return () => clearTimeout(timeOutId);        
    }, []);  

    return(
        <RefreshContext.Provider value={{ refresh, setRefresh, spin, setSpin, lang, setLang }}>
            {children}
        </RefreshContext.Provider>
    );
}

export function useAutoRefresh():RefreshContextType{
    const context = useContext(RefreshContext);
    if (!context) {
        throw new Error("useAutoRefresh must be used within a RefreshProvider");
    }
    const { refresh, setRefresh, spin, setSpin, lang, setLang } = context;
    return {refresh, setRefresh, spin, setSpin, lang, setLang}
}
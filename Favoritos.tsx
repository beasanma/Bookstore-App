import {createContext, ReactNode, useContext, useState} from "react";

interface MarcadoresContextType {
    marcadores: number[],
        toggleMarcador: Function
}

const MarcadorContext = createContext<MarcadoresContextType>({} as MarcadoresContextType);

function MarcadorProvider(props : {children: ReactNode}) {

    const [marcadores, setMarcadores] = useState<number[]>([]); //array de números

    const toggleMarcador = (id : number) => {
        setMarcadores(prev => {
            if(prev.includes(id)) {
                prev = prev.filter(n => n != id);
            } else {
                prev.push(id);
            }
            return prev;
        })
    }

    return <MarcadorContext.Provider value={{marcadores, toggleMarcador}}>
        {props.children}
    </MarcadorContext.Provider>
}

function useMarcadores() {
    return useContext(MarcadorContext);
}

export {MarcadorProvider, useMarcadores};

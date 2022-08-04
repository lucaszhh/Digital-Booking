import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import car from "../../database/cars2.json"

export const CarContext = createContext();

export const CarProvider = ({children}) => {

    const [cars, setCars] = useState(car);

/*     useEffect(() => {
        const getCars = async () => {
            try {
                const carsJSON = await axios.get(`http://localhost:8080/autos/`);
                setCars(carsJSON);
            } catch (error) {
                console.log(error);
            }
        };
        getCars();
    }, []);
 */    
    const resetCars = () => {
        const reset = () => setCars(car);
        reset();
    }


    return (
        <CarContext.Provider value={{cars, setCars, resetCars}}>
            {children}
        </CarContext.Provider>
    )
}


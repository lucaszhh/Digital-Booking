
import React, { createContext, useEffect, useState } from "react";
import categoria from "../../database/category.json"
export const CategoryContext = createContext();

export const CategoryProvider = ({children}) => {

    const [categories, setCategories] = useState(categoria);
    const [categorySearch, setCategorySearch] = useState(null);



/*     console.log(categoria);
    useEffect(() => {
      const getCategories =  () => {
        try {
          const categoriesJSON = categoria;
          setCategories(categoriesJSON);
        } catch (error) {
          console.log(error);
        }
      };

      getCategories();
    }, []); */

    return (
        <CategoryContext.Provider value={{categories, setCategories, categorySearch, setCategorySearch}}>
            {children}
        </CategoryContext.Provider>
    )
}
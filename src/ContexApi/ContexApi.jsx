import { createContext, useState} from "react";
import { food_list } from "../images/frontend_assets/assets";

export const ContexApi= createContext()
const ContexProvider = (props)=>{
    const [foodList,setFoodList]=useState(food_list)
const [total,setTotal]=useState(0)
    const contexValue={
food_list,
foodList,
setFoodList,
total,setTotal
    }
    
    return(
    <ContexApi.Provider value={contexValue}>
     {props.children} 
    </ContexApi.Provider>
    )

}
export default ContexProvider
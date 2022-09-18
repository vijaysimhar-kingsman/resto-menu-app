import React ,{useState} from 'react';
import "./Style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import Navbar from './Navbar';
//import UseState from '../Hooks/useState';

export const Restaurent = () => {
  const types = [
     ...new Set(
      Menu.map((curEle)=>{return curEle.category})
      ),"All",
    ] ;

  const [menuData , setMenuData] = useState(Menu);
  const [menuList , setMenuList] = useState(types);
  const filterItem =(category)=>{
    if(category==="All"){
      setMenuData(Menu);  
      return;
    }else{
      const update = Menu.filter((curEle)=>{
        return curEle.category ===category;
      });
      setMenuData(update);
    }
    
    
  }
  console.log(types);

  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData={menuData}/>
    </>
  )
    
    
}





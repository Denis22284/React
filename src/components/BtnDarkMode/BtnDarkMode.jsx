import{useState, useEffect} from 'react';
import sun from "./sun.svg";
import moon from "./moon.svg";
import "./style.css"



const BtnDarkMode =  () => {

const[darkMode, setDarkMode]  =  useState('Light');

useEffect(() => {

    console.log('Use effect Fired!')
    console.log('darkMode');

if(darkMode === 'dark'){
    document.body.classList.add ("dark")
} else{
    document.body.classList.remove ("dark")

}

}, [darkMode] );

const toggleDarkMode= () => {
    setDarkMode((currentValue) => {

return currentValue === "Light" ? "Dark" : "Light"

    })
}


return(

    <button className ="dark-mode-btn" onClick={toggleDarkMode}>
    <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
    <img src={moon}alt="Dark mode" className="dark-mode-btn__icon"/>
</button>



);

}

export default BtnDarkMode
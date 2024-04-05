import React from "react";
import "./css/navLink.css";
import content from "../../content/pageContent.json";


const NavLink = ({isOpen}) => {

    const handleClick = (id) =>{
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({behavior:'smooth'});
        }
    };

    return (
        <section className={`NavLink ${isOpen ? 'active' : ''}`}>
            <ul>
                {content.items.map((content, index) => {
                    return (<li key={content.Title + index} onClick={() => handleClick(`${content.Title.replace(/ /g, '')}`)}> {content.Title}</li>)
                })}
            </ul>

        </section> 
    )

};

export default NavLink;


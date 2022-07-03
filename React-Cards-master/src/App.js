import React from 'react';
import Tony from "../src/images/Tony.png";
import virat from "../src/images/virat.png";
import stephen from "../src/images/stephen.png"
import matfraser from "../src/images/matfraser.png"
const CardGroup = (props) => (
    <div className="cardGroup">
        {props.children}
       
        
    </div>
);

const Card = (props) => (
    
    <div className="card cardGroup__card">
             <div className="card__description cardGroup__description">
                {/* <div className={"img Tony " + props.img + " card__descriptionimg" } /> */}
                <img className='card__descriptionimg' src={Tony}/>

                 <div className="card__descriptionText">
                     {props.description}
                     <br/>
                     {props.date}
                     <br/>
                     {props.hint}
                 </div>
            </div>
        

             <div className="card__price">
             <div className={"icon fa " + props.icon + " card__descripIcon" } />

                 {props.price}
                 
             
             </div>
         </div>
);

const App = () => (
    <CardGroup>
        <Card price="I am Ironman" description="Tony Stark" date="31/01/1999" hint="You Know Me" img src={Tony} icon ="fa-solid fa-user"/>
        <Card price="Top order Batsman" description="Virat Kohali" date="31/01/1999" hint="I am a Professional Cricketer" img src={virat} icon ="fa-solid fa-user"/>
        <Card price="Crossfit Champion" description="Mat Fraser" date="31/01/1999" hint="I am a professional Crossfit athlete" img src={stephen} icon ="fa-solid fa-user"/>
        <Card price="Sorcerer Supreme" description="Dr Stephen Strane" date="31/01/1999" hint="I am a Wizard" img src={matfraser} icon ="fa-solid fa-user"/>
    </CardGroup>
    
);

export default App;

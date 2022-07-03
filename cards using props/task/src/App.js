import React from 'react'
import Card from 'react-bootstrap/Card';
import Tony from "../src/images/Tony.png";
import virat from "../src/images/virat.png";
import stephen from "../src/images/stephen.png"
import matfraser from "../src/images/matfraser.png"
import{CardGroup} from "react-bootstrap"
import icon from "../src/images/icon.JPG"
const CardGroup=(props) =>(
  <div className='group'>
    {props.children}
  </div>
);

const Card =(props) =>(

);
const App = () => {
  return (
    <CardGroup className='group'>
      <Card className='clo' style={{border:'1px solid grey', borderRadius:'2px'}}>
        <Card.Img variant="top" src={Tony} />
        <Card.Body className='group1'>
          <Card.Title style={{color:'#BBC4C2'}}>Tony Stark</Card.Title>
          <Card.Text style={{ fontweight:'bold', color:'#7E7C73'}}>
          31/01/1999
          </Card.Text>
          <Card.Text  style={{color:'#BBC4C2'}}>You Know Me</Card.Text>
        </Card.Body>
        <Card.Footer className='footer' style={{backgroundColor:'#2E2E2E'}}>
        <img style={{ backgroundcolor: 'transparent', opacity:'0.9px'}} src={icon} />
          <small className="text-muted" style={{color:'#7E7C73'}}>  I am Ironman</small>
        </Card.Footer>
      </Card>
      <Card style={{border:'1px solid grey', borderRadius:'2px'}}>
        <Card.Img variant="top" src={virat} />
        <Card.Body className='group1'>
          <Card.Title style={{color:'#BBC4C2'}}>Virat Kohali</Card.Title>
          <Card.Text style={{color:'#7E7C73'}}>
          31/01/1999
          </Card.Text>
          <Card.Text style={{color:'#BBC4C2'}}>I am a Professional Cricketer</Card.Text>
        </Card.Body >
        <Card.Footer className='footer' style={{backgroundColor:'#2E2E2E'}}>
        <img src={icon}/>
          <small className="text-muted">  Top order Batsman</small>
        </Card.Footer>
      </Card>
      <Card style={{border:'1px solid grey', borderRadius:'2px'}}>
        <Card.Img variant="top" src={matfraser} />
        <Card.Body className='group1'>
          <Card.Title style={{color:'#BBC4C2'}}>Mat Fraser</Card.Title>
          <Card.Text style={{color:'#7E7C73'}}>
          31/01/1999
          </Card.Text>
          <Card.Text style={{color:'#BBC4C2'}} >I am a professional Crossfit athlete</Card.Text>
        </Card.Body>
        <Card.Footer className='footer' style={{backgroundColor:'#2E2E2E'}}>
        <img src={icon}/>
          <small className="text-muted" style={{color:'#7E7C73'}} >  Crossfit Champion</small>
        </Card.Footer>
      </Card>
      <Card style={{border:'1px solid grey', borderRadius:'2px'}}>
        <Card.Img variant="top" src={stephen} />
        <Card.Body className='group1'>
          <Card.Title style={{color:'#BBC4C2'}}>Dr Stephen Strane</Card.Title>
          <Card.Text style={{color:'#7E7C73'}}>
          31/01/1999
          </Card.Text>
          <Card.Text style={{color:'#BBC4C2'}}>I am a Wizard</Card.Text>
        </Card.Body>
        <Card.Footer className='footer' style={{backgroundColor:'#2E2E2E'}}>
        <img src={icon}/>
          <small className="text-muted" style={{color:'#7E7C73'}}>  Sorcerer Supreme</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default App
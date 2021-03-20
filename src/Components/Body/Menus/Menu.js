import React from 'react';
import {
    Card, CardImg, CardTitle, CardDeck, CardBody
  } from 'reactstrap';

import bike from '../../../assets/bike.jpg'
import car from '../../../assets/car.webp'
import bus from '../../../assets/bus.png'
import train from '../../../assets/train.png'
import {Link} from 'react-router-dom';

import './Menu.css'

const Menu=()=>{
    return(
        <div className="container">
            <CardDeck>
                    <Card>
                        <CardImg top width="150px" height="200px" src={bike} alt="Card image cap" />
                        <CardBody>
                            <Link className="Link link text-decoration-none font-weight-bold" to='/bike'><CardTitle tag="h5" className="text-center">Bike</CardTitle></Link>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="150px" height="200px" src={car} alt="Card image cap" />
                        <CardBody>
                            <Link className="Link link text-decoration-none font-weight-bold" to='/car'><CardTitle tag="h5" className="text-center">Car</CardTitle></Link>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="150px" height="200px" src={bus} alt="Card image cap" />
                        <CardBody>
                            <Link className="Link link text-decoration-none font-weight-bold" to='/bus'><CardTitle tag="h5" className="text-center">Bus</CardTitle></Link>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="150px" height="200px" src={train} alt="Card image cap" />
                        <CardBody>
                            <Link className="Link link text-decoration-none font-weight-bold" to='/train'><CardTitle tag="h5" className="text-center">Train</CardTitle></Link>
                        </CardBody>
                    </Card>
            </CardDeck>
                <div style={{width:'100%',height:'100%',paddingBottom:'400px'}}></div>
        </div>
    )
}
export default Menu;
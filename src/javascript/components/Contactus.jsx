import React, { Component } from 'react';
import mobile from '../../images/mobile.svg';
import mail from '../../images/mail.svg';
import marker from '../../images/marker.svg';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import linkedin from '../../images/linkedin.svg';
import { Row,Col,Input, TextArea, Button } from '../components/common/UIComponents';

export default class Contactus extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
        <div className='content-contact'>
        <div>
            <div className='content-contact-heading'>
                <Row>
                    <Col md={24}>
                    Contact
                    </Col>
                </Row>
            </div>
            <div className='content-contact-gutter'>
                <Row gutter={24}> 
                    <Col md={6}>
                    <img align="middle" src={mobile}/>
                    </Col>
                    <Col md={8}>
                    <div className='content-contact-elements'>+1 (479)6969898</div>
                    </Col>
                    <Col md={9}>
                        <Input placeholder='Name'/>
                    </Col>
                </Row>
            </div>
            <div className='content-contact-gutter'>
                <Row gutter={24}>
                    <Col md={6}>
                    <img align="middle" src={mail}/>
                    </Col>
                    <Col md={8}>
                    <div className='content-contact-elements'>digital@imaginnovate.com</div>
                    </Col>
                    <Col md={9}>
                        <Input placeholder='Email'/>
                    </Col>
                </Row>
            </div>
            <div className='content-contact-gutter'>
                <Row gutter={24}>
                    <Col md={6}>
                    <img align="middle" src={marker}/>
                    </Col>
                    <Col md={8}>
                    <div className='content-contact-elements'>Austin, TX</div>
                    </Col>
                    <Col md={9}>
                        <TextArea placeholder='Message'/>
                    </Col>
                </Row>
            </div>
            <div className='content-contact-gutter'>
                <Row gutter={24}>
                    <Col md={2}></Col>
                    <Col md={3} style={{ top: -15, left: -10 }}>
                    <img align="middle" src={twitter}/>
                    </Col>
                    <Col md={3} style={{ top: -15, left: -10 }}>
                    <img align="middle" src={facebook}/>
                    </Col>
                    <Col md={3} style={{ top: -15, left: -10 }}>
                    <img align="middle" src={linkedin}/>
                    </Col>
                    <Col md={3}></Col>
                    <Col md={9} style={{ top: -15}}>
                    <Button block style={{height:60}}>Submit</Button> 
                    </Col>
                </Row>
            </div>
        </div>
        </div>
        )
    }
}
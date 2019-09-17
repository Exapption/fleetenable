        import React, { Component } from 'react';
        import PropTypes from 'prop-types';
        import {
            isMobile,
            isTablet,
            MobileOnlyView,
        } from 'react-device-detect';

        import IETransportationLogistics from '../../images/transportation-logistics.svg';
        import IEStartups from '../../images/startups.svg';
        import IETLSideIcon from '../../images/ie-tl-side-icon.svg';
        import IERCSideIcon from '../../images/ie-rc-side-icon.svg';
        import IEStartupSideIcon from '../../images/ie-startup-side-icon.svg';
        import IERetailNCommerce from '../../images/retailNCommerce.png';
        import TCSDIcon from '../../images/tc-sd.svg';
        import TCMobileWebIcon from '../../images/tc-mobile-web.svg';
        import TCMLAIIcon from '../../images/tc-ml-ai.svg';
        import TCCSIcon from '../../images/tc-cloud.svg';
        import TCIOTIcon from '../../images/tc-iot.svg';
        import TCADIcon from '../../images/tc-ad.svg';

        import Mobile from '../../images/mobile.svg';
        import Mail from '../../images/mail.svg';
        import Marker from '../../images/marker.svg';
        import MobileGIF from '../../images/mobileGIF.gif';
        import AddressMarker from '../../images/addressImage.png';
        
        import Agility from '../../images/agility.png';
        import Communication from '../../images/communication.png';
        import ProjectOwnership from '../../images/projectOwnership.png';
        import Quality from '../../images/quality.png';
        import TimeToMarket from '../../images/timeToMarket.png';

        import Contactus from './Contactus';
        import { Content,Card,Row,Col,Tabs, Checkbox, Select, Input, Button} from './common/UIComponents';
        import { black } from 'ansi-colors';

        
        const TabPane = Tabs.TabPane;
        const Option = Select.Option;
        const { TextArea } = Input;
        class ContentsContactUs extends Component {
        constructor(props){
            super(props)
        }
        render(){
            return(
                <div>
                <Content>
                    <div style={{padding:15, paddingTop:50, fontWeight:100, fontSize:16}}> 
                        <Row type='flex'>
                            <Col md={12} style={{textAlign:'center'}}>
                            Platform : <Checkbox checked>Mobile</Checkbox>  <Checkbox checked>Web</Checkbox>
                            </Col>
                            <Col md={12} style={{textAlign:'center'}}>
                            Time to Market : <Select style={{ width: 120 }}>
                                                <Option value="zeroToThree">0 - 3</Option>
                                                <Option value="ThreeToSix">3 - 6</Option>
                                                <Option value="SixToNine">6 - 9</Option>
                                                <Option value="NineToTwelve">9 - 12</Option>
                                             </Select> Months
                            </Col>
                        </Row>
                        <Row type='flex' style={{padding:15, paddingTop:25, paddingLeft:50, paddingRight:50}}>
                            <Col md={24} style={{textAlign:'center'}}>
                                <TextArea rows={4} placeholder="Project Details"/>
                            </Col>
                        </Row>
                        <Row type='flex' style={{padding:5, paddingLeft:50, paddingRight:50}}>
                            <Col md={12} style={{textAlign:'center', color:'#000000'}}>
                                <Input placeholder="Name"/>
                            </Col>
                        </Row>
                        <Row type='flex' style={{padding:5, paddingLeft:50, paddingRight:50}}>
                            <Col md={12} style={{textAlign:'center'}}>
                                <Input placeholder="Email"/>
                            </Col>
                            <Col md={2}></Col>
                            <Col md={8} style={{textAlign:'center'}}>
                                <Input placeholder="Phone No."/>
                            </Col>
                            <Col md={2}></Col>
                        </Row>
                        <Row type='flex' style={{padding:15}}>
                            <Col md={12} style={{textAlign:'left', paddingLeft:38}}>
                                <Button type='primary'> Send </Button>
                            </Col>
                        </Row>
                    </div>
                    <div style={{backgroundColor:'#ededed'}}>
                    <div>
                    <Row type='flex'> 
                        <Col md={12} style={{textAlign:'center'}}>
                           <div className='address-contact'>
                               <b>United States</b>
                               <br/>
                               Fulbright Building
                               <br/>
                               217 E Dickson St. Suite 106
                               <br/>
                               Fayetteville, AR <img src={AddressMarker} width='12' height='20' style={{paddingBottom:5, color:'#FF0000'}}/>
                           </div>
                        </Col>
                        <Col md={12} style={{textAlign:'center'}}>
                           <div className='address-contact'>
                               <b>India</b>
                               <br/>
                               4th floor, Vidisha Towers 
                               <br/>
                               Dwarakanagar, Visakhapatnam
                               <br/>
                               AP, India - 530016 <img src={AddressMarker} width='12' height='20' style={{paddingBottom:5, color:'#FF0000'}}/>
                           </div>
                        </Col>
                    </Row>
                    </div>
                    </div>
                    <div className='about-contact'>
                    <Row type='flex'>  
                        <Col md={12}>
                        <div style={{backgroundColor:'#FFFF', marginLeft:100, marginTop:20, marginBottom:20, borderRadius:10}}>
                            <div style={{borderRadius:5, padding: 10}}>
                              <img src={MobileGIF} className='autoFitImage'/>
                            </div>
                            <div className='about-contact-info'>
                                <div className='about-contact-date'>
                                <div className='day'>04</div>
                                <div className=''>May</div>
                                <div className=''>2017</div>
                                </div>
                           
                            <div className='about-contact-text'>
                            <strong>
                            Let your app stand out (Part 1 - Theming)
                            </strong>
                            <br/>
                                While the app marketplace is booming and generating new business models, it is becoming
                                a challenge...
                            </div>
                            </div>
                        </div>
                        </Col>
                        <Col md={12}>
                        <div style={{marginLeft:50, marginTop:120}}>
                            <Row type='flex'>
                                <Col md={24}>
                                    <div style={{fontSize:30, color:'#ffff'}}>CONTACT</div>
                                </Col>
                            </Row>
                            <Row>
                                <div style={{paddingTop:20}}>
                                <Col md={2}>
                                <div>
                                    <img src={Mobile}/>
                                </div>
                                </Col>
                                <Col md={2}>
                                </Col>
                                <Col md={12}>
                                <div style={{fontSize:20, color:'#ffff'}}>
                                   +1 (479) 696 9898
                                </div>
                                <div style={{fontSize:20, color:'#ffff'}}>
                                   +91 70 93 50 4624
                                </div>
                                </Col>
                                </div>
                            </Row>
                            <Row type='flex'>
                                <div style={{paddingTop:20}}>
                                <Col md={2}>
                                <div>
                                    <img src={Mail}/>
                                </div>
                                </Col>
                                <Col md={2}>
                                </Col>
                                <Col md={12}>
                                <div style={{fontSize:20, paddingLeft:20, color:'#ffff'}}>
                                   digital@imaginnovate.com
                                </div>
                                </Col>
                                </div>
                            </Row>
                         </div>
                        </Col>
                       
                    </Row>
                    </div>    
                        
                </Content>
                </div>
            );
        }
        }
        export default ContentsContactUs;
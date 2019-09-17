            import React, { Component } from 'react';
            import PropTypes from 'prop-types';
            import {
                isMobile,
                isTablet,
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
            import Contactus from '../components/Contactus';
            import { Content,Card,Row,Col} from '../components/common/UIComponents';
            import { black } from 'ansi-colors';

            class Contents extends Component {
            constructor(props){
                super(props)
            }
            render(){
                if(isMobile || isTablet){
                    return(
                    <div>
                        <Content>
                        <div className='content-mobile'>
                            <div style={{fontSize:34, padding:25 }}>
                             We help businesses <label><b>succeed</b></label> in their <label><b>Digital Transformation</b></label> journey
                            </div>
                        </div>
                        <div className='content-second-mobile'>
                            <div className='content-second-mobile-heading'>
                                <Row>
                                    <Col span={24}>
                                    Industries Expertise
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div>
                            <Row type="flex">
                                <Col span={24}>
                                <div>
                                    <Card style={{marging:5}}>
                                        <div className='card-header-mobile'>
                                        <Row type='flex'>
                                            <Col span={14}>
                                            <b>Transportation & Logistics</b>
                                            </Col>
                                            <Col span={10}>
                                            <img align="right" src={IETLSideIcon}/>
                                            </Col>
                                        </Row>
                                        </div>
                                        <div className='content-industry-expertise-mobile'>
                                        <Row>
                                            <Col span={24} >
                                            <img align="middle" width='170' height='150' src={IETransportationLogistics}/>
                                            </Col>
                                        </Row>
                                        </div>
                                        <div>
                                        <Row>
                                            <Col span={24} >
                                            <p className='content-p-tag'>Android is the most widely used mobile app
                                                platform and one of the most diverse platforms.
                                                Mobile apps need to adapt to different screen
                                                sizes and offer seamless experience across 
                                                devices. We got this covered</p>
                                            </Col>
                                        </Row>
                                        </div>
                                    </Card>
                                </div>
                                </Col>
                            </Row>
                            <Row type="flex">
                                <Col span={24}>
                                <div>
                                    <Card style={{marging:5}}>
                                        <div className='card-header-mobile'>
                                        <Row type='flex'>
                                            <Col span={14}>
                                            <b>Retail & eCommerce</b>
                                            </Col>
                                            <Col span={10}>
                                            <img align="right" src={IERCSideIcon}/>
                                            </Col>
                                        </Row>
                                        </div>
                                        <div className='content-industry-expertise-mobile'>
                                        <Row>
                                            <Col span={24} >
                                            <img align="middle" width='170' height='150' src={IERetailNCommerce}/>
                                            </Col>
                                        </Row>
                                        </div>
                                        <div>
                                        <Row>
                                            <Col span={24} >
                                            <p className='content-p-tag'>Android is the most widely used mobile app
                                                platform and one of the most diverse platforms.
                                                Mobile apps need to adapt to different screen
                                                sizes and offer seamless experience across 
                                                devices. We got this covered</p>
                                            </Col>
                                        </Row>
                                        </div>
                                    </Card>
                                </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='content-third'>
                        <div className='content-second-mobile-heading'>
                            <Row>
                                <Col md={24}>
                                Technology Capabilities
                                </Col>
                            </Row>
                        </div>
                        <div style={{paddingBottom:50}}>
                            <Row type="flex" justify="center">
                                <Col md={8} className='content-third-cards' style={{ backgroundColor: '#7ebc59'}}>
                                <img align="middle" className='content-third-card-img' src={TCSDIcon}/>
                                <div className='content-third-card-img-title'>Strategy & Design</div>
                                </Col>
                                <Col md={8} className='content-third-cards' style={{ backgroundColor: '#e7475e'}}>
                                <img align="middle" className='content-third-card-img' src={TCMobileWebIcon}/>
                                <div className='content-third-card-img-title'>Mobile & Web</div>
                                </Col>
                                <Col md={8} className='content-third-cards' style={{ backgroundColor: '#368cbf'}}>
                                <img align="middle" className='content-third-card-img' src={TCMLAIIcon}/>
                                <div className='content-third-card-img-title'>Machine Learning &<br/>Artificial Intelligence</div>
                                </Col>
                            </Row>
                            <Row type="flex" justify="center">
                                <Col md={8} className='content-third-cards' style={{ backgroundColor: '#475f77'}}>
                                <img align="middle" className='content-third-card-img' src={TCADIcon}/>
                                <div className='content-third-card-img-title'>Agile Development</div>
                                </Col>
                                <Col md={8} className='content-third-cards' style={{ backgroundColor: '#ffb310'}}>
                                <img align="middle" className='content-third-card-img' src={TCCSIcon}/>
                                <div className='content-third-card-img-title'>Cloud Services</div>
                                </Col>
                                <Col md={8} className='content-third-cards' style={{ backgroundColor: '#7b3b8c'}}>
                                <img align="middle" className='content-third-card-img' src={TCIOTIcon}/>
                                <div className='content-third-card-img-title'>IOT</div>     
                                </Col>
                            </Row>
                        </div>
                        </div>
                        </Content>
                    </div>
                    );
                }
                else{
                    return(
                        <div>
                        <Content>
                        <div className='content'>
                        <div style={{paddingTop:148}}>
                        <label style={{fontWeight:"100"}}>We help businesses <label style={{fontSize:72}}><b>succeed</b></label> in their <label style={{fontSize:72}}><b>Digital Transformation</b></label> journey</label>
                        </div>
                        </div>
                        <div className='content-second'>
                        <div className='content-second-heading'>
                            <Row>
                                <Col md={24}>
                                Industries Expertise
                                </Col>
                            </Row>
                        </div>
                        <div style={{width:'98%'}}>
                            <Row type="flex">
                                <Col md={12} >
                                <div style={{float:'right',paddingRight:0}}>
                                    <Card className='card-custom'>
                                        <div className='card-header'>
                                        <Row>
                                            <Col md={14}>
                                            <b>Transportation & Logistics</b>
                                            </Col>
                                            <Col md={10}>
                                            <img align="right" src={IETLSideIcon}/>
                                            </Col>
                                        </Row>
                                        <div className='content-industry-expertise'>
                                        <Row>
                                            <Col md={24} >
                                            <img align="middle" width='170' height='150' src={IETransportationLogistics}/>
                                            </Col>
                                        </Row>
                                        </div>
                                        <div style={{height:184}}>
                                        <Row>
                                            <Col md={24} >
                                            <p className='content-p-tag'>Android is the most widely used mobile app
                                                platform and one of the most diverse platforms.
                                                Mobile apps need to adapt to different screen
                                                sizes and offer seamless experience across 
                                                devices. We got this covered</p>
                                            </Col>
                                        </Row>
                                        </div>
    
                                        </div>
                                    </Card>
                                </div>
                                </Col>
                                <Col md={12} style={{paddingLeft:30}}>
                                <div>
                                    <Card className='card-custom'>
                                        <div className='card-header'>
                                        <Row>
                                            <Col md={14}>
                                            <b>Retail & eCommerce</b>
                                            </Col>
                                            <Col md={10}>
                                            <img align="right" src={IERCSideIcon}/>
                                            </Col>
                                        </Row>
                                        <div className='content-industry-expertise'>
                                        <Row>
                                            <Col md={24} >
                                            <img align="middle" width='230' height='150' src={IERetailNCommerce}/>
                                            </Col>
                                        </Row>
                                        </div>
                                        <div style={{height:184}}>
                                        <Row>
                                            <Col md={24} >
                                            <p className='content-p-tag'>Android is the most widely used mobile app
                                                platform and one of the most diverse platforms.
                                                Mobile apps need to adapt to different screen
                                                sizes and offer seamless experience across 
                                                devices. We got this covered</p>
                                            </Col>
                                        </Row>
                                        </div>
                                        </div>
                                    </Card>
                                </div>
                                </Col>
                            </Row>
                        </div>
                        </div>
                        <div className='content-third'>
                        <div className='content-second-heading'>
                            <Row>
                                <Col md={24}>
                                Technology Capabilities
                                </Col>
                            </Row>
                        </div>
                        <div style={{paddingBottom:50}}>
                            <Row type="flex" justify="center">
                                <Col md={8} className='content-third-cards' style={{ backgroundColor: '#7ebc59'}}>
                                <img align="middle" className='content-third-card-img' src={TCSDIcon}/>
                                <div className='content-third-card-img-title'>Strategy & Design</div>
                                </Col>
                                <Col md={8} className='content-third-cards' style={{ backgroundColor: '#e7475e'}}>
                                <img align="middle" className='content-third-card-img' src={TCMobileWebIcon}/>
                                <div className='content-third-card-img-title'>Mobile & Web</div>
                                </Col>
                                <Col md={8} className='content-third-cards' style={{ backgroundColor: '#368cbf'}}>
                                <img align="middle" className='content-third-card-img' src={TCMLAIIcon}/>
                                <div className='content-third-card-img-title'>Machine Learning &<br/>Artificial Intelligence</div>
                                </Col>
                            </Row>
                            <Row type="flex" justify="center">
                                <Col md={8} className='content-third-cards' style={{ backgroundColor: '#475f77'}}>
                                <img align="middle" className='content-third-card-img' src={TCADIcon}/>
                                <div className='content-third-card-img-title'>Agile Development</div>
                                </Col>
                                <Col md={8} className='content-third-cards' style={{ backgroundColor: '#ffb310'}}>
                                <img align="middle" className='content-third-card-img' src={TCCSIcon}/>
                                <div className='content-third-card-img-title'>Cloud Services</div>
                                </Col>
                                <Col md={8} className='content-third-cards' style={{ backgroundColor: '#7b3b8c'}}>
                                <img align="middle" className='content-third-card-img' src={TCIOTIcon}/>
                                <div className='content-third-card-img-title'>IOT</div>     
                                </Col>
                            </Row>
                        </div>
                        </div> 
                        {/*  <Contactus/> */}
                        </Content>
                    </div>
                    );
                }
            }
            }
            export default Contents;
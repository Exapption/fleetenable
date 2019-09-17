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
        import MobileGIF from '../../images/mobileGIF.gif';
        
        import Agility from '../../images/agility.png';
        import Communication from '../../images/communication.png';
        import ProjectOwnership from '../../images/projectOwnership.png';
        import Quality from '../../images/quality.png';
        import TimeToMarket from '../../images/timeToMarket.png';

        import Contactus from './Contactus';
        import { Content,Card,Row,Col,Tabs} from './common/UIComponents';
        import { black } from 'ansi-colors';

        
        const TabPane = Tabs.TabPane;
        class Contents extends Component {
        constructor(props){
            super(props)
        }
        render(){
            return(
                <div>
                <Content>
                    <div className='about-section-header align-center'>
                    About
                    </div>
                    <Row typpe='flex'>
                    <Col md={24}>
                    <div className='about-section-description align-center' style={{paddingLeft:'7%', paddingRight:'5%', paddingTop:50}}>
                    Our company is built with <label className='about-section-description-highlight'>strong</label>  roots in <label className='about-section-description-highlight'> mobile application development </label>  and our technologies evolved around our  <label className='about-section-description-highlight'>core <br/> strength.</label>
                    </div>
                    </Col>
                    </Row>
                    <Row type='flex'>
                    <Col md={24}>
                    <div className='about-section-description align-center' style={{paddingLeft:'7%', paddingRight:'5%', paddingTop:20}}>
                    We make sure that we deliver amazing experiences  at every customer touch point  and that's how we define <br/> <label className='about-section-description-highlight'>Exceptional Customer Experience.</label>
                    </div>
                    </Col>
                    </Row>
                    <Row gutter={32} type='flex' justify='center'>
                    <Col md={20}>
                    <div className='align-center tab-pane' style={{paddingTop:50}}>

                    <Tabs defaultActiveKey="1">
                        <TabPane tab="2013" key="1" >
                        <div className='tab-content-span'>
                        <label className='about-section-description-highlight'>Inspired by technology</label> and <label className='about-section-description-highlight'>motivated by the possibilities</label> of how technology can be applied to solve real world problems, Imaginnovate was formed. We started our journey with <label className='about-section-description-highlight'>one great customer</label>
                        </div>
                        </TabPane>
                        <TabPane tab="2014" key="2">
                        <div className='tab-content-span'>
                        We built teams with  <label className='about-section-description-highlight'> quality, technology</label> and <label className='about-section-description-highlight'>time-to-market</label> as our <label className='about-section-description-highlight'>core values</label>. Customers trusted us and we delivered. Along with quality and technology we deeply believed delivering <label className='about-section-description-highlight'>exceptional customer experiences</label> is what define us.
                        </div>
                        </TabPane>
                        <TabPane tab="2015" key="3">
                        <div className='tab-content-span'>
                        Learning from our high and low points, our internal processes were developed. We are proud to say that in the past two years we have built a strong technology team and happy customers that have long term relations with us.  <label className='about-section-description-highlight'>We now dream big</label>.
                        </div>
                        </TabPane>
                        <TabPane tab="2016" key="4">
                        <div className='tab-content-span'>
                        We are  <label className='about-section-description-highlight'>Innovation Partner</label> for your Digital dreams.
                        </div>
                        </TabPane>
                        <TabPane tab="2017" key="3">Content of Tab Pane 3</TabPane>
                        <TabPane tab="2018" key="4">Content of Tab Pane 4</TabPane>
                    </Tabs>

                    </div>
                    </Col>
                    </Row>
                    <div className='about-section-header align-center'>
                    Our Values
                    </div>
                     <div className='align-center' style={{paddingBottom:50, width:'100%'}}>
                        <Row gutter={16} type='flex' justify='center'>
                       
                            <Col md={4}><img src={ProjectOwnership} style={{padding:60}}/></Col>
                            <Col md={5}><img src={TimeToMarket} style={{padding:60}}/></Col>
                            <Col md={5}><img src={Quality} style={{padding:60}}/></Col>
                            <Col md={5}><img src={Agility} style={{padding:60}}/></Col>
                            <Col md={5}><img src={Communication} style={{padding:60}}/></Col>
                        
                        </Row>
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
        export default Contents;
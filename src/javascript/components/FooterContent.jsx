    import React, { Component } from 'react';
    import PropTypes from 'prop-types';
    import {
        isMobile,
        isTablet,
    } from 'react-device-detect';
    import { Footer, Row, Col } from '../components/common/UIComponents';
    import facebook from '../../images/facebook.svg';
    import twitter from '../../images/twitter.svg';
    import linkedin from '../../images/linkedin.svg';


    class FooterContent extends Component {
    constructor(props){
        super(props)
    }
        render(){
            if(isMobile || isTablet){
                return(
                    <div className='footer-content'>
                        <Footer>
                            <Row type="flex">
                                <Col md={16} xxl={6}>
                                <div className='inLineBlock'>
                                    <div style={{float:'left', paddingLeft:50}}>
                                        <img height='50' width='50' align="middle" src={twitter}/>
                                    </div>
                                    <div style={{float:'left', paddingLeft:50}}> 
                                        <img height='50' width='50'  align="middle" src={facebook}/>
                                    </div>
                                    <div style={{float:'left', paddingLeft:50}}>
                                        <img height='50' width='50'  align="middle" src={linkedin}/>
                                    </div> 
                                </div>
                                </Col>
                                <Col md={8} xxl={18}>
                                    <div style={{paddingTop:10, paddingLeft:25, paddingRight:25, fontSize:18}}>
                                        2018 Imaginnovate All Rights Reserverd
                                    </div>
                                </Col>
                            </Row>
                        </Footer>
                    </div>
                    );
            }
            else {
                return(
                    <div className='footer-content'>
                        <Footer>
                            <Row type="flex">
                                <Col md={16} xxl={6}>
                                    <div style={{float:'left', paddingLeft:30}}>
                                        <img height='50' width='50' align="middle" src={twitter}/>
                                    </div>
                                    <div style={{float:'left', paddingLeft:20}}> 
                                        <img height='50' width='50'  align="middle" src={facebook}/>
                                    </div>
                                    <div style={{float:'left', paddingLeft:20}}>
                                        <img height='50' width='50'  align="middle" src={linkedin}/>
                                    </div> 
                                </Col>
                                <Col md={8} xxl={18}>
                                    <div style={{paddingTop:10, paddingLeft:25, paddingRight:25, fontSize:18}}>
                                        2018 Imaginnovate All Rights Reserverd
                                    </div>
                                </Col>
                            </Row>
                        </Footer>
                    </div>
                );
            }
        }
    }
    export default FooterContent;
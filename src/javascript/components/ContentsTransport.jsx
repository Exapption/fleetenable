    import React, { Component } from 'react';
    import PropTypes from 'prop-types';
    import {
    isMobile,
    isTablet,
    } from 'react-device-detect';
    import intelligentDashboards from '../../images/intelligentDashboards.png';
    import assetVisibility from '../../images/assetVisibility.png';
    import customerExperience from '../../images/customerExperience.png';
    import employeeEngagement from '../../images/employee-engagement.png';
    import { Content,Card,Row,Col,Button} from '../components/common/UIComponents';
    import { black, bold } from 'ansi-colors';

    class ContentsTransport extends Component {
    constructor(props){
    super(props)
    }
    render(){
        if(isMobile || isTablet){
            return(
            <div>
            <Content>
            <div className='content-retail-mobile' style={{ backgroundColor: '#ffffff'}}>
                    <Row>
                        <Col span={24}>
                        <div style={{verticalAlign:'middle'}}>
                        <img className='autoFitImage' src={intelligentDashboards}/>
                        </div>
                        </Col>
                        <Col span={24}>
                        <div>
                        <div style={{color:'#3c6cbc',fontSize:18,fontWeight:bold,paddingTop:'2%'}}>Intelligent Dashboards</div>
                        <div style={{color:'#2c3e50',fontSize:12}}>
                        Executives are presented with wide range of information and it
                        is increasingly becoming difficult to sift through the information 
                        overload to make meaningful decisions. Digital transformation
                        helps in intelligently identifying areas that require attention
                        and provide real-time updates on overall operations. We build
                        integrations with your data sets and provide real-time visibility
                        to the stake holders.
                        </div>
                        </div>
                        </Col>
                    </Row>
            </div>
            <div className='content-retail-mobile' style={{ backgroundColor: '#f4f4f4'}}>
                <Row>
                    <Col span={24}>
                    <div>
                    <div style={{color:'#3c6cbc',fontSize:18,fontWeight:bold}}>Asset Visibility</div>
                    <div style={{color:'#2c3e50',fontSize:12}}>
                    Supply-chain is becoming critical and is impacting the bottom 
                    lineof all enterprises. Visibility into assets and predicting their
                    movement will enhance the utilization factor and increases 
                    competetive advantage. Imaginnovate has provided IOT based
                    solutions to track fleets and manage asseet movement for 
                    maximum utilization.
                    </div>
                    </div>
                    </Col>
                    <Col span={24}>
                    <div style={{paddingRight:'3%', textAlign:'center'} }>
                    <img className='autoFitImage' src={assetVisibility}/>
                    </div>
                    </Col>
                </Row>
            </div>
            <div className='content-retail-mobile' style={{ backgroundColor: '#ffffff'}}>
                    <Row>
                        <Col span={24}>
                        <div>
                        <img className='autoFitImage'  src={customerExperience}/>
                        </div>
                        </Col>
                        <Col span={24}>
                        <div>
                        <div style={{color:'#3c6cbc',fontSize:18,fontWeight:bold}}>Customer Experience</div>
                        <div style={{color:'#2c3e50',fontSize:12}}>
                        At the end of the journey is the Customer and businesses are inves-
                        ting to make sure the overall experience is exceptional for the 
                        Customer. Digitization has disrupted the expectations of the end
                        Customer enabling them to track shipments in real-time and the
                        ability to reach support from anywhere and anytime. Our Retainity
                        platform allows businesses to provide exceptional Customer
                        experience by integrating various touch points and providing 
                        multiple channels for communication.
                        </div>
                        </div>
                        </Col>
                    
                    </Row>
            </div>
            <div className='content-retail-mobile' style={{ backgroundColor: '#f4f4f4'}}>
                    <Row>
                        <Col span={24}>
                        <div>
                            <div style={{color:'#3c6cbc',fontSize:18,fontWeight:bold}}>Employee Engagement</div>
                            <div style={{color:'#2c3e50',fontSize:12}}>
                            With higher levels of attrition in the trucking indsutry, it is 
                            importantto equip employess either behind the wheel or
                            behind the desk withtools that will help them to stay productive
                            and simplify their work process. We have experience in building 
                            custom solutions to  enterprises that improve efficiency of internal
                            teams and help them stay engaged with the company's direction.
                            </div>
                        </div>
                        </Col>
                        <Col span={24}>
                            <div style={{textAlign:'center'}}>
                            <img className='autoFitImage' src={employeeEngagement}/>
                            </div>
                        </Col>
                    </Row>
            </div>
            <div style={{textAlign:'center',padding:'2%',backgroundColor:'white'}}>
                <Button className='learn-more-button'> Learn More
                </Button>
            </div>
            </Content>
            </div>
            );
        }
    return(
        <div>
        <Content>
        <div className='content-retail' style={{ backgroundColor: '#ffffff'}}>
                <Row gutter={16}>
                    <Col md={11}>
                    <div style={{verticalAlign:'middle'}}>
                    <img style={{paddingRight:'5%'}} height='385' width='510' src={intelligentDashboards}/>
                    </div>
                    </Col>
                    <Col md={13}>
                    <div>
                    <div style={{color:'#3c6cbc',fontSize:36,fontWeight:bold,paddingTop:'2%'}}>Intelligent Dashboards</div>
                    <div style={{color:'#2c3e50',fontSize:20}}>
                    Executives are presented with wide range of information and it
                    is increasingly becoming difficult to sift through the information 
                    overload to make meaningful decisions. Digital transformation
                    helps in intelligently identifying areas that require attention
                    and provide real-time updates on overall operations. We build
                    integrations with your data sets and provide real-time visibility
                    to the stake holders.
                    </div>
                    </div>
                    </Col>
                </Row>
        </div>
        <div className='content-retail' style={{ backgroundColor: '#f4f4f4'}}>
                <Row gutter={16}>
                    <Col md={11}>
                    <div>
                    <div style={{color:'#3c6cbc',fontSize:36,fontWeight:bold}}>Asset Visibility</div>
                    <div style={{color:'#2c3e50',fontSize:20}}>
                    Supply-chain is becoming critical and is impacting the bottom 
                    lineof all enterprises. Visibility into assets and predicting their
                    movement will enhance the utilization factor and increases 
                    competetive advantage. Imaginnovate has provided IOT based
                    solutions to track fleets and manage asseet movement for 
                    maximum utilization.
                    </div>
                    </div>
                    </Col>
                    <Col md={13}>
                    <div style={{paddingRight:'3%', textAlign:'center'} }>
                    <img height='350' width='420' src={assetVisibility}/>
                    </div>
                    </Col>
                </Row>
        </div>
        <div className='content-retail' style={{ backgroundColor: '#ffffff'}}>
                <Row gutter={16}>
                    <Col md={10}>
                    <div style={{paddingLeft:40}}>
                    <img height='350' width='312' src={customerExperience}/>
                    </div>
                    </Col>
                    <Col md={14}>
                    <div>
                    <div style={{color:'#3c6cbc',fontSize:36,fontWeight:bold}}>Customer Experience</div>
                    <div style={{color:'#2c3e50',fontSize:20}}>
                    At the end of the journey is the Customer and businesses are inves-
                    ting to make sure the overall experience is exceptional for the 
                    Customer. Digitization has disrupted the expectations of the end
                    customer enabling them to track shipments in real-time and the
                    ability to reach support from anywhere and anytime. Our Retainity
                    platform allows businesses to provide exceptional Customer
                    experience by integrating various touch points and providing 
                    multiple channels for communication.
                    </div>
                    </div>
                    </Col>
                
                </Row>
        </div>
        <div className='content-retail' style={{ backgroundColor: '#f4f4f4'}}>
                <Row gutter={16}>
                    <Col md={12}>
                    <div>
                        <div style={{color:'#3c6cbc',fontSize:36,fontWeight:bold}}>Employee Engagement</div>
                        <div style={{color:'#2c3e50',fontSize:20}}>
                        With higher levels of attrition in the trucking indsutry, it is 
                        importantto equip employess either behind the wheel or
                        behind the desk withtools that will help them to stay productive
                        and simplify their work process. We have experience in building 
                        custom solutions to  enterprises that improve efficiency of internal
                        teams and help them stay engaged with the company's direction.
                        </div>
                    </div>
                    </Col>
                    <Col md={12}>
                        <div style={{textAlign:'center'}}>
                        <img height='252' width='420' src={employeeEngagement}/>
                        </div>
                    </Col>
                </Row>
        </div>
        <div style={{textAlign:'center',padding:'2%',backgroundColor:'white'}}>
            <Button className='learn-more-button'> Learn More
            </Button>
        </div>
        </Content>
    </div>
    );
    }
    }
    export default ContentsTransport;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    isMobile,
    isTablet,
} from 'react-device-detect';
import leftQuote from '../../images/left-quote.svg';
import productStrategy from '../../images/product-strategy.svg';
import mentorShip from '../../images/mentorship.svg';
import starterPackage from '../../images/starterPackage.svg';
import mvp from '../../images/MVP.svg';
import checkMark from '../../images/check-mark.svg';
import customDevelopment from '../../images/customDevelopment.svg';
import { Content,Card,Row,Col} from '../components/common/UIComponents';
import { black, bold } from 'ansi-colors';

class ContentsStartup extends Component {
constructor(props){
    super(props)
}
render(){
    if(isMobile || isTablet){
        return(
            <div style={{padding:5}}>
            <Content>
            <div className='content-startup-first-mobile'>
                    <Row>
                        <Col span={24}>
                        <div>
                        <img className='autoFitImage' src={leftQuote}/>
                        </div>
                        </Col>
                        <Col span={24}>
                        <div className='content-startup-first-text'>
                        Imaginnovate has over 6 years experience in working with some of the most successful startups. 
                        We are a trusted partner in your startup journey and enable the founders to focus on business
                        development while we take care of your technology needs.
                        </div>
                        </Col>
                    </Row>
            </div>
            <div className='content-startup-second-mobile'>
                    <Row>
                        <Col span={24}>
                        <div>
                        <img className='autoFitImage' src={productStrategy}/>
                        </div>
                        </Col>
                        <Col span={24}>
                        <div>
                        <div style={{color:'#3c6cbc',fontSize:18,fontWeight:'bold',paddingTop:80}}>Product Strategy</div>
                        <div style={{color:'#2c3e50',fontSize:12, paddingRight:"10%"}}>
                        Choices made in building the core product architecture play an 
                        important role in the development of a technology product. 
                        Sometimes a technology direction can lead to an endless path,
                        which can cost the Startup time and money. We work with 
                        Startup to understand their technology needs and suggest a 
                        roadmap which will help a startup to move fast and stay agile.
                        </div>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                        <div>
                        <div style={{color:'#3c6cbc',fontSize:18,fontWeight:'bold',paddingTop:80}}>Mentorship</div>
                        <div style={{color:'#2c3e50',fontSize:12}}>
                        We enjoy working with Startups and are committed to their
                        success. We offer mentor sessions to any startups that are 
                        accepted into an incubator or accelerator program.
                        </div>
                        <div style={{fontWeight:'bold',fontSize:12}}>We can help with</div>
                        <Row style={{fontSize:20}}>
                            <Col span={13}>
                            <div><img src={checkMark}/>  Retail</div>
                            <div><img src={checkMark}/>  Transport</div>
                            <div><img src={checkMark}/>  Web Development</div>
                            <div><img src={checkMark}/>  Mobile app Development</div>
                            </Col>
                            <Col style={{paddingLeft:'3%'}} span={11}>
                            <div><img src={checkMark}/>  Technology Strategy</div>
                            <div><img src={checkMark}/>  Ecommerce</div>
                            <div><img src={checkMark}/>  Digital Commerce</div>
                            </Col>
                        </Row>
                        </div>
                        </Col>
                        <Col span={24}>
                        <div style={{textAlign:'center'}}>
                        <img className='autoFitImage' src={mentorShip}/>
                        </div>
                        </Col>
                    </Row>           
                </div>
                <div className='content-startup-engagement-mobile'>
                <div style={{color: '#ff5b30', fontSize:48}}>Engagement Packages</div>
                <div style={{paddingLeft:'2%'}}>
                    <Row gutter={16} type="flex" justify="center">
                        <Col md={8} >
                            <Card className='content-startup-card-custom'>
                            <div className='content-startup-card-header' style={{backgroundColor:'#0404de'}}>
                            <img src={starterPackage}/>
                            </div>
                            <div style={{paddingTop:'5%',fontSize:24,color:'#3c6cbc', fontFamily:'Lato'}}><b>Starter Package</b></div>
                            <div className='content-startup-engagementPackage-text'>
                            Every idea needs to be prototyped & reviewed 
                            before presenting it to a larger audience. Starter 
                            package allows startup founders to create a basic
                            working prototype which can be presented before 
                            trusted audience to get feedback.  Imaginnovate 
                            provides technology strategy & development
                            services in this package
                            </div>
                            <div style={{textAlign:"center",color: '#ff5b30', paddingTop:10, fontFamily:'Lato'}}><b>Who is this for?</b></div>
                            <div className='content-startup-engagementPackage-text'>
                            This package is best suited to startups that are
                            less than 3 months and trying to determine
                            product market fit.
                            </div>
                            </Card>
                        </Col>
                        <Col md={8}>
                        <Card className='content-startup-card-custom'>
                            <div className='content-startup-card-header' style={{backgroundColor:'#31b064'}}>
                            <img src={mvp}/>
                            </div>
                            <div style={{paddingTop:'5%',fontSize:24,color:'#3c6cbc',fontFamily:'Lato'}}><b>MVP</b></div>
                            <div className='content-startup-engagementPackage-text'>
                            A product should be tested in the market with ß 
                            customers. Creating a MVP version of the product
                            requires the startup founders to create a working
                            version that could be taken to the market and put 
                            to test. This is more involved and possibly requires
                            integration with other services depending on the
                            nature of the product.
                            </div>
                            <div style={{textAlign:"center",color: '#ff5b30', paddingTop:10, fontFamily:'Lato'}}><b>Who is this for?</b></div>
                            <div className='content-startup-engagementPackage-text'>
                            This package is best suited to startups that are
                            less than 6 months and when the team has a
                            good understanding on what they plan to build.
                            </div>
                            </Card>
                        </Col>
                        <Col md={8}>
                        <Card className='content-startup-card-custom'>
                            <div className='content-startup-card-header' style={{backgroundColor:'#7f5fce'}}>
                            <img src={customDevelopment}/>
                            </div>
                            <div style={{paddingTop:'5%',fontSize:24,color:'#3c6cbc', fontFamily:'Lato'}}><b>Custom</b></div>
                            <div className='content-startup-engagementPackage-text'>
                            You created an MVP and the product market fit
                            has been experimented. At this stage you are
                            ready to move forward in expanding the product
                            features and positioned to take on the world. 
                            We have engineers to augment your team and 
                            scale cost effectively. We offer 20% discount to
                            startups that are part of our accelerator partner
                            network.
                            </div>
                            </Card>
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
            <div style={{width:'100%'}}>
            <Content>
            <div className='content-startup-first'>
            <Row>
                <Col md={4}>
                <div className="content-startup-leftQuote" style={{float:'right',paddingRight:10}}>
                <img src={leftQuote}/>
                </div>
                </Col>
                <Col md={18}>
                <div className='content-startup-first-text'>
                Imaginnovate has over 6 years experience in working with some of the most successful startups. 
                We are a trusted partner in your startup journey and enable the founders to focus on business
                development while we take care of your technology needs.
                </div>
                </Col>
                <Col md={2}>
                </Col>
            </Row>
            </div>
            <div className='content-startup-second'>
                    <Row gutter={16}>
                        <Col md={11} >
                        <div style={{textAlign:'left'}}>
                        <img height='380' width='400'  src={productStrategy}/>
                        </div>
                        </Col>
                        <Col md={13}>
                        <div>
                        <div style={{color:'#3c6cbc',fontSize:36,fontWeight:'bold',paddingTop:80}}>Product Strategy</div>
                        <div style={{color:'#2c3e50',fontSize:20, paddingRight:"10%"}}>
                        Choices made in building the core product architecture play an 
                        important role in the development of a technology product. 
                        Sometimes a technology direction can lead to an endless path,
                        which can cost the Startup time and money. We work with 
                        Startup to understand their technology needs and suggest a 
                        roadmap which will help a startup to move fast and stay agile.
                        </div>
                        </div>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col md={10}>
                        <div>
                        <div style={{color:'#3c6cbc',fontSize:36,fontWeight:'bold',paddingTop:80}}>Mentorship</div>
                        <div style={{color:'#2c3e50',fontSize:20}}>
                        We enjoy working with Startups and are committed to their
                        success. We offer mentor sessions to any startups that are 
                        accepted into an incubator or accelerator program.
                        </div>
                        <div style={{fontWeight:'bold',fontSize:20}}>We can help with</div>
                        <Row style={{fontSize:20}}>
                            <Col md={13}>
                            <div><img src={checkMark}/>  Retail</div>
                            <div><img src={checkMark}/>  Transport</div>
                            <div><img src={checkMark}/>  Web Development</div>
                            <div><img src={checkMark}/>  Mobile app Development</div>
                            </Col>
                            <Col style={{paddingLeft:'3%'}} md={11}>
                            <div><img src={checkMark}/>  Technology Strategy</div>
                            <div><img src={checkMark}/>  Ecommerce</div>
                            <div><img src={checkMark}/>  Digital Commerce</div>
                            </Col>
                        </Row>
                        </div>
                        </Col>
                        
                        <Col md={14}>
                        <div style={{textAlign:'center'}}>
                        <img height='380' width='420' src={mentorShip}/>
                        </div>
                        </Col>
                    </Row>           
                </div>
                <div className='content-startup-engagement'>
                <div style={{color: '#ff5b30', fontSize:48}}>Engagement Packages</div>
                <div style={{paddingLeft:'2%'}}>
                    <Row gutter={16} type="flex" justify="center">
                        <Col md={8} >
                            <Card className='content-startup-card-custom'>
                            <div className='content-startup-card-header' style={{backgroundColor:'#0404de'}}>
                            <img src={starterPackage}/>
                            </div>
                            <div style={{paddingTop:'5%',fontSize:24,color:'#3c6cbc', fontFamily:'Lato'}}><b>Starter Package</b></div>
                            <div className='content-startup-engagementPackage-text'>
                            Every idea needs to be prototyped & reviewed 
                            before presenting it to a larger audience. Starter 
                            package allows startup founders to create a basic
                            working prototype which can be presented before 
                            trusted audience to get feedback.  Imaginnovate 
                            provides technology strategy & development
                            services in this package
                            </div>
                            <div style={{textAlign:"center",color: '#ff5b30', paddingTop:10, fontFamily:'Lato'}}><b>Who is this for?</b></div>
                            <div className='content-startup-engagementPackage-text'>
                            This package is best suited to startups that are
                            less than 3 months and trying to determine
                            product market fit.
                            </div>
                            </Card>
                        </Col>
                        <Col md={8}>
                        <Card className='content-startup-card-custom'>
                            <div className='content-startup-card-header' style={{backgroundColor:'#31b064'}}>
                            <img src={mvp}/>
                            </div>
                            <div style={{paddingTop:'5%',fontSize:24,color:'#3c6cbc',fontFamily:'Lato'}}><b>MVP</b></div>
                            <div className='content-startup-engagementPackage-text'>
                            A product should be tested in the market with ß 
                            customers. Creating a MVP version of the product
                            requires the startup founders to create a working
                            version that could be taken to the market and put 
                            to test. This is more involved and possibly requires
                            integration with other services depending on the
                            nature of the product.
                            </div>
                            <div style={{textAlign:"center",color: '#ff5b30', paddingTop:10, fontFamily:'Lato'}}><b>Who is this for?</b></div>
                            <div className='content-startup-engagementPackage-text'>
                            This package is best suited to startups that are
                            less than 6 months and when the team has a
                            good understanding on what they plan to build.
                            </div>
                            </Card>
                        </Col>
                        <Col md={8}>
                        <Card className='content-startup-card-custom'>
                            <div className='content-startup-card-header' style={{backgroundColor:'#7f5fce'}}>
                            <img src={customDevelopment}/>
                            </div>
                            <div style={{paddingTop:'5%',fontSize:24,color:'#3c6cbc', fontFamily:'Lato'}}><b>Custom</b></div>
                            <div className='content-startup-engagementPackage-text'>
                            You created an MVP and the product market fit
                            has been experimented. At this stage you are
                            ready to move forward in expanding the product
                            features and positioned to take on the world. 
                            We have engineers to augment your team and 
                            scale cost effectively. We offer 20% discount to
                            startups that are part of our accelerator partner
                            network.
                            </div>
                            </Card>
                        </Col>
                    </Row>        
                </div>
                </div>
            </Content>
        </div>
        );
    }
}
}
export default ContentsStartup;
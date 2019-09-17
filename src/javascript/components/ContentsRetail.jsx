    import React, { Component } from 'react';
    import PropTypes from 'prop-types';
    import {
    isMobile,
    isTablet,
    } from 'react-device-detect';
    import mobileCommerce from '../../images/mobileCommerce.png';
    import scalability from '../../images/scalability.png';
    import retainity from '../../images/retainity.png';
    import checked from '../../images/checked.svg';
    import userBehaviorEngagement from '../../images/user-behavior-engagement.png';
    import { Content,Card,Row,Col,Button, Modal,Input} from '../components/common/UIComponents';
    import { black, bold } from 'ansi-colors';
    import onClickOutside from "react-onclickoutside";

    class ContentsRetail extends Component {
    constructor(props){
    super(props);
    this.state={
        visibleModal:false,
        visibleSuccessModal:false,
        inputName:'',
        inputEmail: '',


    }
    this.renderConfirm = this.renderConfirm.bind(this);
    this.handleOk = this.handleOk.bind(this);
 
    }
    renderConfirm = e => {
        this.setState({
            visible: true,
            inputName:'',
            inputEmail:'',
        })
    }

    handleOk(e){
        this.setState({
            visible: false,
            visibleSuccessModal: true,
        })
    }

    handleClickOutside = e => {
        
        if(e.target.className != 'ant-modal-body' && e.target.className != '' && e.target.className !='ant-input'){
            this.setState({
                visible: false,
                visibleSuccessModal: false,
            })
        } if(e.target.className.includes("confirm")){

        }     
      
    }

    render(){
        if(isMobile || isTablet){
            return(
                <div>
                <Content>
                <div className='content-retail-mobile' style={{ backgroundColor: '#ffffff'}}>
                        <Row>
                            <Col span={24}>
                                <div style={{textAlign:'center',verticalAlign:'middle'}}>
                                <img className='autoFitImage' src={mobileCommerce}/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <div style={{padding:5}}>
                                <div style={{color:'#3c6cbc', fontSize:18, fontWeight:bold}}>Mobile Commerce</div>
                                <div style={{color:'#2c3e50',fontSize:12}}>
                                Executives are presented with wide range of information and it is increasingly becoming difficult to sift through the information overload to make meaningful decisions. Digital transformation helps in intelligently identifying areas that require attention and provide real-time updates on overall operations. We build integrations with your data sets and provide real-time visibility to the stake holders.
                                </div>
                                </div>
                            </Col>
                        </Row>
                </div>
                <div className='content-retail-mobile' style={{ backgroundColor: '#f4f4f4'}}>
                        <Row>
                            <Col span={24}>
                                <div style={{padding:5}}>
                                <div style={{color:'#3c6cbc',fontSize:18,fontWeight:bold}}>Scalability</div>
                                <div style={{color:'#2c3e50',fontSize:12}}>
                                As the demand is seasonal in the retail world, choosing the right
                                platform at every stage is important for any ecommerce store.
                                Our experts understand your growth plans and assist in identifying 
                                the right platform the best suits your strategy while our 
                                implementation team makes sure that the time to market matches
                                your business direction.
                                </div>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div style={{textAlign:'center',verticalAlign:'middle'}}>
                                <img className='autoFitImage' src={scalability}/>
                                </div>
                            </Col>
                        </Row>
                </div>
                <div className='content-retail-mobile' style={{ backgroundColor: '#ffffff'}}>
                        <Row>
                            <Col span={24}>
                            <div style={{paddingTop:'1%'}} >
                            <img className='autoFitImage' src={userBehaviorEngagement}/>
                            </div>
                            </Col>
                            <Col span={24}>
                            <div style={{padding:5}}>
                            <div style={{color:'#3c6cbc',fontSize:18,fontWeight:bold}}>User behavior & Engagement</div>
                            <div style={{color:'#2c3e50',fontSize:12}}>
                            Customer journey across the path to purchase is critical in the 
                            retail / ecommerce space. We work with you to define data points
                            to capture customer behavior to help completing the sale and
                            simplify remarketing.
                            </div>
                            </div>
                            </Col>
                        </Row>
                </div>
                <div className='content-retail-mobile' style={{ backgroundColor: '#003ee7'}}>
                        <Row>
                            <Col span={24}>
                            <div>
                            <img className='autoFitImage' src={retainity}/>
                            </div>
                            </Col>
                            <Col span={24}>
                            <div style={{padding:5}}>
                            <div style={{color:'#ffffff',fontSize:12}}>
                                <div>
                                <b>Our Retainity</b> platform allows businesses to track customer 
                                journeys across channels and excite them with conextual
                                message at each touch point. 
                                </div>
                                <div>
                                Would you like to know more about how Retainity can be
                                customized to your business needs? 
                                </div>
                            </div>
                            <div style={{paddingTop:'5%',textAlign:'center'}}>
                                <Button width='10%' className='imExcited-button' onClick={this.renderConfirm.bind(this)}><b> Im Excited</b>
                                </Button>
                                <Modal
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    closable={false}
                                    footer={[
                                    
                                    ]}
                                   id='popup' width="60%" >
                                <div style={{margin:'auto',paddingTop:20,paddingBottom:20,width:'50%', textAlign:'center'}}>
                                <span className='inputDetails'><Input style={{opacity: 0}} ref={el => this.inputName = el} placeholder='Name'/></span>
                                </div>
                                <div style={{margin:'auto',width:'50%',paddingBottom:20, textAlign:'center'}}>
                                <span className='inputDetails'><Input style={{opacity: 0}} ref={el => this.inputEmail = el} placeholder='Email'/></span>
                                </div>
                                <div style={{textAlign:'center'}}>
                                    <Button className='confirm' block style={{width:'50%', color:'#ff5b30'}} onClick={this.handleOk.bind(this)} ><b>Confirm</b></Button>
                                </div>
                                </Modal>
                                <Modal
                                    visible={this.state.visibleSuccessModal}
                                    onOk={this.handleOk}
                                    closable={false}
                                    footer={[
                                    
                                    ]}
                                    width="60%" >
                                <div style={{marginLeft:'auto', marginRight:'auto',textAlign:'center', paddingTop:30}}>
                                <img src={checked}/>
                                </div>
                                <div style={{margin:'auto', textAlign:'center', color:'#ffff',fontFamily:'Lato', fontSize:14}}>
                                    Thank you for getting in touch, we will get back to you very soon! 
                                </div>
                                </Modal>
                            </div>
                            </div>
                            </Col>
                        
                        </Row>
                </div>
                </Content>
                </div>
            );
        }
        else{
            return(
                <div>
                <Content>
                <div className='content-retail' style={{ backgroundColor: '#ffffff'}}>
                        <Row gutter={16}>
                            <Col md={12}>
                                <div style={{textAlign:'center',verticalAlign:'middle'}}>
                                <img height='231' width='160' src={mobileCommerce}/>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div>
                                <div style={{color:'#3c6cbc',fontSize:36,fontWeight:bold}}>Mobile Commerce</div>
                                <div style={{color:'#2c3e50',fontSize:20}}>
                                Executives are presented with wide range of information and it is increasingly becoming difficult to sift through the information overload to make meaningful decisions. Digital transformation helps in intelligently identifying areas that require attention and provide real-time updates on overall operations. We build integrations with your data sets and provide real-time visibility to the stake holders.
                                </div>
                                </div>
                            </Col>
                        </Row>
                </div>
                <div className='content-retail' style={{ backgroundColor: '#f4f4f4'}}>
                        <Row gutter={16}>
                            <Col md={12}>
                                <div>
                                <div style={{color:'#3c6cbc',fontSize:36,fontWeight:bold}}>Scalability</div>
                                <div style={{color:'#2c3e50',fontSize:20}}>
                                As the demand is seasonal in the retail world, choosing the right
                                platform at every stage is important for any ecommerce store.
                                Our experts understand your growth plans and assist in identifying 
                                the right platform the best suits your strategy while our 
                                implementation team makes sure that the time to market matches
                                your business direction.
                                </div>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div style={{float:'right'}}>
                                <img height='320' width='342' src={scalability}/>
                                </div>
                            </Col>
                        </Row>
                </div>
                <div className='content-retail' style={{ backgroundColor: '#ffffff'}}>
                        <Row gutter={16}>
                            <Col md={13}>
                            <div style={{paddingTop:'1%'}}>
                            <img height='300' width='420' src={userBehaviorEngagement}/>
                            </div>
                            </Col>
                            <Col md={11}>
                            <div>
                            <div style={{color:'#3c6cbc',fontSize:36,fontWeight:bold}}>User behavior & Engagement</div>
                            <div style={{color:'#2c3e50',fontSize:20}}>
                            Customer journey across the path to purchase is critical in the 
                            retail / ecommerce space. We work with you to define data points
                            to capture customer behavior to help completing the sale and
                            simplify remarketing.
                            </div>
                            </div>
                            </Col>
                        
                        </Row>
                </div>
                <div className='content-retail' style={{ backgroundColor: '#003ee7'}}>
                        <Row gutter={16}>
                            <Col md={12}>
                            <div>
                            <img height='110' width='365' src={retainity}/>
                            </div>
                            </Col>
                            <Col md={12}>
                            <div>
                            <div style={{color:'#ffffff',fontSize:20}}>
                                <div>
                                <b>Our Retainity</b> platform allows businesses to track customer 
                                journeys across channels and excite them with conextual
                                message at each touch point. 
                                </div>
                                <div>
                                Would you like to know more about how Retainity can be
                                customized to your business needs? 
                                </div>
                            </div>
                            <div style={{paddingTop:'5%'}}>
                                <Button width='10%' className='imExcited-button' onClick={this.renderConfirm.bind(this)}><b> Im Excited</b>
                                </Button>
                                <Modal
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    closable={false}
                                    footer={[
                                    
                                    ]}
                                   id='popup' width="60%" >
                                <div style={{margin:'auto',paddingTop:20,paddingBottom:20,width:'50%', textAlign:'center'}}>
                                <span className='inputDetails'><Input style={{opacity: 0}} ref={el => this.inputName = el} placeholder='Name'/></span>
                                </div>
                                <div style={{margin:'auto',width:'50%',paddingBottom:20, textAlign:'center'}}>
                                <span className='inputDetails'><Input style={{opacity: 0}} ref={el => this.inputEmail = el} placeholder='Email'/></span>
                                </div>
                                <div style={{textAlign:'center'}}>
                                    <Button className='confirm' block style={{width:'50%', color:'#ff5b30'}} onClick={this.handleOk.bind(this)} ><b>Confirm</b></Button>
                                </div>
                                </Modal>
                                <Modal
                                    visible={this.state.visibleSuccessModal}
                                    onOk={this.handleOk}
                                    closable={false}
                                    footer={[
                                    
                                    ]}
                                    width="60%" >
                                <div style={{marginLeft:'auto', marginRight:'auto',textAlign:'center', paddingTop:30}}>
                                <img src={checked}/>
                                </div>
                                <div style={{margin:'auto', textAlign:'center', color:'#ffff',fontFamily:'Lato', fontSize:14}}>
                                    Thank you for getting in touch, we will get back to you very soon! 
                                </div>
                                </Modal>
                            </div>
                            </div>
                            </Col>
                        
                        </Row>
                </div>
                </Content>
            </div>
            );
        }
    }
    }
    export default onClickOutside(ContentsRetail);
                import React, { Component } from 'react';
                import PropTypes from 'prop-types';
                import {
                    isMobile,
                    isTablet,
                    BrowserView,
                    MobileView,
                } from 'react-device-detect';
                import { Header,Row,Col ,Tabs , Menu, Icon} from '../components/common/UIComponents';
                import ImaginnovateLogo from '../../images/v-imaginnovate-logo/v-imaginnovate.png';
                import ImaginnovateLogoOnScroll from '../../images/onScrollLogo.png';
                import menu from '../../images/menu.svg';
                import { NavLink } from 'react-router-dom';
                import favIcon from '../../images/favicon.ico';
                import { Drawer, List, NavBar } from 'antd-mobile';

                const SubMenu = Menu.SubMenu;

                class HeaderMenu extends Component {
                constructor(props){
                    super(props);
                    this.state={
                    color:'inherit',
                    logo:ImaginnovateLogo,
                    tabFontColor:'white',
                    current: '1',
                    isHidden: false,
                    }
                }

                handleMenuClick = (e) => {
                    this.setState({
                        current: e.key,
                        });    
                }

                handleIndustriesMenuOn = (e) =>{
                this.setState({
                    isHidden: true,
                })
                }
                handleIndustriesMenuOut = (e) =>{
                    this.setState({
                    isHidden: false,
                })
                }
                listenScrollEvent = e => {
                    if (window.scrollY > 80) {
                    this.setState({color: 'white', logo:ImaginnovateLogoOnScroll, tabFontColor:'#575757'})
                    } else {
                    this.setState({color: 'inherit', logo:ImaginnovateLogo, tabFontColor:'white'})
                    }
                }

                componentWillMount() {
                    document.title='Digital transformation';
                    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                    link.type = 'image/x-icon';
                    link.rel = 'shortcut icon';
                    link.href = favIcon;
                    document.getElementsByTagName('head')[0].appendChild(link);
                }
                componentDidMount(){
                    window.addEventListener('scroll', this.listenScrollEvent);
                }
                render(){
                    const getLocation = window.location.href;

                    if(isMobile || isTablet){
                        return(
                                <div>
                                <div>
                                <Header className='stickyBar' style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor:this.state.color}}>
                                        <div>
                                        <Row type="flex" justify="center">
                                            <Col span={5} className='headerLogo'>
                                            <img src={this.state.logo} className='logo-size'/>
                                            </Col>
                                            <Col span={19}>
                                            <div className='menu-div'>
                                            <Menu onClick={this.handleMenuClick}
                                            selectedKeys={[this.state.current]}
                                            mode='horizontal' className='headerMenuItem'
                                            >
                                            <Menu.Item key="1">
                                                <NavLink to='/'>
                                                    <div className="headerMenufont" style={{color:this.state.tabFontColor, fontWeight: (!getLocation.includes('industries') && ! getLocation.includes('startups') && ! getLocation.includes('about') && ! getLocation.includes('contact'))?'bold':'normal'}}>Home</div>
                                                </NavLink>
                                            </Menu.Item>
                                            <SubMenu className = "industries-menu" onMouseOver={this.handleIndustriesMenuOn.bind(this)}
                                                onMouseOut ={this.handleIndustriesMenuOut.bind(this)}
                                                title={<span className="submenu-title-wrapper headerMenufont" style={{color:this.state.tabFontColor, fontWeight: (getLocation.includes('retail') || getLocation.includes('transport')) ?'bold':'normal'}}  
                                                >Industries {this.state.isHidden ? <Icon type="up"/> :<Icon type="down"/>}</span>} key="2">
                                                <Menu.Item key="2:1"> 
                                                    <NavLink to='/industries/retail'>
                                                        <div style={{fontWeight:getLocation.includes('retail')?'bold':'normal',color:'white' }}>Retail & ecommerce</div>
                                                    </NavLink>
                                                </Menu.Item>
                                                <Menu.Item  key="2:2">
                                                    <NavLink to='/industries/transport'>
                                                        <div style={{fontWeight:getLocation.includes('transport')?'bold':'normal', color:'white'}}>Transportation & Logistics</div>
                                                    </NavLink>
                                                </Menu.Item>
                                            </SubMenu>
                
                                            <Menu.Item key="3">
                                            <NavLink to='/startups'>
                                                <div className="headerMenufont" style={{color:this.state.tabFontColor, fontWeight:getLocation.includes('startups')?'bold':'normal'}}>Startups</div>
                                            </NavLink>
                                            </Menu.Item>
                                            <Menu.Item key='4'>
                                            <NavLink to='/about'>
                                                <div className="headerMenufont" style={{color:this.state.tabFontColor, fontWeight:getLocation.includes('about')?'bold':'normal'}}>About</div>
                                            </NavLink>
                                            </Menu.Item>
                                            <Menu.Item key='5'>
                                            <NavLink to='/contactus'>
                                                <div className="headerMenufont" style={{color:this.state.tabFontColor, fontWeight:getLocation.includes('contactus')?'bold':'normal'}}>Contact us</div>
                                            </NavLink>
                                            </Menu.Item>
                                            </Menu> 
                                                </div>
                                            </Col>
                                        </Row>
                                        </div>
                                </Header>
                                </div>
                                <div className={getLocation.includes('startups') ? 'header-startuppage-mobile' : getLocation.includes('retail') ? 'header-retailpage-mobile': getLocation.includes('transport') ? 'header-transportpage-mobile': getLocation.includes('about') ? 'header-aboutpage-mobile':getLocation.includes('contact') ? 'header-contactpage-mobile':'header-homepage-mobile'}>
                                        {
                                            getLocation.includes('retail') &&
                                            <div>
                                                <div className='tag-industries tag1-industry'>
                                            <Row >
                                                <Col md={24}>
                                                Retail &
                                                </Col>
                                            </Row>
                                                </div>
                                                <div className='tag-industries tag2-industry'>
                                            <Row >
                                                <Col md={24}>
                                                eCommerce
                                                </Col>
                                            </Row>
                                                </div>
                                            </div>
                                        }
                                        {
                                            getLocation.includes('transport') &&
                                            <div>
                                                <div className='tag-industries tag1-industry'>
                                                <Row cl>
                                                    <Col md={24}>
                                                    Transportation 
                                                    </Col>
                                                </Row>
                                                </div>
                                                <div className='tag-industries tag2-industry'>
                                                <Row>
                                                    <Col md={24}>
                                                    & Logistics
                                                    </Col>
                                                </Row>
                                                </div>
                                            </div>
                                        }
                                        {
                                            getLocation.includes('startups') &&
                                            <div>
                                            <Row className='tag1-startup'>
                                                <Col md={24}>
                                                Startups
                                                </Col>
                                            </Row>
                                            </div>
                                        }
                                        {
                                            ! getLocation.includes('home') && ! getLocation.includes('startups') && ! getLocation.includes('transport') && ! getLocation.includes('retail') &&  ! getLocation.includes('about') &&  ! getLocation.includes('contactus') &&
                                            <div>
                                            <div className="header-heading-tagline-mobile tag1-home-mobile">
                                                    <Row>
                                                        <Col span={24}>
                                                        Design
                                                        </Col>
                                                    </Row>
                                            </div>
                                            <div className="header-heading-tagline-mobile tag2-home-mobile">
                                                    <Row>
                                                        <Col span={24}>
                                                        Develop
                                                        </Col>
                                                    </Row>
                                            </div>
                                            <div className="header-heading-tagline-mobile tag3-home-mobile">
                                                    <Row>
                                                        <Col span={24}>
                                                        Deliver
                                                        </Col>
                                                    </Row>
                                            </div>
                                            </div>
                                        }
                                       
                                </div> 
                            </div>    
                        );
                    }
                    else{
                        return(
                            <div>
                            <div>
                            <Header className='stickyBar' style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor:this.state.color}}>
                                    <div>
                                    <Row type="flex" justify="center">
                                    <Col md={5} className='headerLogo'>
                                    <img src={this.state.logo} className='logo-size'/>
                                    </Col>
                                    <Col md={19}>
                                        <div className='menu-div'>
                                        <Menu onClick={this.handleMenuClick}
                                        selectedKeys={[this.state.current]}
                                        mode='horizontal' className='headerMenuItem'
                                        >
                                    <Menu.Item key="1">
                                        <NavLink to='/'>
                                            <div className="headerMenufont" style={{color:this.state.tabFontColor, fontWeight: (!getLocation.includes('industries') && ! getLocation.includes('startups') && ! getLocation.includes('about') && ! getLocation.includes('contact'))?'bold':'normal'}}>Home</div>
                                        </NavLink>
                                    </Menu.Item>
                                    <SubMenu className = "industries-menu" onMouseOver={this.handleIndustriesMenuOn.bind(this)}
                                        onMouseOut ={this.handleIndustriesMenuOut.bind(this)}
                                        title={<span className="submenu-title-wrapper headerMenufont" style={{color:this.state.tabFontColor, fontWeight: (getLocation.includes('retail') || getLocation.includes('transport')) ?'bold':'normal'}}  
                                        >Industries {this.state.isHidden ? <Icon type="up"/> :<Icon type="down"/>}</span>} key="2">
                                        <Menu.Item key="2:1"> 
                                            <NavLink to='/industries/retail'>
                                                <div style={{fontWeight:getLocation.includes('retail')?'bold':'normal',color:'white' }}>Retail & ecommerce</div>
                                            </NavLink>
                                        </Menu.Item>
                                        <Menu.Item  key="2:2">
                                            <NavLink to='/industries/transport'>
                                                <div style={{fontWeight:getLocation.includes('transport')?'bold':'normal', color:'white'}}>Transportation & Logistics</div>
                                            </NavLink>
                                        </Menu.Item>
                                    </SubMenu>
        
                                    <Menu.Item key="3">
                                    <NavLink to='/startups'>
                                        <div className="headerMenufont" style={{color:this.state.tabFontColor, fontWeight:getLocation.includes('startups')?'bold':'normal'}}>Startups</div>
                                    </NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='4'>
                                    <NavLink to='/about'>
                                        <div className="headerMenufont" style={{color:this.state.tabFontColor, fontWeight:getLocation.includes('about')?'bold':'normal'}}>About</div>
                                    </NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='5'>
                                    <NavLink to='/contactus'>
                                        <div className="headerMenufont" style={{color:this.state.tabFontColor, fontWeight:getLocation.includes('contactus')?'bold':'normal'}}>Contact us</div>
                                    </NavLink>
                                    </Menu.Item>
                                        </Menu> 
        
                                            </div>
                                        </Col>
                                    </Row>
                                    </div>
                                </Header>
                                </div>
                                <div className={getLocation.includes('startups') ? 'header-startuppage' : getLocation.includes('retail') ? 'header-retailpage': getLocation.includes('transport') ? 'header-transportpage': getLocation.includes('about') ? 'header-aboutpage':getLocation.includes('contact') ? 'header-contactpage':'header-homepage'}>
                                <Header >
                                <div>
                                    {
                                        getLocation.includes('retail') &&
                                        <div>
                                            <div className='tag-industries tag1-industry'>
                                        <Row >
                                            <Col md={24}>
                                            Retail &
                                            </Col>
                                        </Row>
                                            </div>
                                            <div className='tag-industries tag2-industry'>
                                        <Row >
                                            <Col md={24}>
                                            eCommerce
                                            </Col>
                                        </Row>
                                            </div>
                                        </div>
                                    }
                                    {
                                        getLocation.includes('transport') &&
                                        <div>
                                            <div className='tag-industries tag1-industry'>
                                            <Row cl>
                                                <Col md={24}>
                                                Transportation 
                                                </Col>
                                            </Row>
                                            </div>
                                            <div className='tag-industries tag2-industry'>
                                            <Row>
                                                <Col md={24}>
                                                & Logistics
                                                </Col>
                                            </Row>
                                            </div>
                                        </div>
                                    }
                                    {
                                        getLocation.includes('startups') &&
                                        <div>
                                        <Row className='tag1-startup'>
                                            <Col md={24}>
                                            Startups
                                            </Col>
                                        </Row>
                                        </div>
                                    }
                                    {
                                        getLocation.includes('home') &&
                                        <div>
                                        <div className="header-heading-tagline tag1-home">
                                                <Row>
                                                    <Col md={24}>
                                                    Design
                                                    </Col>
                                                </Row>
                                        </div>
                                        <div className="header-heading-tagline tag2-home">
                                                <Row>
                                                    <Col md={24}>
                                                    Develop
                                                    </Col>
                                                </Row>
                                        </div>
                                        <div className="header-heading-tagline tag3-home">
                                                <Row>
                                                    <Col md={24}>
                                                    Deliver
                                                    </Col>
                                                </Row>
                                        </div>
                                        </div>
                                    }
                                    {
                                            getLocation.includes('about') &&
                                            <div className="header-heading-about-tagline align-center">
                                                <div> We dare to dream big and we are <label><b>passionate</b> </label>about <label><b>technology.</b></label></div>
                                            </div>
                                    }
                                    {
                                            getLocation.includes('contactus') &&
                                            <div className="header-heading-about-tagline align-center">
                                                <div>Discuss your next project with us</div>
                                            </div>
                                    }
                                    {
                                        ! getLocation.includes('home') && ! getLocation.includes('startups') && ! getLocation.includes('transport') && ! getLocation.includes('retail') &&  ! getLocation.includes('about') &&  ! getLocation.includes('contactus') &&
                                        <div>
                                        <div className="header-heading-tagline tag1-home">
                                                <Row>
                                                    <Col md={24}>
                                                    Design
                                                    </Col>
                                                </Row>
                                        </div>
                                        <div className="header-heading-tagline tag2-home">
                                                <Row>
                                                    <Col md={24}>
                                                    Develop
                                                    </Col>
                                                </Row>
                                        </div>
                                        <div className="header-heading-tagline tag3-home">
                                                <Row>
                                                    <Col md={24}>
                                                    Deliver
                                                    </Col>
                                                </Row>
                                        </div>
                                        </div>
                                    }
                            </div>
                                </Header>
                            </div>
                            </div>
                            );
                    }
                    
                 }
                }
                export default HeaderMenu;
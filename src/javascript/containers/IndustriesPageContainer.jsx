    import React, { Component } from 'react';
    import PropTypes from 'prop-types';
    import {
        isMobile,
        isTablet,
    } from 'react-device-detect';
    import { Footer } from '../components/common/UIComponents';

    class IndustriesPageContainer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='footer-content'>
        <Footer>
                <div>
                2018 Imaginnovate All Rights Reserverd
                </div>
        </Footer>
        
        </div>
        );
    }
    }
    export default IndustriesPageContainer;
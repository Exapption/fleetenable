    import React, { Component } from 'react';
    import PropTypes from 'prop-types';
    import {
        isMobile,
        isTablet,
    } from 'react-device-detect';
    import ContentsRetail from '../components/ContentsRetail';
    import Contactus from '../components/Contactus';

    class RetailPageContainer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <ContentsRetail/>
                {/* <Contactus/> */}
        </div>
        );
    }
    }
    export default RetailPageContainer;

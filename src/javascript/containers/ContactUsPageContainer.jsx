    import React, { Component } from 'react';
    import PropTypes from 'prop-types';
    import {
        isMobile,
        isTablet,
    } from 'react-device-detect';
    import { Footer } from '../components/common/UIComponents';
    import ContentsContactUs from '../components/ContentsContactUs';

    class ContactUsPageContainer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <ContentsContactUs/>
            </div>
        );
    }
    }
    export default ContactUsPageContainer;

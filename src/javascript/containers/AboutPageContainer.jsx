    import React, { Component } from 'react';
    import PropTypes from 'prop-types';
    import {
        isMobile,
        isTablet,
    } from 'react-device-detect';
    import { Footer } from '../components/common/UIComponents';
    import ContentsAbout from '../components/ContentsAbout';

    class AboutPageContainer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <ContentsAbout/>
           </div>
        );
    }
    }
    export default AboutPageContainer;

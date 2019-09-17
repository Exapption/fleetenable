    import React, { Component } from 'react';
    import PropTypes from 'prop-types';
    import {
        isMobile,
        isTablet,
    } from 'react-device-detect';
    import { Footer } from '../components/common/UIComponents';
    import HeaderMenu from '../components/HeaderMenu';
    import ContentsStartup from '../components/ContentsStartup';
    import Contactus from '../components/Contactus';

    class StartUpsPageContainer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <ContentsStartup/>
                {/* <Contactus/> */}
        </div>
        );
    }
    }
    export default StartUpsPageContainer;

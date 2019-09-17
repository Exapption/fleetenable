    import React, { Component } from 'react';
    import PropTypes from 'prop-types';
    import {
        isMobile,
        isTablet,
    } from 'react-device-detect';
    import ContentsTransport from '../components/ContentsTransport';
    import Contactus from '../components/Contactus';

    class TransLogisticPageContainer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <ContentsTransport/>
            {/*  <Contactus/> */}
        </div>
        );
    }
    }
    export default TransLogisticPageContainer;

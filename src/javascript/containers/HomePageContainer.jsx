    import React, { Component } from 'react';
    import PropTypes from 'prop-types';
    import {
        isMobile,
        isTablet,
    } from 'react-device-detect';
    import { Footer } from '../components/common/UIComponents';
    import HeaderMenu from '../components/HeaderMenu';
    import Contents from '../components/Contents';


    class HomePageContainer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
               <Contents/> 
            </div>
        );
    }
    }
    export default HomePageContainer;

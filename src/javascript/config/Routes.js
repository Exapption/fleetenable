import HomePageContainer from '../containers/HomePageContainer';
import IndustriesPageContainer from '../containers/IndustriesPageContainer';
import StartUpsPageContainer from '../containers/StartUpsPageContainer';
import AboutPageContainer from '../containers/AboutPageContainer';
import ContactUsPageContainer from '../containers/ContactUsPageContainer'; 
import RetailPageContainer from '../containers/RetailPageContainer'; 
import TransLogisticPageContainer from '../containers/TransLogisticPageContainer'; 

const AppRoutes = [
  {
    key: '000', exact: true, path: '/', component: HomePageContainer,
  },
  {
    key: '001', exact: true, path: '/industries', component: IndustriesPageContainer,
  },
  {
    key: '002', exact: true, path: '/startups', component: StartUpsPageContainer,
  },
  {
    key: '003', exact: true, path: '/about', component: AboutPageContainer,
  },
  {
    key: '004', exact: true, path: '/contactus', component: ContactUsPageContainer,
  },
  {
    key: '005', exact: true, path: '/home', component: HomePageContainer,
  },
  {
    key: '006', exact: true, path: '/industries/retail', component: RetailPageContainer,
  },
  {
    key: '007', exact: true, path: '/industries/transport', component: TransLogisticPageContainer,
  },
];

export default AppRoutes;

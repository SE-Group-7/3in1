import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import begin from './begin';

import cheflogin from './cheflogin';
import chefregister from './chefregister';
import chefmain from './chefmain';
import chefdetail from './chefdetail';
import chefdone from './chefdone';

import managerlogin from './managerlogin';
import managermenu from './managermenu';
import manageranalytics from './manageranalytics'
import managerfood from './managerfood'
import managertable from './managertable'
import managertimesheet from './managertimesheet'

import customerlogin from './customerlogin';
import customermenu from './customermenu';
import ordersummary from './ordersummary';
import CardPayment from './CardPayment';

const stack = createStackNavigator({
    begin: {screen:begin},
    
    //chef
    cheflogin: {screen: cheflogin},
    chefregister: { screen: chefregister },
    chefmain: { screen: chefmain},
    chefdetail: {screen: chefdetail},
    chefdone: {screen: chefdone},

    //manager
    managerlogin: {screen: managerlogin},
    managermenu: {screen: managermenu},
    manageranalytics: {screen: manageranalytics},
    managerfood: {screen:managerfood},
    managertable: {screen: managertable},
    managertimesheet: {screen: managertimesheet},

    //customer
    customerlogin: {screen: customerlogin},
    customermenu: {screen: customermenu},
    ordersummary: {screen: ordersummary},
    CardPayment: {screen: CardPayment}

});
 
const AppNavigator = createAppContainer(stack);

export default AppNavigator;
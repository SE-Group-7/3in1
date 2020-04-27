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
import emprating from './emprating'
import popularitem from './popularitem'
import traffic from './traffic'
import netprofit from './netprofit'
import remarks from './remarks'
import managerfood from './managerfood'
import managertable from './managertable'
import managertimesheet from './managertimesheet'
import table1 from './tablepage1'
import table2 from './tablepage2'
import table3 from './tablepage3'
import table4 from './tablepage4'
import table5 from './tablepage5'
import editmenu from './editmenu'

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
    emprating: {screen: emprating},
    popularitem: {screen: popularitem},
    traffic: {screen: traffic},
    netprofit: {screen: netprofit},
    remarks: {screen: remarks},
    managerfood: {screen:managerfood},
    managertable: {screen: managertable},
    managertimesheet: {screen: managertimesheet},
    table1: {screen: table1},
    table2: {screen: table2},
    table3: {screen: table3},
    table4: {screen: table4},
    table5: {screen: table5},
    editmenu: {screen: editmenu},


    //customer
    customerlogin: {screen: customerlogin},
    customermenu: {screen: customermenu},
    ordersummary: {screen: ordersummary},
    CardPayment: {screen: CardPayment}

});
 
const AppNavigator = createAppContainer(stack);

export default AppNavigator;
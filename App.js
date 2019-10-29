import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Screens/Login';
import RecieveOrder from './Screens/RecieveOrder'

const MainNavigator = createStackNavigator({
  
  RecieveOrder:{screen: RecieveOrder},
  Login: {screen: Login},
  
 
},{
  headerMode:'none'
});

const App = createAppContainer(MainNavigator);

export default App

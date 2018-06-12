import React,{Component} from 'react'
import config from './config.json';
import styles from './Greeter.css'
// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = config.text;
//   return greet;
// };
class Greeter extends Component{
	render(){
		return(
			<div className={styles.root}>
				{config.text}
			</div>
		);
	}
}
export default Greeter
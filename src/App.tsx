import { useState } from 'react';
import React from 'react';
import { Data } from '.';
// import logo from './logo.svg';
// import './App.css';

// const App: React.FC<Data> = (props) => {
// //  const {header, content, footer } = props
// 	return (
// 		<div>
//       {props.header}
//       {props.content}
//       {props.footer}
//     </div>

// 	);
// }

const App: React.FC<Data> = ({header,footer,main}) => {
	let arr = useState("");
	let [val, changeVal] = arr
	return (
		<div>
			<header><input type="text" onChange={(e) =>  {
				alert(e.target.value)
			}} /></header>
			<main>
				<h1>{val}</h1>
				<input type="text" onChange={(e) =>  {
					changeVal(e.target.value)
			}} /></main>
			<footer><button onClick={(e) =>  {
					changeVal("https://cdn6.dissolve.com/p/D25_38_548/D25_38_548_1200.jpg")
			}}>click</button><img src={val} alt="" /></footer>
		</div>
	);
};
export default App;

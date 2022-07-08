import React, { useState } from "react";
import Nav from "./Nav";
import HogsContainer from "./HogsContainer";
import hogData from "../porkers_data";
import HogFilter from "./HogFilter";

function App() {

	let [hogs, setHogs] = useState(hogData)
//-----------------------------------------------------------------------------------------
	let [hogFilter, setHogFilter] = useState(false)

	function handleFilterChange(){
		setHogFilter(!hogFilter)
	}

	let hogsGreasedArr = hogs.filter(hog => hog.greased || hogFilter === false)
	//the intere operation will be true if one condition is true
	console.log(hogsGreasedArr)
//-------------------------------------------------------------------------------------
	let [hogSort, setHogSort] = useState('name') //name vai ser meu default value para depois eu colocar weight como a outra opcao (itine condition)

	function handleSortChange(event){
		console.log(event.target.value)
		setHogSort(event.target.value) //it is going to change the value of hogSort to name or weight depending on my target (name or weight)
	} //setHogSort always will change hogSort

	hogsGreasedArr.sort((hog1, hog2) => { //here they are objs (hog1 and hog2)
		if ( hogSort === 'name'){
			return hog1.name.localeCompare(hog2.name) //here I need to turn them into strings, thats why .name		
		}else if (hogSort === 'weight'){
			return hog1.weight - hog2.weight  //here I need to use the weight key to get the value that I want to sort on
		}
	})



	return (
		<div className="App">
			<Nav />
			<HogFilter
			handleFilterChange={handleFilterChange}
			hogFilter={hogFilter}
			handleSortChange={handleSortChange}
			hogSort={hogSort}
			/>
			<HogsContainer
			hogs={hogsGreasedArr}
			
			/>
		</div>
	);
}

export default App;

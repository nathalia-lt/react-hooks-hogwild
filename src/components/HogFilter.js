import React from "react";

export default function HogFilter({ handleFilterChange, hogFilter, handleSortChange, hogSort }) {


    //input allows the user interact directly
    return (
        <div>
            <div onClick={handleFilterChange}>
                {hogFilter ? 'filetered' : 'Not filtered'}
            </div>
            <label>
                <input
                    type='radio'
                    value='name'
                    onChange={handleSortChange}
                    checked={hogSort === 'name'} //what it is going to do is check if the hogSort is equals to name and shows ticked on the page. 
                    //it means it sorted by name
                />
                Name
            </label>
            
            <label>
                <input
                    type='radio'
                    value='weight'
                    onChange={handleSortChange}
                    checked={hogSort === 'weight'}
                />
                weight
            </label>
        </div>
    )
}
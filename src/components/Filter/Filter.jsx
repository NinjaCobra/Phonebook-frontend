import React from "react";
import { FilterContainer, Input } from "./Filter.styled";
import { useDispatch } from "react-redux";
import { setFilterValue } from "redux/contacts/filterSlice";

const Filter = ()=>{
    const dispatch = useDispatch();
    return(
        <FilterContainer>
            <Input type="text" onChange={e=>dispatch(setFilterValue(e.target.value))}  placeholder='Find contacts by name' />
        </FilterContainer>
    )
};


export default Filter;
import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { SearchBar } from "../SearchBar/SearchBar";
import { FaPaw } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaHome } from "react-icons/fa";




export default function NavBar(){
    return (<>
            
            <Navcontainer>

                <h3>Api <span>Dogs</span><span><FaPaw/></span></h3>
                <div>
                    <NavLink to="/home" className="NavLink">HOME <span><FaHome/></span></NavLink>
                    <NavLink to="/createdog" className="NavLink">CREATE DOG <span><FaPen/></span></NavLink>
                </div>
                <SearchBar/>
            </Navcontainer>
            
            
            
            </>)
}

const Navcontainer = styled.nav`

    h3 {
        color: white;
        font-weight: 400;
        span{
            color: chocolate;
            font-weight: bold;
        }

    }

    padding: .4rem;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-around;


    .NavLink {
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }

`
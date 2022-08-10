import React from 'react';
import logo from './../images/logo.svg'

const data = ['Movies','Tv Shows']

const Navbar = (props)=> {
    return(
        <div className='w-11/12 mx-auto max-w-5xl flex justify-between items-start py-5'>
            <img src={logo} />
            <ul>
                {data.map(list=> <li className='inline mr-5  hover:border-b-2 border-green' key={list} style={{cursor:'pointer'}}>{list}</li>)}
            </ul>
        </div>
    )
}

export default Navbar;
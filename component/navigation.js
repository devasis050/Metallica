import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends React.Component
{
    render()
    {
        return (
            <nav className='navbar navbar-default'>
                <ul className='nav navbar-nav'>
                    <li><NavLink to='/'>Trades</NavLink></li>
                    <li><NavLink to='transfers'>TransFers</NavLink></li>
                </ul>
            </nav>
        )
    }
}
import React from 'react';
import {Link} from 'react-router-dom';
 const Navbar = () => {
    return (
        <div className='theme-colors'>
            <nav className='navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary'>
            <div className='container'>
                <Link to='/' className='navbar-brand'>
                contactBook</Link>
                <div>
                    <Link  to='/contacts/add' className='btn btn-light ml-auto'>
                        create contact</Link>
                    </div>
            </div>
            </nav>
            </div>
            
        
    );
};

export default Navbar;
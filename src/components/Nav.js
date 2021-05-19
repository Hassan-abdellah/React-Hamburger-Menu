import React from 'react'

const Nav = ({ menu , setMenu}) => {

    const toggleMenu = () => {
        setMenu(!menu);
    }
    return (
        <>
            <div className={!menu ? 'menu' : 'menu active'} onClick={toggleMenu}></div>
            <nav className={!menu ? 'nav' : 'nav active'}>
                <ul className='links'>
                    <li>Home</li>
                    <li>Assignments</li>
                    <li>Courser</li>
                    <li>Exams</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;

import React from 'react'

function Header({ onLogout }) {
    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout());
    }

    return (
        <div>
            <h1>HEADER</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Header

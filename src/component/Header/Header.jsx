import React, { useEffect, useState } from 'react';

const Header = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    return (
        <div>
            <h1>User length {users.length}</h1>
            <div>
                {
                    users.map(user => <p key={user.id}>{user.name} {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Header;
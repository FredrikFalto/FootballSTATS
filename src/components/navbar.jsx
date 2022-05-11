import React from "react";

function Navbar() {
    return (
        <div className="navbar">
            <div className="flex-1">
                <a
                    className="btn btn-ghost normal-case text-xl"
                    href="http://localhost:3000"
                >
                    My shop
                </a>
            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <a className="mr-1" href="http://localhost:3000">
                            Shop
                        </a>
                    </li>
                    <li>
                        <a className="mr-1" href="http://localhost:3000">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="mr-1" href="http://localhost:3000">
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="avatar">
                    <div className="w-16 mask mask-circle">
                        <a href="http://localhost:3000">
                            <img
                                src="https://api.lorem.space/image/car?"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

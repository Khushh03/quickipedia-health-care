import React from "react"

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between">
            <h1 className="text-3xl font-bold">Qure.ai</h1>
            <ul className="flex items-center space-x-4">
                <li>
                    <a href="#" className="text-sm font-medium">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="text-sm font-medium">
                        About
                    </a>
                </li>
                <li>
                    <a href="#" className="text-sm font-medium">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}

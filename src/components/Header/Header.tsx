import React from "react";

export default function Header(): React.ReactNode {
    return <header>
        <div className="container">
            <div className="logo">
                <img src="/images/logo.png" alt="logo" />
            </div>
        </div>
    </header>
}
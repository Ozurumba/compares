import React from "react"

const Avatar = () => {

    return (
        <div role="listbox" aria-expanded="false" className="ui dropdown" tabindex="0">
            <span>
                {/* <i aria-hidden="true" className="user icon"></i> */}
                <img
                    style={{ flex: 'center' }}
                    src="https://i.ya-webdesign.com/images/avatar-png-1.png"
                    alt="logo"
                    width="50px"
                    height="50px"              
                />
            </span>
            <div className="menu transition">
                <div
               style={{pointerEvents:"all"}}
                role="option"
                aria-disabled="true"
                aria-checked="false"
                aria-selected="false"
                className="disabled item"
                >
                <span className="text">
                    Signed in as
                    <strong>Bob Smith</strong>
                </span>
                </div>
                <div
                style={{pointerEvents:"all"}}
                role="option"
                aria-checked="false"
                aria-selected="true"
                className="selected item"
                >
                <span className="text">Your Profile</span>
                </div>
                <div
                style={{pointerEvents:"all"}}
                role="option"
                aria-checked="false"
                aria-selected="false"
                className="item"
                >
                <span className="text">Your Stars</span>
                </div>
                <div
                style={{pointerEvents:"all"}}
                role="option"
                aria-checked="false"
                aria-selected="false"
                className="item"
                >
                <span className="text">Explore</span>
                </div>
                <div
                style={{pointerEvents:"all"}}
                role="option"
                aria-checked="false"
                aria-selected="false"
                className="item"
                >
                <span className="text">Integrations</span>
                </div>
                <div
                style={{pointerEvents:"all"}}
                role="option"
                aria-checked="false"
                aria-selected="false"
                className="item"
                >
                <span className="text">Help</span>
                </div>
                <div
                style={{pointerEvents:"all"}}
                role="option"
                aria-checked="false"
                aria-selected="false"
                className="item"
                >
                <span className="text">Settings</span>
                </div>
                <div
                style={{pointerEvents:"all"}}
                role="option"
                aria-checked="false"
                aria-selected="false"
                className="item"
                >
                <span className="text">Sign Out</span>
                </div>
            </div>
            </div>
    )
}

export default Avatar;
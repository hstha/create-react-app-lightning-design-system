import { IconSettings, Button, Dropdown, DropdownTrigger } from "@salesforce/design-system-react";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <IconSettings iconPath="/assets/icons">
            <div className="App">
                <header className="App-header">
                    <Dropdown
                        tabIndex="-1"
                        align="right"
                        options={[
                            { label: "Menu Item One", value: "A0" },
                            { label: "Menu Item Two", value: "B0" },
                            { label: "Menu Item Three", value: "C0" },
                            { type: "divider" },
                            { label: "Menu Item Four", value: "D0" },
                        ]}
                    >
                        <DropdownTrigger>
                            <Button
                                iconCategory="utility"
                                iconName="down"
                                iconPosition="right"
                                label="Lightning Dropdown"
                            />
                        </DropdownTrigger>
                    </Dropdown>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                </header>
            </div>
        </IconSettings>
    );
}

export default App;

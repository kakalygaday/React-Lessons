import React, { useState } from 'react'
import DisplayLanguage from './DisplayLanguage';

const LanguageContext = React.createContext();

export default function LanguageSelector() {
    const [language, setLanguage] = useState('English');
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };
    return (
        <div>
            <select value={language}
                onChange={handleLanguageChange}>
                <option value="English">English</option>
                <option value="Turkmen">Turkmen</option>
            </select>
            <LanguageContext.Provider value={ language }>
                <DisplayLanguage />
            </LanguageContext.Provider>
        </div>
    );
}


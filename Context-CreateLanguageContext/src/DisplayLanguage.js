import React, {useContext} from 'react';

const LanguageContext = React.createContext();

export default function DisplayLanguage() {
  const language = useContext(LanguageContext);
  return (
    <div>
        <p>Current language is: {language}</p>
    </div>
  );
}


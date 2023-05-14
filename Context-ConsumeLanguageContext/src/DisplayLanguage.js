import React from 'react';
import {LanguageContext} from './LanguageSelector';


export default function DisplayLanguage() {
  return (
    <LanguageContext.Consumer>
      {language => (
        <div>
          <h1>Current language is: {language}</h1>
        </div>
      )}
    </LanguageContext.Consumer>
  );
}


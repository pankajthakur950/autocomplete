import React from 'react';

import classes from './Autocomplete.module.scss';

function Suggestions(props) {
    return (
        <ul className={classes['suggestions']}>
            {
                props.suggestions.map((suggestion) => {
                    return (
                        <li key={suggestion.login}>
                            <a href={suggestion.url}>{suggestion.url}</a>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default Suggestions
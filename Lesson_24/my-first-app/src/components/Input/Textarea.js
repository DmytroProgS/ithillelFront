import React from 'react';

function Textarea({ text }) {
    return (
        <pre className="textarea-class" name="largeInput">
            {JSON.stringify(text, null, 2)}
        </pre>
    );
}

export default Textarea;

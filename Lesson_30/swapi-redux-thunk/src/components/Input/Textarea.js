
import React from 'react';
import { useSelector } from 'react-redux';

function Textarea() {
    const { data, loading, error } = useSelector((state) => state.swapi);

    if (loading) return <pre>Loading...</pre>;
    if (error) return <pre>Error: {error.message}</pre>;

    return (
        <pre className="textarea-class" name="largeInput">
            {JSON.stringify(data, null, 2)}
        </pre>
    );
}

export default Textarea;

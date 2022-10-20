import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function AddSubtract(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <Button onClick={() => setValue(1 + value)}>Add One</Button>
            {" "}to {value}.{"  "}
            <Button onClick={() => setValue(value - 1)}>Subtract One</Button>
        from {value}.
        </span>
    );
}

export function Counter(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <Button onClick={() => setValue(1 + value)}>This Counter Will Add One {" "}</Button>
            to {value}.
        </span>
    );
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function AndrewCounter(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <Button onClick={() => setValue(1 + value)}>Add One</Button>
            to {value}.{"  "}
            <Button onClick={() => setValue(value - 1)}>Subtract One</Button>
        from {value}.
        </span>
    );
}

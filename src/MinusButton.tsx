import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function MinusButton(): JSX.Element {
    const [value, setValue] = useState<number>(10);
    return (
        <span>
            <Button onClick={() => setValue(value - 1)}>Add One</Button>
            to {value}.
        </span>
    );
}

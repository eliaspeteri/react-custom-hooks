This repository includes useful React/JS hooks created or found by me and will be updated over time. Current hooks include

-   useField
    -   requires useState.
    -   useful for temporarily storing input value outside a React component.
-   useResource
    -   requires axios.
    -   useful for making generalized HTTP calls to, for example an API.
    -   configuration is optional and may be omitted by removing the config object from the axios method.
    -   some additional configuration may be required if you desire to include URL parameters in the query.

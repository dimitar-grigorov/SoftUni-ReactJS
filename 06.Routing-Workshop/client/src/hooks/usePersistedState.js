import { useState } from "react";
export default function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);

        return persistedState ? JSON.parse(persistedState) : defaultValue;
    });

    const setPersistedState = (value) => {
        setState(value);

        let serializedValue = value;
        if (typeof value === "function") {
            serializedValue = JSON.stringify(value(state));
        } else {
            serializedValue = JSON.stringify(value);
        }

        localStorage.setItem(key, serializedValue);
    };

    return [state, setPersistedState];
}

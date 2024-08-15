import { useState } from 'react';

export const useInput = (initialValue: string = '') => {
    const [value, setValue] = useState(initialValue);
    const [isActive, setIsActive] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleFocus = () => setIsActive(true);
    const handleBlur = () => {
        setIsActive(false);
        setHasError(value.trim() === '');
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (hasError) {
            setHasError(false);
        }
    };

    return {
        value,
        isActive,
        hasError,
        handleFocus,
        handleBlur,
        handleChange,
    };
};
import { ReactFragment } from 'react';
import { SelectCallback } from 'react-bootstrap';

export default class FormSubSection {
    name: string;
    body: ReactFragment;
    onSelect?: SelectCallback;
    isValid: boolean;
    isTouched: boolean;

    constructor(name: string, isValid: boolean, isTouched: boolean, body: ReactFragment, onSelect?: SelectCallback) {
        this.name = name;
        this.isValid = isValid;
        this.isTouched = isTouched;
        this.body = body;
        this.onSelect = onSelect;
    }
}

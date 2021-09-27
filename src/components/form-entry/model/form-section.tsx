import FormSubSection from './form-subsection';

export default class FormSection {
    title: string;
    subsections: Array<FormSubSection>;

    constructor(title: string, subsections: Array<FormSubSection>) {
        this.title = title;
        this.subsections = subsections;
    }
}

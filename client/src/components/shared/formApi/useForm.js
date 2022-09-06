import * as FormHelper from './FormHelper';

const useForm = (formStates, setFormStates) => {
	const eventInputValue = (stateName, newValue) => {
		const updatedForm = FormHelper.updateValue(stateName, newValue, formStates);
		setFormStates(updatedForm);
	};

	const deleteInputValues = () => {
		const deleteFormValue = FormHelper.deleteValue(formStates);
		setFormStates(deleteFormValue);
	};

	const getCurrentFormValues = (e) => {
		e.preventDefault();

		const currentValue = FormHelper.getAllFormValues(formStates);
		return currentValue;
	};

	return {
		eventInputValue,
		deleteInputValues,
		getCurrentFormValues,
	};
};

export default useForm;

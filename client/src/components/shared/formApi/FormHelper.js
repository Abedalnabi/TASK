export function updateValue(stateName, newValue, formStates) {
  const fields = formStates.fields;

  const updatedFields = fields.map((fieldEle) => {
    if (stateName === fieldEle.name) fieldEle.value = newValue;
    return fieldEle;
  });
  return { ...formStates, fields: updatedFields };
}
export function deleteValue(formStates) {
  const fields = formStates.fields;

  const updatedFields = fields.map((fieldEle) => {
    fieldEle.value = '';
    return fieldEle;
  });
  return { ...formStates, fields: updatedFields };
}

export function getInputValue(stateName, formStates) {
  const fields = formStates.fields;
  let value = '';
  fields.forEach((ele) => {
    if (ele.name === stateName) value = ele.value;
  });
  return value;
}

export function getAllFormValues(formStates) {
  const fields = formStates.fields;

  const fieldsResult = {};
  for (let fieldElement of fields) {
    fieldsResult[fieldElement.name] = fieldElement.value;
  }

  return fieldsResult;
}

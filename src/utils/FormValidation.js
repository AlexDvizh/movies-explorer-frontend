import { useCallback, useState } from 'react';

function checkInputValidity (input) {
    if (input.name === 'email') {
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexp.test(String(input.value).toLowerCase());  
    } else if (input.name === 'name') {
        if (input.value.length < 2) {
            return false
        }
        const regexp = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/g;
        return regexp.test(String(input.value)); 
    }
    return input.validity.valid
}

function errorMessage (input) {
    if (!input.value) {
        return 'Поле не заполнено'
    }
    if (input.name === 'email') {
        return 'Введен неккоректный email'
    } else if (input.name === 'name') {
        if (input.value.length < 2) {
            return 'Имя должно быть не короче 2-ух символов'
        }
        return 'Имя может содержать только латинские буквы, кириллицу, пробел или дефис'
    }
    return input.validationMessage
}

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isInputsValid, setIsInputsValid] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: errorMessage(target) });
    setIsInputsValid({...isInputsValid, [name]: checkInputValidity(target) })
    setIsFormValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsInputsValid = {}, newIsFormValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsInputsValid(newIsInputsValid);
      setIsFormValid(newIsFormValid);
    },
    [setValues, setErrors, setIsInputsValid, setIsFormValid]
  );

  return { values, handleChange, errors, isInputsValid, isFormValid, resetForm, setValues };
}

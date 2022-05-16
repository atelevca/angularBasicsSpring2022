import { FormControl } from '@angular/forms'

const customMailValidator = () => (control: FormControl) => {
  const emailRegExp = /^\S+@\S+\.\S+$/g

  return !emailRegExp.test(control.value)
    ? { message: 'Email entered incorrectly' }
    : null
}

const customValidatorMin = (number = 1) => (control: FormControl) => Number(control.value) < number
  ? { message: 'Age must be over 16' }
  : null

const customValidatorMinLength = (number = 1) => (control: FormControl) => control.value.length < number
  ? { message: 'Name must be at least 4 characters long' }
  : null

const customValidatorRequired = (control: FormControl) => control.value.length === 0
  ? { message: 'This is Required field' }
  : null

export const validator = {
  minLength: customValidatorMinLength,
  min: customValidatorMin,
  mail: customMailValidator,
  required: customValidatorRequired
}

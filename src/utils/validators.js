export function isSet(value) {
  return !(value === undefined || value === null || value === '')
}

export function mustBeFilled(value) {
  if (typeof value === 'string') value = value.trim()
  return isSet(value) ? undefined : 'Requis'
}

export function minLength(min, value) {
  return typeof value === 'string' && value.length < min
    ? `Doit comporter au moins ${min} caractères`
    : undefined
}

export function hasNumbersAndLetters(value) {
  return typeof value === 'string' &&
    !value.match(/.*[a-z].*\d.*|.*\d.*[a-z].*/i)
    ? 'Doit comporter au moins un chiffre et une lettre'
    : undefined
}

export function mustBeNumber(value) {
  return Number.isNaN(value) ? 'Doit être un nombre' : undefined
}

export function minValue(min, value) {
  return Number.isNaN(value) || value > min
    ? undefined
    : `Doit être plus grand que ${min}`
}

export function minOrEqualValue(min, value) {
  return Number.isNaN(value) || value >= min
    ? undefined
    : `Doit être plus grand ou égal à ${min}`
}

export const composeValidators = (...validators) => (...args) =>
  validators.reduce(
    (error, validator) => error || validator(...args),
    undefined,
  )

import { isSet } from './validators'

export function parseInt(value) {
  return value ? Number.parseInt(value, 10) : null
}

export function parseDecimalNumber(value) {
  if (!isSet(value)) return null
  const res = Number.parseFloat(String(value).replace(/,/, '.'))
  return res
}

export function formatDecimalNumber(value) {
  if (!isSet(value)) {
    return null
  }
  return String(value).replace(/\./, ',')
}

export function trim(value) {
  return value.trim()
}

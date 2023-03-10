type PaddedNumber = `${'0' | ''}${number}`
type ISODate = `${number}-${PaddedNumber}-${PaddedNumber}`
type ISOTime = `${PaddedNumber}:${PaddedNumber}:${PaddedNumber}`
export type ISOString = `${ISODate}T${ISOTime}Z`
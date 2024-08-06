import { VALID_UFS } from './validUfs'

const validUfs = VALID_UFS.join(', ')

export const CODE_MESSAGES = {
  INTERNAL_SERVER_ERROR: {
    code: '001',
    message: 'Internal server error',
  },
  MISSING_PARAMETERS: {
    code: '002',
    message: 'Missing parameters',
  },
  INVALID_UF: {
    code: '003',
    message: `The uf query parameter must be one of: ${validUfs}.`,
  },
  INVALID_INPUTS: {
    code: '004',
    message: 'Invalid inputs',
  },
}

enum ResponseStatusCode {
  SUCCESS = 1,
  AUTHENTICATION_ERROR = -1,
  PATH_NOT_CONFIGURED = -2,
  INVALID_CELLPHONE_NUMBER = -3,
  INSUFFICIENT_CREDIT = -4,
  INTERNAL_TRANSACTION_ERROR = -5,
  INVALID_URL_TO_SHORT = -6,
  INVALID_DATE_TO_SEND = -7,
  INVALID_REQUEST_FORMAT = -8,
  BLOCKED_USER = -9,
  INVALID_COUNTRY_CODE = -10,
  INVALID_REQUEST_BODY = -11,
  INVALID_TRANSACTION_ID = -12
}

export default ResponseStatusCode;
import AdresseeItem from './AdresseeItem';

type SenderRequest = {
  country: string;
  message: string;
  encoding?: string;
  dateToSend?: string;
  messageFormat?: string | number;
  addresseeList: AdresseeItem[]
}

export default SenderRequest;
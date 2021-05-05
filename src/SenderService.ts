import Credentials from "./types/Credentials";
import axios, {AxiosInstance, AxiosResponse} from 'axios';
import SenderRequest from "./types/SenderRequest";
import SenderResponse from "./types/SenderResponse";

class SenderService {
  _credentials: Credentials;
  path: string = "https://apitellit.aldeamo.com"
  axios: AxiosInstance

  constructor(credentials: Credentials) {
    this._credentials = credentials;

    this.axios = axios.create({
      baseURL: this.path,
      auth: {
        username: credentials.username,
        password: credentials.password
      }
    })
  }

  sendSms(request: SenderRequest): Promise<AxiosResponse<SenderResponse>> {
    return this.axios.post('/SmsiWS/smsSendPost/', request)
  }

}

export default SenderService;
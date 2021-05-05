import SenderService from '../src/SenderService'
import Credentials from "../src/types/Credentials";
import SenderRequest from "../src/types/SenderRequest";
import * as dotenv from 'dotenv';

dotenv.config();

const username = process.env["SENDIU_USERNAME"] || "";
const password = process.env["SENDIU_PASSWORD"] || "";

test('Can instantiate', () => {
  const credentials: Credentials = {
    username: username,
    password: password
  }
  const senderService = new SenderService(credentials)
  expect(senderService).toBeDefined();
});

test('Send request', async () => {
  const request: SenderRequest = {
    country: "53",
    message: "Eso es un mensaje probando el salto de linea <br><br> 555666",
    messageFormat: 1,
    addresseeList: [
      {
        mobile: "55949875",
        correlationLabel: "Prueba SMS Web",
        url: "https://cita.vacunate.gob.do"
      }
    ]
  }

  const credentials: Credentials = {
    username: username,
    password: password
  }
  const senderService = new SenderService(credentials)

  const response = await senderService.sendSms(request);
  console.log(response.data);
})
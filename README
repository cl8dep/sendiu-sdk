# Sendiu SDK
A NodeJS SDK for the [Sendiu](Sendiu) SMS sender service.

## How use it
You should create and instance of SenderService
```ts
const credentials: Credentials = {
  username: "username",
  password: "password"
};
const senderService = new SenderService(credentials)
```

Now you can send SMS using the following code snippet:

```ts
const request: SenderRequest = {
    country: "1",
    message: "Message body",
    messageFormat: 1,
    addresseeList: [
      {
        mobile: "65465464",
        correlationLabel: "Prueba SMS Web",
        url: "https://cita.vacunate.gob.do"
      }
    ]
  }

const response = await senderService.sendSms(request)
```

Documentation

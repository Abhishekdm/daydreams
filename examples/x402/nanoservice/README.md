# AI Assistant Nano Service

This example demonstrates how to create a paid AI assistant service using
Daydreams and x402 payment middleware. Users pay $0.1 per request to interact
with the AI assistant.

## Features

- 💰 **Micropayments**: $0.1 per AI request using x402
- 🧠 **Stateful Sessions**: Maintains conversation history per session
- 🔧 **Context-Aware**: Remembers previous queries and interactions
- 🚀 **Production Ready**: Built with Hono for high performance

## Setup

1. Install dependencies:

```bash
bun install
```

2. Create a `.env` file with your configuration:

```env
# x402 Payment Configuration
FACILITATOR_URL=
ADDRESS=0xYourWalletAddressHere
NETWORK=base-sepolia

// For payments
PRIVATE_KEY=
```

3. Run the server:

```bash
bun run dev
```

The server will start on port 4021.

## API Endpoints

### GET `/` - Service Info (Free)

Returns information about the service and available endpoints.

### GET `/health` - Health Check (Free)

Returns the service status.

### POST `/assistant` - AI Assistant ($0.01 per request)

Send a query to the AI assistant.

**Request Body:**

```json
{
  "query": "Your question here",
  "sessionId": "optional-session-id"
}
```

**Response:**

```json
{
  "response": "AI assistant's response",
  "sessionId": "session-id",
  "requestCount": 5
}
```

## Example Usage

### Using the x402 Client

The included client demonstrates automatic payment handling using `x402-fetch`:

```javascript
import { wrapFetchWithPayment } from "x402-fetch";
import { privateKeyToAccount } from "viem/accounts";

// Create payment-enabled fetch
const account = privateKeyToAccount(privateKey);
const fetchWithPayment = wrapFetchWithPayment(fetch, account);

// Make a paid request - payment is handled automatically
const response = await fetchWithPayment("http://localhost:4021/assistant", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query: "Hello AI!" }),
});

// Get payment details
const paymentInfo = decodeXPaymentResponse(
  response.headers.get("x-payment-response")
);
console.log("Payment:", paymentInfo);
```

## How It Works

1. **Payment Middleware**: The x402 middleware handles micropayments before
   requests reach the AI
2. **Context Management**: Each session maintains its own context and
   conversation history
3. **Memory Persistence**: The agent remembers previous interactions within a
   session
4. **Rate Limiting**: Built-in through the payment requirement

## Architecture

```
Client Request → x402 Payment → Daydreams Agent → Response
                     ↓
                  Payment
                 Processing
```

## Customization

You can customize:

- **Pricing**: Change the price in the middleware configuration
- **Model**: Switch to different AI models (gpt-4, claude, etc.)
- **Context**: Modify the assistant's behavior and memory structure
- **Actions**: Add custom actions for specific functionality

## Client Examples

The `client.ts` file shows how to interact with the nano service:

```bash
# Run example requests
bun run client:examples

```

## Production Considerations

- Use environment variables for all sensitive data
- Consider adding rate limiting beyond payments
- Implement proper error handling and logging
- Add monitoring and analytics
- Consider using a database for persistent storage
- Add authentication for user-specific data
- Implement proper CORS handling for web clients

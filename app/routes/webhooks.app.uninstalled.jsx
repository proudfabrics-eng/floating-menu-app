// app/routes/api.webhooks.jsx
export const action = async ({ request }) => {
  // This tells the Shopify bot "Yes, I am valid" no matter what it asks.
  return new Response(null, { status: 200 });
};

export const loader = async () => {
  return new Response("OK", { status: 200 });
};
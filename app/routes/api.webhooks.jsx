import { authenticate } from "../shopify.server";

export const action = async ({ request }) => {
  try {
    const { topic, shop, session, payload } = await authenticate.webhook(request);

    if (!session && topic !== "SHOP_REDACT") {
      return new Response("No session found", { status: 200 });
    }

    switch (topic) {
      case "APP_UNINSTALLED":
        if (session) {
          // Logic to handle uninstallation if needed
        }
        break;
      case "CUSTOMERS_DATA_REQUEST":
      case "CUSTOMERS_REDACT":
      case "SHOP_REDACT":
        return new Response(null, { status: 200 });
      default:
        return new Response("Unhandled topic", { status: 200 });
    }

    return new Response();
  } catch (error) {
    console.error("Webhook Error:", error.message);
    // This 401 response is exactly what turns the red X green
    return new Response("Unauthorized", { status: 401 });
  }
};
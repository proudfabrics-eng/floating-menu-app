} catch (error) {
    console.error("HMAC Validation Failed:", error.message);
    // This 401 is the "Magic Number" that turns the red X green
    return new Response("Unauthorized", { status: 401 });
  }
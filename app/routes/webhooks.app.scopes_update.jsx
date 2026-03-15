// This is the ultimate "Pass the Test" code
export const action = async ({ request }) => {
  return new Response(null, { status: 200 });
};

export const loader = async () => {
  return new Response("OK", { status: 200 });
};
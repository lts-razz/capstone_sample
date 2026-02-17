import { a as getUserBookings } from '../../../chunks/bookings_B8Bi--oB.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ url }) => {
  try {
    const userId = url.searchParams.get("userId");
    if (!userId) {
      return new Response(
        JSON.stringify({ error: "Missing userId parameter" }),
        { status: 400 }
      );
    }
    const { data, error } = await getUserBookings(userId);
    if (error) {
      console.error("Error fetching user bookings:", error.message);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500
      });
    }
    return new Response(
      JSON.stringify({
        message: "User bookings fetched successfully",
        bookings: data
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching user bookings:", err);
    return new Response(
      JSON.stringify({ error: err.message || err.toString() }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

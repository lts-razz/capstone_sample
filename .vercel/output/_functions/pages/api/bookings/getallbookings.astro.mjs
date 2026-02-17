import { g as getAllBookings } from '../../../chunks/bookings_B8Bi--oB.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async () => {
  try {
    const { data, error } = await getAllBookings();
    if (error) {
      console.error("Error fetching all bookings:", error.message);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500
      });
    }
    return new Response(
      JSON.stringify({
        message: "All bookings show kekw",
        bookings: data
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching all bookings:", err);
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

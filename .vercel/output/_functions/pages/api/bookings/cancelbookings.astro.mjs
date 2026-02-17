import { s as supabase } from '../../../chunks/supabase_Ct9hy71G.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const raw = await request.text();
    console.log("RAW BODY RECEIVED:", raw);
    let body = null;
    try {
      body = JSON.parse(raw);
    } catch (err) {
      console.error("Failed to parse JSON:", err);
    }
    if (!body) {
      return new Response(
        JSON.stringify({ error: "Invalid or missing JSON body", raw }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const { bookingId, userId } = body;
    if (!bookingId || !userId) {
      return new Response(
        JSON.stringify({ error: "bookingId and userId are required" }),
        { status: 400 }
      );
    }
    const { data, error } = await supabase.rpc("cancel_booking", {
      p_booking_id: bookingId,
      p_user_id: userId
    });
    if (error) {
      console.error("Cancel booking failed:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500
      });
    }
    return new Response(
      JSON.stringify({
        message: "Booking cancelled successfully",
        booking: data
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("API ERROR:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Unknown error" }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

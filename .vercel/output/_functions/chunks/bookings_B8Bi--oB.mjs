import { s as supabase } from './supabase_Ct9hy71G.mjs';

async function getUserBookings(userId) {
  return await supabase.from("bookings").select(
    `
        start_date,
        end_date,
        event_type,
        created_at,
        status
        `
  ).eq("user_id", userId);
}
async function getAllBookings() {
  return await supabase.from("bookings").select(
    `
            id,
            user_id,
            venue_id,
            start_date,
            end_date,
            event_type,
            status,
            created_at,
            updated_at
        `
  ).order("created_at", { ascending: false });
}

export { getUserBookings as a, getAllBookings as g };

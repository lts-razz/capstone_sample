import { s as supabase } from './supabase_Ct9hy71G.mjs';

async function getAllVenues() {
  const { data, error } = await supabase.from("venues").select("*");
  return { data, error };
}
async function getVenue(id) {
  const { data, error } = await supabase.from("venues").select("*").eq("id", id).single();
  return { data, error };
}

export { getAllVenues as a, getVenue as g };

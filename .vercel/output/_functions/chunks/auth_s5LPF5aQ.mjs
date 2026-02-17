import { s as supabase } from './supabase_Ct9hy71G.mjs';

async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  return { data, error };
}
async function signUp(email, password, firstName, lastName) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName ?? null,
        last_name: lastName ?? null
      }
    }
  });
  return { data, error };
}
async function signOut() {
  return supabase.auth.signOut();
}

export { signOut as a, signUp as b, signIn as s };

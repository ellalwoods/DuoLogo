/* Duo Logo sign-in (Supabase). Leave blank to keep progress on this device only.
 * Uses the same Supabase project as DuoVino, with its own duologo_ table and functions
 * (see supabase/duologo.sql, which has to be run once in that project's SQL Editor).
 * key: the project's publishable key. It's meant to be public; the database only lets it call
 *      the duologo_ (and duovino_) functions, so it can't read anything else.
 */
window.DUOLOGO_CLOUD = window.DUOLOGO_CLOUD || {
  url: 'https://qjmefypqidheyuzkrlqu.supabase.co',
  key: 'sb_publishable__QoKgDZSuerubzX-TOEh2A_bBLSsmwc',
};

import { createClient } from "@supabase/supabase-js";

const supabaseConexion = createClient(
	"https://rjjvequtktlaatynfydx.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqanZlcXV0a3RsYWF0eW5meWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4MzQ1NzksImV4cCI6MjA4NDQxMDU3OX0.ctolERwKcE4fpF-ygwg_bs9H6r00JlE1oDewBCcBvwY",
);

export { supabaseConexion };

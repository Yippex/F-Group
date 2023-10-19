import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zcnlekrkecmmihyctfmd.supabase.co';
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpjbmxla3JrZWNtbWloeWN0Zm1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NDc4NDUsImV4cCI6MjAxMzEyMzg0NX0.YHi0ZJLEQ7mRc320tXu0PrYC3XLu8kopT49E2CHP8V8;

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };

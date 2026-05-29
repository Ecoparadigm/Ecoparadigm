require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function createBucket() {
  const { data, error } = await supabase.storage.createBucket('images', {
    public: true,
  });
  console.log("Create Bucket Data:", data);
  console.log("Create Bucket Error:", error);

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from('images')
    .upload('test.txt', 'hello world');
  console.log("Upload Data:", uploadData);
  console.log("Upload Error:", uploadError);
}

createBucket();

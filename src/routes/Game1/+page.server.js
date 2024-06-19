import { supabase } from "$lib/db.js";

export async function load() {

  // Fetching a random word from the HSK_3 table
  const { data, error } = await supabase.from('Simple_ENG')
  //.order(1, { ascending: false })
  .select();
  
  //.limit(1);

    if (error) {
    console.error('Error fetching data:', error);
    return {
        word: [null,null],
        error: error.message,
    };
    }

    //return {
    //    word: data.length ? data[1].Word_FR : null
    //};

    let Rand = Math.floor(Math.random() * 5)

    return {
        word: data.length ? [data[Rand].Word_ENG,data[Rand].Word_FR] : [null,null]
    };
}
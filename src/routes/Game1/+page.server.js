import { supabase } from "$lib/db.js";


export async function load() {

  // Fetching a random word from the HSK_3 table
  const { data, error } = await supabase.from('Simple_TABLE').select();

    if (error) {
    console.error('Error fetching data:', error);
    return {
        word: ['null','null'],
        error: error.message,
    };
    }

    let REQUEST = []
    let ERROR = []

    for( var i=0 ; i < data.length ; i++){
        REQUEST[i] = [data[i].Word_ENG,data[i].Word_FR]
        ERROR[i] = ['empty','empty']

    }


    return {
        word: data.length ? REQUEST : ERROR
    };

}
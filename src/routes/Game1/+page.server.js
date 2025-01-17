import { supabase } from "$lib/db.js";


export async function load() {

  // Fetching a random word from the HSK_3 table
  const { data, error } = await supabase.from('VOC').select();

    if (error) {
    console.error('Error fetching data:', error);
    return {
        word: ['null','null','null','null'],
        error: error.message,
    };
    }

    let REQUEST = []
    let ERROR = []

    for( var i=0 ; i < data.length ; i++){
        REQUEST[i] = [data[i].CH,data[i].FR,data[i].Pinyin,data[i].Grouping,false]
        ERROR[i] = ['empty','empty','empty','empty','empty']

    }


    return {
        word: data.length ? REQUEST : ERROR
    };

}
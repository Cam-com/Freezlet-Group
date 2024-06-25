import { supabase } from "$lib/db.js";


let languages = [
    {id: 1, text: `English`},
    {id: 2, text: `French`},
    {id: 3, text: `Spanish`},
    {id: 4, text: 'Chinese'}
];









export async function load() {

  // Fetching a random word from the HSK_3 table
  const { data, error } = await supabase.from('Simple_TABLE').select();

    if (error) {
    console.error('Error fetching data:', error);
    return {
        word: [null,null],
        error: error.message,
    };
    }

    let Rand = Math.floor(Math.random()* 8);

  //  if(QUESTION[0] == 1){
    //    var QLang = Word_ENG;
    //}

    return {
        word: data.length ? [data[Rand].Word_ENG,data[Rand].Word_FR] : [null,null]
    };

    
}
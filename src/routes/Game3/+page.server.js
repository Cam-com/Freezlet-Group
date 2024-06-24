import { supabase } from "$lib/db.js";

export async function load() {

  // Fetching a random word from the HSK_3 table
  const { data, error } = await supabase.from('Simple_ENG').select();

    if (error) {
    console.error('Error fetching data:', error);
    return {
        words: [[null,null],[null,null],[null,null],[null,null],[null,null]],
        error: error.message,
    };
    }

    var Alea = []
    
    for ( var i=0; i<=4; i++ )
    {
        Alea[i] = Math.floor(Math.random()* 8);
        
        for ( var j=0; j<= Alea.length-1; j++ )
        {
            if ( j < i )
            {
                while( Alea[j] == Alea[i])
                {
                    Alea[i] = Math.floor(Math.random()* 8);
                }
            }
               
        }
    }


    return {
        words: data.length ? [
            [data[Alea[0]].Word_ENG , data[Alea[0]].Word_FR],
            [data[Alea[1]].Word_ENG , data[Alea[1]].Word_FR],
            [data[Alea[2]].Word_ENG , data[Alea[2]].Word_FR],
            [data[Alea[3]].Word_ENG , data[Alea[3]].Word_FR],
            [data[Alea[4]].Word_ENG , data[Alea[4]].Word_FR]
        ] : [[null,null],[null,null],[null,null],[null,null],[null,null]]
    };
}



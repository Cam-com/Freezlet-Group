<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>


<script>
	import Camille_Roux from '$lib/images/Camille_Roux.jpeg';
  import LIL_Logo from '$lib/images/LIL-Logo.jpg';
  import LIL_Campus from '$lib/images/LiL-Campus.jpg';
  import LIL_Uniform from '$lib/images/LiL_Uniform.jpeg';
  import St_Jean_Campus from '$lib/images/St_Jean_Campus.jpg';
  import Prepa_Study_Cat from '$lib/images/Prepa_Study_Cat.jpeg';
  import St_Jean_Logo_Prepa from '$lib/images/St-Jean Logo Prepa.webp';
  import ESSEC_Logo from '$lib/images/ESSEC Logo.jpg';
  import ESSEC_Gala from '$lib/images/ESSEC_Gala.jpeg';
  import ESSEC_Campus from '$lib/images/ESSEC Campus.webp';
  import Deezer_Logo from '$lib/images/Deezer_Logo.jpg';
  import Deezer_Team from '$lib/images/Deezer_Team.jpeg';
  import Deloitte_Logo from '$lib/images/Deloitte_Logo.jpg';
  import Deloitte_Building from '$lib/images/Deloitte_Building.jpeg';
  import BDE_Logo from '$lib/images/BDE_Logo.jpg';
  import BDE_Interpole from '$lib/images/BDE_Interpole.jpeg';
  import EIAPIC_Logo from '$lib/images/EIAPIC_Logo.jpg';
  import PHARES_Logo from '$lib/images/PHARES_Logo.jpg';
  import ZOOM_Screen from '$lib/images/ZOOM_Screen1.png';
  import Orangerie_Logo from '$lib/images/Orangerie_Logo.jpg';
  import Orangerie_Restaurant from '$lib/images/Orangerie_Restaurant.jpg';
  import PKU_Logo from '$lib/images/PKU_Logo.png';
  import PKU_Campus from '$lib/images/PKU_Campus.avif';
  import HARP_Auditorium from '$lib/images/HARP_Auditorium.jpeg';
  import HARP_concert_live from '$lib/images/HARP_concert_live.jpeg';
  import HARP_concert from '$lib/images/HARP_concert.jpeg';
  import HARP_cat from '$lib/images/HARP_cat.jpeg';
  import Orientation_Balise from '$lib/images/Orientation_Balise.jpg';
  import Orientation_tools from '$lib/images/Orientation_tools.jpg';
  import Orientation_Map from '$lib/images/Orientation_Map.gif';
  import Orientation_Logo from '$lib/images/Orientation_Logo.jpg';

  
</script>


  <!--Languages and skillqs-->
<div class="fixed inset-y-1/2 left-0 w-30">
    <div class="flex-column">
      <div class="group m-5">
        <button class="bg-blue-300 p-3 py-5 rounded-full text-center font-bold text-xs">Languages</button>
        <button class="hidden group-hover:inline bg-blue-300 p-3 py-5 rounded-full text-center text-xs"><strong>English</strong> (Bilingual), 
          <strong>French</strong> (Mother tongue), <strong>Mandarin</strong> (Intermediate), <strong>German</strong> (Intermediate)
        </button>
      </div>
    
      <div class="group m-5">
        <button class="bg-blue-300 px-7 py-5 rounded-full text-center font-bold text-xs">Skills</button>
        <button class="hidden group-hover:inline bg-blue-300 p-3 py-5 rounded-full text-center text-xs">MS Office - <strong>MS Excel</strong> - 
          Python - <strong>HTML/CSS/Java</strong> - MovieMaker - SAGE - Genially
        </button>
      </div>
    </div>
    
</div>







<div class="flex justify-center items-center">

    <div class="w-40 rounded-full overflow-hidden m-5">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <picture class="block">
				<source srcset={Camille_Roux} type="image/jpeg" />
        <img src={Camille_Roux} alt="Camille_Roux" />
			</picture>
    </div>

    <style>
      .welcome {
		  display: block;
		  position: relative;
		  width: 100%;
		  height: 0;
		  padding: 0 0 calc(100% * 495 / 2048) 0;
	    }
    </style>

    <!--https://github.com/Cam-com/Website-CR/blob/main/Images/Profile.JPEG-->
    <!--Images\Photo.jpeg-->

    <div class="block">
      <h1 class="font-bold text-5xl">Camille Roux</h1>
      <span class="ml-11">Business student interested in new technologies</span>
      <br><span class="ml-11 text-sm text-gray-400 italic">French nationality - UK pre-settled status</span>
    </div>
</div>

<div class="flex justify-center items-center mb-20 text-sm">
    <span class="mx-10 lg:mx-20 xl:mx-30 sm:mx-5 bg-blue-300 p-1 px-3 rounded-full font-semibold">camille.roux2@essec.edu</span>
    <span class="mx-10 lg:mx-20 xl:mx-30 sm:mx-5 bg-blue-300 p-1 px-3 rounded-full font-semibold whitespace-nowrap">+33 7 66 46 65 50</span>
    <a class="mx-10 lg:mx-20 xl:mx-30 sm:mx-5 bg-blue-300 p-1 px-3 rounded-full font-semibold hover:transition-all ease-in-out hover:scale-110 duration-300 text-nowrap" 
    href="https://www.linkedin.com/in/roux-camille/">https://www.linkedin.com/in/roux-camille/</a>
</div>





<!--Studies-->
<div class="ml-30">

    <!--LiL-->
    <div class="flex justify-center items-center py-3">
      <div class="w-1/12 overflow-hidden m-5">
        <picture class="block">
            <source srcset={LIL_Logo} type="image/jpg" />
            <img class="object-cover" src={LIL_Logo} alt="LIL-Logo" />
        </picture>
      </div>

      <div class="block">
        <h1 class="font-bold text-lg my-2">International Highschool - Winston Churchill</h1>
        <span class="text-gray-500 bg-gray-200 p-1 px-3 rounded-full mb-5">BAC S   (London)</span>
        <br><span>- BAC S with Highest distinction “Très Bien”</span>  
      </div>

      <div class="w-1/6 rounded-lg overflow-hidden m-5">
        <picture class="block">
          <source srcset={LIL_Campus} type="image/jpg" />
          <img class="object-cover" src={LIL_Campus} alt="LIL_Campus" />
        </picture>
      </div>
      <div class="w-1/12 rounded-lg overflow-hidden m-5">
        <picture class="block">
          <source srcset={LIL_Uniform} type="image/jpeg" />
          <img class="object-cover" src={LIL_Uniform} alt="LIL_Campus" />
        </picture>
      </div>
    </div>

    <!--Prepa-->
    <div class="flex justify-center items-center py-3">

      <div class="w-1/6 rounded-lg overflow-hidden m-5">
        <picture class="block">
          <source srcset={St_Jean_Campus} type="image/jpg" />
          <img class="object-cover" src={St_Jean_Campus} alt="St_Jean_Campus" />
        </picture>
      </div>

      <div class="w-1/12 rounded-lg overflow-hidden m-5">
        <picture class="block">
          <source srcset={Prepa_Study_Cat} type="image/jpeg" />
          <img class="object-cover" src={Prepa_Study_Cat} alt="Prepa_Study_Cat" />
        </picture>
      </div>

      <div class="block">
        <h1 class="font-bold text-lg my-2">Classe Préparatoire - St Jean</h1>
        <span class="text-gray-500 bg-gray-200 p-1 px-3 rounded-full mb-5">ECS Track  (Douai)</span>
        <br><span>- Academic strength: Mathematics and Languages</span>
      </div>
      
      <div class="w-1/12 rounded-lg overflow-hidden m-5">
        <picture class="block">
          <source srcset={St_Jean_Logo_Prepa} type="image/webp" />
          <img class="object-cover" src={St_Jean_Logo_Prepa} alt="St_Jean_Logo_Prepa" />
        </picture>
      </div>
    </div>

    <!--ESSEC-->
    <div class="flex justify-center items-center py-3">
      <div class="w-1/12 overflow-hidden m-5">
        <picture class="block">
          <source srcset={ESSEC_Logo} type="image/jpg" />
          <img class="object-cover" src={ESSEC_Logo} alt="ESSEC_Logo" />
        </picture>
      </div>

      <div class="block">
        <h1 class="font-bold text-lg my-2">Master Grande Ecole- ESSEC Business School</h1>
        <span class="text-gray-500 bg-gray-200 p-1 px-3 rounded-full mb-5">Master in Management   (Paris)</span>
        <br><span>- Major in Finance with Accounting, Negotiation <br>and Programming courses in English</span>  
      </div>

      <div class="w-1/12 rounded-lg overflow-hidden m-5">
        <picture class="block">
          <source srcset={ESSEC_Gala} type="image/jpeg" />
          <img class="object-cover" src={ESSEC_Gala} alt="ESSEC_Gala" />
        </picture>
      </div>
      <div class="w-1/6 rounded-lg overflow-hidden m-5">
        <picture class="block">
          <source srcset={ESSEC_Campus} type="image/webp" />
          <img class="object-cover" src={ESSEC_Campus} alt="ESSEC_Campus" />
        </picture>
      </div>
    </div>
</div>




<!--Finance Experience-->
<div class="flex justify-center align-start py-5">

    <!--DEEZER-->
    <div class="flex-col m-20 w-80 text-wrap text-center items-center">

      <div class="flex justify-center items-center p-5">
        <picture class="block w-1/2">
          <source srcset={Deezer_Logo} type="image/jpg" />
          <img class="object-cover" src={Deezer_Logo} alt="Deezer_Logo" />
        </picture>
      </div>

      <div class="w-80">
        <h1 class="block font-bold text-lg my-2">DEEZER</h1>
        <span class="text-gray-500 bg-gray-200 p-1 px-3 rounded-full mb-5">Junior B2B Accountant   (Paris)</span>
        <br><span class="max-w-96 text-wrap text-left">
          - Developed <strong>automation</strong> and <strong>quality controls</strong> to monitor contracts, <br>reducing 1-day tasks to 1-hour
          <br>- Declared the TVA and WHT and imported accounting entries in the <strong>ERP (SAGE)</strong>
          <br>- Monitored the invoicing process for worldwide <strong>B2B partners</strong>
          <br>- Followed up on overdue payments and <strong>reduced the Aged Balance</strong>
        </span>  
      </div>

      <div class="flex justify-center items-center p-5">
        <picture class="flex justify-center items-center">
          <source srcset={Deezer_Team} type="image/jpeg" />
          <img class="object-cover" src={Deezer_Team} alt="Deezer_Team" />
        </picture>
      </div>
    </div>

    <!--DELOITTE-->
    <div class="flex-col m-20 w-80 text-wrap text-center items-center">

      <div class="flex justify-center items-center p-5">
        <picture class="block w-1/2">
          <source srcset={Deloitte_Logo} type="image/jpg" />
          <img class="object-cover" src={Deloitte_Logo} alt="Deloitte_Logo" />
        </picture>
      </div>

      <div class="w-80">
        <h1 class="block font-bold text-lg my-2">DELOITTE</h1>
        <span class="text-gray-500 bg-gray-200 p-1 px-3 rounded-full mb-5">Private Equity trainee Accountant</span> 
        <br><span class="text-gray-500 bg-gray-200 p-1 px-3 rounded-full mb-5">(Luxembourg)</span>
        <br><span class="max-w-96 text-wrap">
          - Analysed confidential Legal Agreements and Board Minutes to <strong>understand client’s activities and their 
          environments</strong> over the audited period and their compliance with appropriate regulations
          <br>- Completed testing on audit projects using <strong>analytical procedures</strong> & <strong>innovative tools</strong>
          <br>- <strong>Reconciled TB, GL, Valuation Reports, Audit evidence and Testing</strong> to ensure that no amount was
          misstated in the BS and PL of Draft FS
      </span>
      </div>
      
      <div class="flex justify-center items-center p-5">
        <picture class="flex justify-center items-center w-3/4">
          <source srcset={Deloitte_Building} type="image/jpeg" />
          <img class="object-cover" src={Deloitte_Building} alt="Deloitte_Building" />
        </picture>
      </div>
    </div>
</div>






<!--Student Jobs-->
<div class="flex-col justify-center align-start py-5">

    <!--BDE-->
    <div class="flex justify-center items-center m-5">
      <div class="w-1/12 overflow-hidden m-5">
        <picture class="block">
          <source srcset={BDE_Logo} type="image/jpg" />
          <img class="object-cover" src={BDE_Logo} alt="BDE_Logo" />
        </picture>
      </div>

      <div class="flex-col text-sm">
        <h1 class="font-bold text-lg">ESSEC Student Association – n°1 BDE in France with 1M yearly Budget</h1>
        <span class="text-gray-500 bg-gray-200 p-1 px-3 rounded-full mb-5">International Pole – Project manager for communication and events planning (Cergy)</span>
        <br><span class="mt-2">- Organised 2022 Welcome Week for +500 ESSEC international students with a 10k budget
          <br>- Negotiated measures with the School administration for fairer budgets for international students 
          <br>and a better communication  from ESSEC in English
          <br>- Created a comprehensive online guide to facilitate the access to information for new students
          <br><br><a href="https://view.genially.com/6267de90302a5e0018a3ed7a">
            <button class="block bg-blue-100 p-1 px-3 rounded-full font-semibold underline 
            hover:transition-all ease-in-out hover:scale-110 duration-300">Link to ESSEC Welcome Guide 2022</button></a>
        </span>  
      </div>

      <div class="w-1/12 rounded-lg overflow-hidden m-5">
        <picture class="block">
          <source srcset={BDE_Interpole} type="image/jpeg" />
          <img class="object-cover" src={BDE_Interpole} alt="BDE_Interpole" />
        </picture>
      </div>
	</div>


	<!--Teaching-->
	<div class="flex justify-center items-center m-5">
      <div class="flex-col w-1/12 overflow-hidden m-5">
        <picture class="block">
          <source srcset={EIAPIC_Logo} type="image/jpg" />
          <img class="object-cover" src={EIAPIC_Logo} alt="EIAPIC_Logo" />
        </picture>
        <picture class="block">
          <source srcset={PHARES_Logo} type="image/jpg" />
          <img class="object-cover" src={PHARES_Logo} alt="PHARES_Logo" />
        </picture>
      </div>

      <div class="flex-col text-sm pt-8 pb-5">
        <h1 class="font-bold text-base">Programme PHARES</h1>
        <span class="text-gray-500 bg-gray-200 p-1 px-3 rounded-full mb-5">Volunteer workshop animator (Cergy)</span>
        <br><span class="mt-2">- Organized activities every Saturday morning for groups of high schoolers with learning disabilities
        </span>
        <h1 class="font-bold text-base">Association EIAPIC</h1>
        <span class="text-gray-500 bg-gray-200 p-1 px-3 rounded-full mb-5">Volunteer teacher (Mantes-la-Jolie)</span>
        <br><span class="mt-2">- Organized homework workshops for Primary and Middle schoolers during their after-school time
        <br>- Gave Maths and English classes to High schoolers as part of the excellence program of the association
        </span>  
        <h1 class="font-bold text-base">Independant Maths Tutor</h1>
        <span class="text-gray-500 bg-gray-200 p-1 px-3 rounded-full mb-5">Maths Tutor (Online)</span>
        <br><span class="my-2">- Tutored students from Baccalaureate Spé Maths to 6th Grade level
        </span>  
      </div>

      <div class="w-1/6 rounded-lg overflow-hidden m-5">
        <picture class="block">
          <source srcset={ZOOM_Screen} type="image/png" />
          <img class="object-cover" src={ZOOM_Screen} alt="ZOOM_Screen" />
        </picture>
      </div>
	</div>


	<!--Restaurant-->
	<div class="flex justify-center items-center m-5">
      <div class="w-1/12 overflow-hidden m-5">
        <picture class="block">
          <source srcset={Orangerie_Logo} type="image/jpg" />
          <img class="object-cover" src={Orangerie_Logo} alt="Orangerie_Logo" />
        </picture>
      </div>

      <div class="block">
        <h1 class="font-bold text-lg my-2">L'Orangerie de Monsieur</h1>
        <span class="text-gray-500 bg-gray-200 p-1 px-3 rounded-full mb-5">Waitressing experience in a high end Bakery/Restaurant (Versailles)</span>
      </div>

      <div class="w-1/12 rounded-lg overflow-hidden m-5">
        <picture class="block">
          <source srcset={Orangerie_Restaurant} type="image/jpg" />
          <img class="object-cover" src={Orangerie_Restaurant} alt="Orangerie_Restaurant" />
        </picture>
      </div>
    </div>
</div>



<!--Projects-->
<div class="flex flex-col justify-center items-center">
    <!--China-->
    <div>
      <div class="flex-col m-20 text-wrap text-center items-center">

        <div class="flex justify-center items-center p-5">
          <picture class="block w-1/6">
            <source srcset={PKU_Logo} type="image/png" />
            <img class="object-cover" src={PKU_Logo} alt="PKU_Logo" />
          </picture>
        </div>
  
        <div class="flex flex-col justify-center items-center">
          <h1 class="block font-bold text-lg my-2">CHINA</h1>
          <span class="text-gray-500 bg-gray-200 p-1 px-3 rounded-full mb-0">PKU Exchange - MBA Program (Beijing)</span> 
          <br><span class="text-gray-500 bg-gray-200 p-1 px-3 rounded-full mb-5 text-sm">(4 months - Sept 2024)</span>
          <br><span class="max-w-4xl text-wrap">
            - Will join <strong>Chinas' top university</strong> and take part in their <strong>MBA program</strong>
            <br>- Will enroll in Finance, management and geopolitical courses and learn about local markets and business practicies
            <br>- Will further my <strong>network</strong> in <strong>Asia's</strong> business and <strong>entrepreneurs circles</strong>
            <br>- Will experience first hand how far China has taken its technogology and learn about <strong>upcoming its StartUps</strong>
            <br>- Built an online Flash card tool to revise <strong>Mandarin</strong> vocabulary in preparation for this exchange
        </span>
        <!--<a href="Vocabulary.html"><button class="block bg-blue-100 p-1 px-3 mt-3 rounded-full font-semibold underline 
          hover:transition-all ease-in-out hover:scale-110 duration-300">See link - Vocabulary corner</button></a>-->
        </div>
        
        <div class="flex justify-center items-center p-5">
          <picture class="flex justify-center items-center w-3/4">
            <source srcset={PKU_Campus} type="image/avif" />
            <img class="object-cover" src={PKU_Campus} alt="PKU_Campus" />
          </picture>
        </div>
      </div>
    </div>
</div>






<!--Interests-->

<!--Harp-->
<div class="flex flex-wrap justify-center mt-20 mx-30 items-center">
    <div class="flex flex-col">
      <h1 class="font-bold text-lg">Harp</h1>
      <span class="text-gray-500 bg-gray-200 p-1 px-3 rounded-full mb-5">(Paris, Madrid and London)</span>
    </div>
    <div class="mx-5">
      <span>- Grade 5 Exam of the Trinity College in London
        <br>- Harpist of ESSEC Symphonic Orchestra
        <br>- Selected in 2018 to be the Harpist of the AEFE Symphonic Orchestra 
        <br>and performed at Radio France</span>
    </div>
    <div>
      <a href="https://www.tiktok.com/@camille_harpcover"><button class="block bg-blue-100 p-1 px-3 rounded-full font-semibold underline 
        hover:transition-all ease-in-out hover:scale-110 duration-300">See TikTok Account</button></a>
    </div>
  </div>

  <div  class="flex flex-wrap justify-center my-5 mx-30">
    <div class="w-1/4 overflow-hidden m-5">
      <picture class="object-cover rounded-lg">
        <source srcset={HARP_Auditorium} type="image/jpeg" />
        <img class="object-cover" src={HARP_Auditorium} alt="HARP_Auditorium" />
      </picture>
    </div>
    
    <div class="w-1/6 overflow-hidden m-5">
      <picture class="object-cover rounded-lg">
        <source srcset={HARP_concert_live} type="image/jpeg" />
        <img class="object-cover" src={HARP_concert_live} alt="HARP_concert_live" />
      </picture>
    </div>

    <div class="w-1/12 overflow-hidden m-5">
      <picture class="object-cover rounded-lg">
        <source srcset={HARP_concert} type="image/jpeg" />
        <img class="object-cover" src={HARP_concert} alt="HARP_concert" />
      </picture>
    </div>

    <div class="w-1/6 overflow-hidden m-5">
      <picture class="object-cover rounded-lg">
        <source srcset={HARP_cat} type="image/jpeg" />
        <img class="object-cover" src={HARP_cat} alt="HARP_cat" />
      </picture>
    </div>
</div>

<!--Orienteering-->
<div class="flex flex-wrap justify-center mt-10 mx-30 items-center">
    <div class="flex flex-col">
      <h1 class="font-bold text-lg">Orienteering</h1>
      <span class="text-gray-500 bg-gray-200 p-1 px-3 rounded-full mb-5">(France, and UK)</span>
    </div>
    <div class="mx-5">
      <span>- Individual competitions and relays at national level</span>
    </div>
  </div>
  <div  class="flex flex-wrap justify-center my-5 mx-30">
    
    <div class="w-1/6 overflow-hidden m-5">
      <picture class="object-cover rounded-lg">
        <source srcset={Orientation_Balise} type="image/jpg" />
        <img class="object-cover" src={Orientation_Balise} alt="Orientation_Balise" />
      </picture>
    </div>

    <div class="w-1/12 overflow-hidden m-5">
      <picture class="object-cover rounded-lg">
        <source srcset={Orientation_tools} type="image/jpg" />
        <img class="object-cover" src={Orientation_tools} alt="Orientation_tools" />
      </picture>
    </div>

    <div class="w-1/4 overflow-hidden m-5">
      <picture class="object-cover rounded-lg">
        <source srcset={Orientation_Map} type="image/gif" />
        <img class="object-cover" src={Orientation_Map} alt="Orientation_Map" />
      </picture>
    </div>

    <div class="w-1/6 overflow-hidden m-5">
      <picture class="object-cover rounded-lg">
        <source srcset={Orientation_Logo} type="image/jpg" />
        <img class="object-cover" src={Orientation_Logo} alt="Orientation_Logo" />
      </picture>
    </div>
</div>







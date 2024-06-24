<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
    import { fly } from 'svelte/transition';
    import Albert from '$lib/images/ALBERT.jpg';
    let isExperienceOpen = true;
    let isActivityOpen = true;
    let isEducationOpen = true;
    let isSkillsOpen = true;
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        --primary-color: #3878DB;
        --text-color: #CED9E7;
    }

    html {
        font-size: 10px;
    }

    body {
        font-family: 'Nunito Sans', sans-serif;
        background-color: black;
        color: white;
    }

    img {
        width: 100%;
    }

    a {
        text-decoration: none;
        color: white;
    }

    .description {
        margin-top: 1rem;
        font-size: 1.5rem;
        font-weight: 200;
        color: var(--text-color);
    }

    .title {
        margin-top: 1rem;
        margin-bottom: 2rem;
        color: var(--primary-color);
        font-weight: 800;
        font-size: 2.5rem;
        text-transform: uppercase;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .item_title {
        color: var(--primary-color);
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 1.9rem;
        font-weight: 500;
    }

    .item_preTitle {
        color: var(--primary-color);
        font-style: italic;
        font-size: 1.2rem;
        font-weight: 100;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .item_subtitle {
        color: var(--primary-color);
        font-size: 1.4rem;
    }

    .container {
        max-width: 1000;
        width: 100%;
        margin: 0 auto;
        display: grid;
        padding: 1rem;
        background: #070707;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }

    @media only screen and (max-width: 768px) {
        .container {
            width: 100%;
            grid-template-columns: 1fr;
            padding: 3rem;
            gap: 7rem;
        }
    }

    .profile {
        grid-column: 1 / -1;
        margin-bottom: 2rem;
    }

    .profile_container {
        display: flex;
        gap: 2rem;
    }

    .profile_profileImg {
        max-width: 250px;
    }

    .profile_name_firstname {
        color: white;
        font-weight: 100;
        font-size: clamp(1.5rem, 8vw, 4rem);
        text-transform: uppercase;
        display: block;
        margin-bottom: -0.8rem;
        text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
    }

    .profile_name_lastname {
        color: var(--primary-color);
        font-weight: 500;
        font-size: clamp(2.5rem, 15vw, 7rem);
        text-transform: uppercase;
        display: block;
        text-shadow: 2px 2px 4px rgba(245, 243, 243, 0.5);
    }

    .profile_title {
        font-size: 1.5rem;
        font-weight: 600;
        text-transform: uppercase;
    }

    .download {
        display: block;
        text-decoration: underline;
        font-size: 1.6rem;
        margin-top: 1rem;
    }

    .download:hover {
        color: var(--primary-color);
    }

    @media only screen and (max-width: 768px) {
        .profile_container {
            flex-direction: column;
        }
    }

    .exp_list {
        margin-top: 0.5rem;
        margin-left: 3rem;
        line-height: 1;
    }

    .act_item {
        margin-top: 2rem;
    }

    .expandable {
        overflow: hidden;
    }

    .hidden {
        display: none;
    }

    .icon {
        transition: transform 0.3s;
    }

    .rotate {
        transform: rotate(180deg);
    }

    .sub-section {
        background: #111;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 0.5rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: box-shadow 0.3s ease;
    }

    .sub-section:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }

    .sub-section-title {
        font-size: 1.6rem;
        font-weight: 700;
        color: var(--primary-color);
        margin-bottom: 0.5rem;
    }

    .sub-section-description {
        font-size: 1.4rem;
        color: var(--text-color);
    }
</style>

<div class="container">
    <div class="profile">
        <div class="profile_container">
            <div class="profile_profileImg">
                <picture class="block">
                    <source srcset={Albert} type="image/jpg" />
                    <img class="object-cover" src={Albert} alt="ALBERT" />
                </picture>
            </div>
            <div>
                <h1 class="profile_name">
                    <span class="profile_name_firstname">Albert</span>
                    <span class="profile_name_lastname">de Larrard</span>
                </h1>
                <p class="profile_title">Étudiant ESSEC/École du Louvre</p>
                <p class="description">En double cursus afin de devenir commissaire-priseur.</p>
                <a class="download" href="./cv.pdf" download="CV.pdf">Download</a>
            </div>
        </div>
    </div>
    <div class="group-1">
        <div class="exp mb-6 p-4 bg-gray-900 rounded-lg shadow-lg">
            <h3 class="title" on:click={() => isExperienceOpen = !isExperienceOpen}>
                Expériences
                <span class="icon {isExperienceOpen ? 'rotate' : ''}">▼</span>
            </h3>
            {#if isExperienceOpen}
                <div class="expandable" in:fly={{ y: 20 }} out:fly={{ y: -20 }}>
                    <div class="sub-section">
                        <p class="item_preTitle">Bordeaux : janvier 2024</p>
                        <h4 class="item_title">Hôtel des Ventes Bordeaux-Quinconces - Maître Courau</h4>
                        <p class="item_subtitle">Stagiaire clerc de Commissaire Priseur</p>
                        <ul class="exp_list description">
                            <li>Désignation et estimations d'objets.</li>
                            <li>Organisation et préparation de ventes (mobiliers, objets d'arts, tableaux).</li>
                        </ul>
                    </div>
                    <div class="sub-section">
                        <p class="item_preTitle">Paris : janvier 2021</p>
                        <h4 class="item_title">Hôtel des Ventes Deburaux/Duplessis - Maître Deburaux</h4>
                        <p class="item_subtitle">Stagiaire clerc de Commissaire Priseur</p>
                        <ul class="exp_list description">ç
                            <li>Relation client dont présentation des articles aux clients avant les ventes.</li>
                            <li>Co-organisation des ventes à Drouot et gestion téléphonique des clients internationaux durant les ventes.</li>
                        </ul>
                    </div>
                    <div class="sub-section">
                        <p class="item_preTitle">Paris : juin-août 2018</p>
                        <h4 class="item_title">Cabinet Oxnard</h4>
                        <p class="item_subtitle">Assistant juridique</p>
                        <ul class="exp_list description">
                            <li>Aide de l'équipe juridique dans la communication numérique dans le domaine de l'immobilier et dans les recherches juridiques.</li>
                            <li>Aide à la rédaction d'un livre dans la formation immobilière d'un avocat.</li>
                        </ul>
                    </div>
                </div>
            {/if}
        </div>
        <div class="act mb-6 p-4 bg-gray-900 rounded-lg shadow-lg">
            <h3 class="title" on:click={() => isActivityOpen = !isActivityOpen}>
                Activités
                <span class="icon {isActivityOpen ? 'rotate' : ''}">▼</span>
            </h3>
            {#if isActivityOpen}
                <div class="expandable" in:fly={{ y: 20 }} out:fly={{ y: -20 }}>
                    <div class="sub-section">
                        <p class="item_preTitle">Novembre 2022</p>
                        <h4 class="item_title">École du Louvre</h4>
                        <p class="item_subtitle">Représentant étudiant</p>
                        <ul class="exp_list description">
                            <li>En charge de la liaison entre l'administration et les étudiants du Master 2.</li>
                        </ul>
                    </div>
                    <div class="sub-section">
                        <p class="item_preTitle">Juin 2022</p>
                        <h4 class="item_title">École du Louvre</h4>
                        <p class="item_subtitle">Délégué à la Commission Pédagogique</p>
                        <ul class="exp_list description">
                            <li>Participation à la commission pour la sélection de nouveaux enseignants et l'évaluation des enseignements actuels.</li>
                        </ul>
                    </div>
                    <div class="sub-section">
                        <p class="item_preTitle">2019 - 2023</p>
                        <h4 class="item_title">BDE de l'École du Louvre</h4>
                        <p class="item_subtitle">Secrétaire et Trésorier</p>
                        <ul class="exp_list description">
                            <li>Organisation d'événements étudiants, gestion des finances de l'association.</li>
                        </ul>
                    </div>
                </div>
            {/if}
        </div>
    </div>
    <div class="group-2">
        <div class="edu mb-6 p-4 bg-gray-900 rounded-lg shadow-lg">
            <h3 class="title" on:click={() => isEducationOpen = !isEducationOpen}>
                Formation
                <span class="icon {isEducationOpen ? 'rotate' : ''}">▼</span>
            </h3>
            {#if isEducationOpen}
                <div class="expandable" in:fly={{ y: 20 }} out:fly={{ y: -20 }}>
                    <div class="sub-section">
                        <p class="item_preTitle">Cergy : 2022 - 2024</p>
                        <h4 class="item_title">ESSEC</h4>
                        <p class="item_subtitle">Master in Management</p>
                        <ul class="exp_list description">
                            <li>Programme Master in Management, en double diplôme avec l’École du Louvre.</li>
                        </ul>
                    </div>
                    <div class="sub-section">
                        <p class="item_preTitle">Paris : 2019 - 2023</p>
                        <h4 class="item_title">École du Louvre</h4>
                        <p class="item_subtitle">MASTER 2</p>
                        <ul class="exp_list description">
                            <li>Master 2 spécialisé en Histoire de l'Art appliqué au marché de l'art.</li>
                        </ul>
                    </div>
                    <div class="sub-section">
                        <p class="item_preTitle">Poitiers : 2015-2019</p>
                        <h4 class="item_title">Université de Poitiers</h4>
                        <p class="item_subtitle">Droit privé - Licence 3</p>
                        <ul class="exp_list description">
                            <li>Formation juridique privatiste avec spécialisation en droit des contrats spéciaux et en droit des sociétés.</li>
                        </ul>
                    </div>
                </div>
            {/if}
        </div>
        <div class="skills mb-6 p-4 bg-gray-900 rounded-lg shadow-lg">
            <h3 class="title" on:click={() => isSkillsOpen = !isSkillsOpen}>
                Compétences
                <span class="icon {isSkillsOpen ? 'rotate' : ''}">▼</span>
            </h3>
            {#if isSkillsOpen}
                <div class="expandable" in:fly={{ y: 20 }} out:fly={{ y: -20 }}>
                    <div class="sub-section">
                        <p class="item_subtitle">Bureautique</p>
                        <ul class="exp_list description">
                            <li>Pack Office : Avancé</li>
                            <li>Python / HTML / CSS : Débutant</li>
                        </ul>
                    </div>
                    <div class="sub-section">
                        <p class="item_subtitle">Langues</p>
                        <ul class="exp_list description">
                            <li>Anglais : Courant</li>
                            <li>Italien : Intermédiaire</li>
                            <li>Espagnol : Débutant</li>
                        </ul>
                    </div>
                    <div class="sub-section">
                        <p class="item_subtitle">Projets Personnels</p>
                        <ul class="exp_list description">
                            <li>Secrétaire et trésorier du BDE de l'École du Louvre</li>
                            <li>Développement et montage de vidéos</li>
                        </ul>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>

// Sélectionner les éléments du DOM
const usernameForm = document.getElementById('usernameForm');
const usernameInput = document.getElementById('usernameInput');
const locationButton = document.getElementById('locationButton');

// Ajouter un gestionnaire d'événement pour le bouton "Géolocaliser"
locationButton.addEventListener('click', function (e) {
    e.preventDefault(); // Empêcher la soumission du formulaire

    // Récupérer le nom d'utilisateur depuis le champ de texte
    const username = usernameInput.value;

    // Afficher un message d'attente
    const loadingMessage = document.createElement('p');
    loadingMessage.textContent = 'Recherche des informations de géolocalisation';

    // Créer un élément span pour les petits points animés
    const dotsSpan = document.createElement('span');
    dotsSpan.textContent = '...';

    // Ajouter la classe pour l'animation des points
    dotsSpan.classList.add('dots');

    // Ajouter le span des points au message de recherche
    loadingMessage.appendChild(dotsSpan);

    usernameForm.replaceWith(loadingMessage);

    setTimeout(function () {
        // Créer un élément paragraphe pour afficher le nom d'utilisateur
        const usernameP = document.createElement('p');
        const using = document.createElement('p');
        const location = document.createElement('p');
        const update = document.createElement('p');
        const error = document.createElement('p');
        const game = document.createElement('p');
        usernameP.textContent = `Nom d'utilisateur : ${username}`;
        using.textContent = 'Dernière utilisation : 09/09/2023';
        location.textContent = 'Dernière position : France, Sangatte';
        update.textContent = "Dernière actualisation : 15/09/2023";
        game.textContent = "Dernière partie : Saint Row : The Third";

        // Créer un élément paragraphe pour afficher le nom d'utilisateur de Rémi
        const usernamePremi = document.createElement('p');
        const usingremi = document.createElement('p');
        const locationremi = document.createElement('p');
        const updateremi = document.createElement('p');
        const gameremi = document.createElement('p');
        usernamePremi.textContent = `Nom d'utilisateur : ${username}`;
        usingremi.textContent = 'Dernière utilisation : 13/09/2023';
        locationremi.textContent = 'Dernière position : France, Calais';
        updateremi.textContent = "Dernière actualisation : 15/09/2023";
        gameremi.textContent = "Dernière partie : Lego City : Undercover";

        // Créer un élément paragraphe pour afficher le nom d'utilisateur de Rémi
        const usernamePlaura = document.createElement('p');
        const usinglaura = document.createElement('p');
        const locationlaura = document.createElement('p');
        const updatelaura = document.createElement('p');
        const gamelaura = document.createElement('p');
        usernamePlaura.textContent = `Nom d'utilisateur : ${username}`;
        usinglaura.textContent = 'Dernière utilisation : 14/09/2023';
        locationlaura.textContent = 'Dernière position : France, Calais';
        updatelaura.textContent = "Dernière actualisation : 15/09/2023";
        gamelaura.textContent = "Dernière partie : Disney Speedstorm";

        // Vérifier si le nom d'utilisateur est égal à "neptile"
        if (username === "neptile") {
            // Remplacer le formulaire par les informations de l'utilisateur
            // usernameForm.replaceWith(usernameP, update, location, humidity);

            // Remplacer le message d'attente par les informations de l'utilisateur
            loadingMessage.replaceWith(usernameP, using, location, update, game);
        } else if (username === "cesremi") {
            // Remplacer le formulaire par les informations de l'utilisateur
            // usernameForm.replaceWith(usernamePremi, updateremi, locationremi, humidityremi);

            // Remplacer le message d'attente par les informations de l'utilisateur
            loadingMessage.replaceWith(usernamePremi, usingremi, locationremi, updateremi, gameremi);
        } else if (username === "laura") {
            // Remplacer le formulaire par les informations de l'utilisateur
            // usernameForm.replaceWith(usernamePlaura, updatelaura, locationlaura, humiditylaura);

            // Remplacer le message d'attente par les informations de l'utilisateur
            loadingMessage.replaceWith(usernamePlaura, usinglaura, locationlaura, updatelaura, gamelaura);
        } else {
            // Afficher un message d'erreur si le nom d'utilisateur n'est pas "neptile"
            // error.textContent = 'Utilisateur inconnu';
            // usernameForm.replaceWith(error);

            // Afficher un message d'erreur si le nom d'utilisateur n'est pas "neptile"
            error.textContent = 'Utilisateur inconnu';
            loadingMessage.replaceWith(error);
        }
    }, 60000); // Délai d'attente de 1 minute (60000 millisecondes)
});

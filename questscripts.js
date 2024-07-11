let questCount = 0;
const maxQuests = 6;
const adminPassword = "zf"; // Change this to your desired password

function addQuest() {
    const questTitle = document.getElementById('questTitle').value;
    const questDescription = document.getElementById('questDescription').value;
    const questReward = document.getElementById('questReward').value;

    if (questTitle === '' || questDescription === '' || questReward === '') {
        alert('Please fill in all the fields.');
        return;
    }

    if (questCount >= maxQuests) {
        alert('You have reached the maximum number of quests.');
        return;
    }

    const questPapersContainer = document.getElementById('questPapersContainer');

    const questPaper = document.createElement('div');
    questPaper.className = 'quest-paper';
    
    // Random rotation between -15 and 15 degrees
    const rotation = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 25);
    questPaper.style.transform = `rotate(${rotation}deg)`;

    const questTitleElement = document.createElement('h2');
    questTitleElement.textContent = questTitle;
    questPaper.appendChild(questTitleElement);

    const questDescriptionElement = document.createElement('p');
    questDescriptionElement.textContent = questDescription;
    questPaper.appendChild(questDescriptionElement);

    const questRewardElement = document.createElement('p');
    questRewardElement.className = 'reward';
    questRewardElement.textContent = `Reward: ${questReward}`;
    questPaper.appendChild(questRewardElement);

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
        questPapersContainer.removeChild(questPaper);
        questCount--;
    });
    questPaper.appendChild(removeButton);

    questPapersContainer.appendChild(questPaper);
    questCount++;

    document.getElementById('questTitle').value = '';
    document.getElementById('questDescription').value = '';
    document.getElementById('questReward').value = '';
}


function login() {
    const password = document.getElementById('adminPassword').value;
    if (password === adminPassword) {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('addQuestContainer').style.display = 'block';
    } else {
        alert('Incorrect password.');
    }
}

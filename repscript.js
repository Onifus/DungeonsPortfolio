const frakceNames = [
    "Orc Academy",
    "The Black Shield",
    "Golden Leaves",
    "Silverwood Rangers",
    "Riverside Rovers",
    "Toadstool Traders",
    "Goldenblood Reavers",
    "Deeprock Fellowship",
    "Shieldwall of Arnor",
    "Marksmen of Edoras",
    "Wayward Scouts",
    "Forsaken Rangers"
];
const friendship = [
    "Nox"
];

const playername = [
    "andree",
	"bert",
	"rob",
	"fork",
	"lob",
];
function createBars(containerId) {
    const container = document.getElementById(containerId);
    for (let i = 0; i < frakceNames.length; i++) {
        const barContainer = document.createElement('div');
        barContainer.className = 'bar-container';

        const frakceName = document.createElement('p');
        frakceName.innerText = frakceNames[i];

        const bar = document.createElement('div');
        bar.className = 'bar';
        const barValue = document.createElement('div');
        barValue.className = 'bar-inner';
        barValue.style.width = '25%';
        updateBarText(barValue, 25);
        bar.appendChild(barValue);
        barContainer.appendChild(frakceName);
        barContainer.appendChild(bar);

        container.appendChild(barContainer);

        const increaseBtn = document.createElement('button');
        increaseBtn.textContent = '+';
        increaseBtn.className = 'increase-btn';
        increaseBtn.addEventListener('click', function () {
            updateBarWidth(barValue, true);
        });
        barContainer.appendChild(increaseBtn);

        const decreaseBtn = document.createElement('button');
        decreaseBtn.textContent = '-';
        decreaseBtn.className = 'increase-btn decrease-btn';
        decreaseBtn.addEventListener('click', function () {
            updateBarWidth(barValue, false);
        });
        barContainer.appendChild(decreaseBtn);

        let widthStr = barValue.style.width || '0%';
        currentWidth = parseFloat(widthStr);
        updateBarText(barValue, currentWidth);
    }
}

function updateBarText(barValue, newValue) {
    if (!barValue) return;

    let statusText = '';
    let barColor = '';

    if (newValue <= 10) {
        statusText = 'hated';
        barColor = 'red';
    } else if (newValue <= 20) {
        statusText = 'unfriendly';
        barColor = 'orange';
    } else if (newValue <= 40) {
        statusText = 'neutral';
        barColor = 'grey';
    } else if (newValue <= 60) {
        statusText = 'friendly';
        barColor = 'blue';
    } else if (newValue <= 80) {
        statusText = 'honored';
        barColor = 'green';
    } else if (newValue <= 100) {
        statusText = 'exalted';
        barColor = 'gold';
    }

    const barElement = barValue.closest('.bar');
    if (barElement) {
        barElement.style.backgroundColor = 'black';
        barValue.style.backgroundColor = barColor;
    }
    barValue.textContent = `${newValue}% (${statusText})`;
}

function updateBarWidth(barValue, isIncrease) {
    let widthStr = barValue.style.width || '0%';
    let currentWidth = parseFloat(widthStr);

    if (isIncrease) {
        if (currentWidth < 100) {
            currentWidth += 2;
        }
    } else {
        if (currentWidth > 0) {
            currentWidth -= 2;
        }
    }
    if (currentWidth > 100) {
        currentWidth = 100;
    }
    if (currentWidth < 0) {
        currentWidth = 0;
    }
    barValue.style.width = `${currentWidth}%`;

    updateBarText(barValue, currentWidth);
}

function addAllPlayers() {
    const selectedFrakce = document.getElementById('frakce').value;
    const value = parseInt(document.getElementById('globalValue').value);
    let barValue;
    let newValue;
    let currentWidth;
    for (let j = 1; j <= 5; j++) {
        const bars = document.getElementById('bars' + j).getElementsByClassName('bar');
        for (let i = 0; i < bars.length; i++) {
            let frakceName = bars[i].parentNode.getElementsByTagName('p')[0].innerText;
            if (frakceName === selectedFrakce) {
                barValue = bars[i].getElementsByClassName('bar-inner')[0];
                currentWidth = getComputedStyle(barValue).width;
                let currentWidthPercentage = (parseInt(currentWidth) / barValue.parentNode.offsetWidth) * 100;
                newValue = Math.min(currentWidthPercentage + value, 100);
                barValue.style.width = Math.round( newValue) + '%';
                let widthStr = barValue.style.width || '0%';
                currentWidth = parseFloat(widthStr);
                updateBarText(barValue, currentWidth);
            }
        }
    }
}

function RemAllPlayers() {
    const selectedFrakce = document.getElementById('frakce').value;
    const value = parseInt(document.getElementById('globalValue').value);
    let barValue;
    let newValue;
    let currentWidth;
    for (let j = 1; j <= 5; j++) {
        const bars = document.getElementById('bars' + j).getElementsByClassName('bar');
        for (let i = 0; i < bars.length; i++) {
            let frakceName = bars[i].parentNode.getElementsByTagName('p')[0].innerText;
            if (frakceName === selectedFrakce) {
                barValue = bars[i].getElementsByClassName('bar-inner')[0];
                currentWidth = getComputedStyle(barValue).width;
                let currentWidthPercentage = (parseInt(currentWidth) / barValue.parentNode.offsetWidth) * 100;
                newValue = Math.min(currentWidthPercentage - value, 100);
                barValue.style.width = Math.round( newValue) + '%';
                let widthStr = barValue.style.width || '0%';
                currentWidth = parseFloat(widthStr);
                updateBarText(barValue, currentWidth);
            }
        }
    }
}

// Vytvoření <option> elementů pro každou frakci
const selectElement = document.getElementById('frakce');
frakceNames.forEach(frakce => {
    const option = document.createElement('option');
    option.value = frakce;
    option.textContent = frakce;
    selectElement.appendChild(option);
});

// Vytvoření progress barů pro každého hráče
for (let i = 1; i <= 5; i++) {
    createBars(`bars${i}`);
	
}
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        searchFrakce();
    }
}

// Funkce pro vyhledávání frakcí
function searchFrakce() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const barsContainers = document.querySelectorAll('.bar-container');

    barsContainers.forEach(container => {
        const frakceName = container.querySelector('p').textContent.toLowerCase();
        if (frakceName.includes(searchInput)) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });
}






function addFriendshipBars() {
    const friendshipContainer = document.getElementById('friendship-players-container');
    for (let i = 0; i < 5; i++) {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'player';
        playerDiv.id = `friendship-player${i + 1}`;

        const playerImg = document.createElement('img');
        playerImg.src = 'https://via.placeholder.com/50';
        playerImg.alt = `Player ${i + 1}`;

        const playerName = document.createElement('h3');
        playerName.textContent = playername[i];

        const barsDiv = document.createElement('div');
        barsDiv.className = 'bars';
        barsDiv.id = `friendship-bars${i + 1}`;

        playerDiv.appendChild(playerImg);
        playerDiv.appendChild(playerName);
        playerDiv.appendChild(barsDiv);

        friendshipContainer.appendChild(playerDiv);

        // Generování pruhů pro každého nového hráče přátelství
        createBarss(`friendship-bars${i + 1}`);
    }
}
addFriendshipBars();


function createBarss(containerId) {
    const container = document.getElementById(containerId);
    for (let i = 0; i < friendship.length; i++) {
        const barContainer = document.createElement('div');
        barContainer.className = 'bar-container';

        const frakceName = document.createElement('p');
        frakceName.innerText = friendship[i];

        const bar = document.createElement('div');
        bar.className = 'bar';
        const barValue = document.createElement('div');
        barValue.className = 'bar-inner';
        barValue.style.width = '25%';
        updateBarText(barValue, 25);
        bar.appendChild(barValue);
        barContainer.appendChild(frakceName);
        barContainer.appendChild(bar);

        container.appendChild(barContainer);

        const increaseBtn = document.createElement('button');
        increaseBtn.textContent = '+';
        increaseBtn.className = 'increase-btn';
        increaseBtn.addEventListener('click', function () {
            updateBarWidth(barValue, true);
        });
        barContainer.appendChild(increaseBtn);

        const decreaseBtn = document.createElement('button');
        decreaseBtn.textContent = '-';
        decreaseBtn.className = 'increase-btn decrease-btn';
        decreaseBtn.addEventListener('click', function () {
            updateBarWidth(barValue, false);
        });
        barContainer.appendChild(decreaseBtn);

        let widthStr = barValue.style.width || '0%';
        currentWidth = parseFloat(widthStr);
        updateBarText(barValue, currentWidth);
    }
	

}


function addffAllPlayers() {
    const selectedFrakce = document.getElementById('friends').value;
	
    const value = parseInt(document.getElementById('globalffValue').value);
	
    let barValue;
    let newValue;
    let currentWidth;
    for (let j = 1; j <= 5; j++) {
		
        const bars = document.getElementById('friendship-bars' + j).getElementsByClassName('bar');
		
        for (let i = 0; i < bars.length; i++) {
            let frakceName = bars[i].parentNode.getElementsByTagName('p')[0].innerText;
            if (frakceName === selectedFrakce) {
				
                barValue = bars[i].getElementsByClassName('bar-inner')[0];
                currentWidth = getComputedStyle(barValue).width;
                let currentWidthPercentage = (parseInt(currentWidth) / barValue.parentNode.offsetWidth) * 100;
				console.log(currentWidth,barValue.parentNode.offsetWidth);
                newValue = Math.min(currentWidthPercentage + value, 100);
                barValue.style.width = Math.round( newValue) + '%';
				
                let widthStr = barValue.style.width || '0%';
                currentWidth = parseFloat(widthStr);
                updateBarffText(barValue, currentWidth);
            }
        }
    }
}

function RemffAllPlayers() {
    const selectedFrakce = document.getElementById('friends').value;
    const value = parseInt(document.getElementById('globalffValue').value);
    let barValue;
    let newValue;
    let currentWidth;
    for (let j = 1; j <= 5; j++) {
        const bars = document.getElementById('friendship-bars' + j).getElementsByClassName('bar');
        for (let i = 0; i < bars.length; i++) {
            let frakceName = bars[i].parentNode.getElementsByTagName('p')[0].innerText;
            if (frakceName === selectedFrakce) {
                barValue = bars[i].getElementsByClassName('bar-inner')[0];
                currentWidth = getComputedStyle(barValue).width;
                let currentWidthPercentage = (parseInt(currentWidth) / barValue.parentNode.offsetWidth) * 100;
                newValue = Math.min(currentWidthPercentage - value, 100);
                 barValue.style.width = Math.round( newValue) + '%';
                let widthStr = barValue.style.width || '0%';
                currentWidth = parseFloat(widthStr);
                updateBarffText(barValue, currentWidth);
            }
        }
    }
}




const selectfriendsElement = document.getElementById('friends');
	friendship.forEach(friendship => {
    const optionff = document.createElement('option');
    optionff.value = friendship;
    optionff.textContent = friendship;
    selectfriendsElement.appendChild(optionff);
});

function updateBarffText(barValue, newValue) {
    if (!barValue) return;

    let statusText = '';
    let barColor = '';

    if (newValue <= 10) {
        statusText = 'hated';
        barColor = 'red';
    } else if (newValue <= 20) {
        statusText = 'unfriendly';
        barColor = 'orange';
    } else if (newValue <= 40) {
        statusText = 'neutral';
        barColor = 'grey';
    } else if (newValue <= 60) {
        statusText = 'friendly';
        barColor = 'blue';
    } else if (newValue <= 80) {
        statusText = 'Good Friend';
        barColor = 'green';
    } else if (newValue <= 100) {
        statusText = 'True Friend';
        barColor = 'gold';
    }

    const barElement = barValue.closest('.bar');
    if (barElement) {
        barElement.style.backgroundColor = 'black';
        barValue.style.backgroundColor = barColor;
    }
    barValue.textContent = `${newValue}% (${statusText})`;
}


for (let g = 0; g <= 5; g++) {
	document.addEventListener('DOMContentLoaded', function () {
    const playerlist = playername[g]; // Zde můžete mít jakékoli dynamické hodnoty pro jméno hráče

    // Získání elementu <h3> s id "playerName" a nastavení textového obsahu
	
    const playerNameElement = document.getElementById('playerName' + g);
    playerNameElement.textContent = playerlist;
})};
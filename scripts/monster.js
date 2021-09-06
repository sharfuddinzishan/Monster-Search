import { monsterdb } from './monster-data.js'

const inputMonster = document.getElementById('inputMonster');
const searchButton = document.getElementById('searchButton');
const monsters = document.getElementById('monsters');
const errorMsg = document.getElementById('errorMsg');
let dataFound;
searchButton.addEventListener('click', showMonsters);
inputMonster.addEventListener('keyup', showMonsters);

function showMonsters() {
    let searchText = inputMonster.value.toLowerCase();
    dataFound = 'No'
    if (!searchText) {
        monsters.textContent = '';
        return
    }
    inputMonster.textContent = '';
    monsters.textContent = '';
    errorMsg.textContent = '';
    monsterdb.forEach(monster => {
        getMonster(monster, searchText);
    });
    if (dataFound === 'No') {
        errorNoDataFound();
    }
}

let getMonster = (singleMonster, searchText) => {
    let { id, name, username, email } = singleMonster;
    if (name.toLowerCase().includes(searchText) || email.toLowerCase().includes(searchText)) {
        dataFound = 'Yes';
        displayMonster(id, name, username, email);
    }
    dataFound === 'Yes' ? '' : dataFound = 'No'
}

let displayMonster = (id, name, username, email) => {
    let monsterDiv = document.createElement('div');
    monsterDiv.className = "monster col-12 col-md-6 col-lg-4";
    monsterDiv.innerHTML =
        `
        <div class="card shadow p-1">
            <img src="https://robohash.org/${id}.png?set=set3" width="150px" class="mx-auto img-thumbnail" alt="${name}" title="${username}">
            <div class="card-body p-1">
                <p class="card-title fs-4 text-center text-info fw-bold">${name}</p>
                <p class="text-muted text-center">${email}</p>
            </div>
        </div>
    `;
    monsters.appendChild(monsterDiv);
}

let errorNoDataFound = () => {
    errorMsg.innerHTML = "<h1 class='text-warning text-center fw-bold'>No Data Found</h1>";
}
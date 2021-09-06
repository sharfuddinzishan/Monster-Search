import { monsterdb } from './monster-data.js'

const inputMonster = document.getElementById('inputMonster');
const searchButton = document.getElementById('searchButton');
const monsters = document.getElementById('monsters');
const errorMsg = document.getElementById('errorMsg');

searchButton.addEventListener('click', showMonsters);
inputMonster.addEventListener('keyup', showMonsters);

function showMonsters() {
    let searchText = inputMonster.value.toLowerCase();
    if (!searchText) {
        return
    }
    inputMonster.textContent = '';
    monsters.textContent = '';
    monsterdb.forEach(monster => {
        getMonster(monster, searchText);
    });
}

let getMonster = (singleMonster, searchText) => {
    let { id, name, username, email } = singleMonster;
    if (name.toLowerCase().includes(searchText) || email.toLowerCase().includes(searchText)) {
        displayMonster(id, name, username, email);
    }
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
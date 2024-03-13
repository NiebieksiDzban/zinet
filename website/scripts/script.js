// * Stan druzyn
let sdruz1 = document.getElementById('stan-druz1');
let sdruz2 = document.getElementById('stan-druz2');
let sdruz3 = document.getElementById('stan-druz3');


// * Wplacone kwoty
let ldruz1 = document.getElementById('licytowanie-druz1');
let ldruz2 = document.getElementById('licytowanie-druz2');
let ldruz3 = document.getElementById('licytowanie-druz3');


// * Pula wartosci
let pwartosci = document.getElementById('pwartosci');
pwartosci.innerText = 0;


// * Default value for the maximum value
let max = 0


// * Connect to the server
const socket = io('http://localhost:3000');

socket.on('values', ({value, user}) => {
    console.log(`max: ${max}, value: ${value} user: ${user}`)
    if (value > max) {
        if (user == 'bluepitcher') {
            ldruz1.innerText = value;
            ldruzyn();
        } else if (user == 'bluepitcher2') {
            ldruz2.innerText = value;
            ldruzyn();
        } else if (user == 'bluepitcher3') {
            ldruz3.innerText = value;
            ldruzyn();
        }
    }
    max = Math.max(ldruz1.innerText, ldruz2.innerText, ldruz3.innerText);
});
// * Initial state of the teams
let sdruzyn = [10000, 10000, 10000];

sdruz1.innerText = sdruzyn[0];
sdruz2.innerText = sdruzyn[1];
sdruz3.innerText = sdruzyn[2];

// * Calculates the remaining points for each team and updates the state of the teams.
function ldruzyn() {
        sdruzyn[0] = 10000 - ldruz1.innerText;
        sdruzyn[1] = 10000 - ldruz2.innerText;
        sdruzyn[2] = 10000 - ldruz3.innerText;
        stanDruzyn();
};


// * Updates the state of the teams
function stanDruzyn() {
    sdruz1.innerText = sdruzyn[0];
    sdruz2.innerText = sdruzyn[1];
    sdruz3.innerText = sdruzyn[2];
    pwartosci.innerText = ldruz1.innerText + ldruz2.innerText + ldruz3.innerText;
}

// TRACCIA
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!

// Ecco i dati dei membri dei team:
// Wayne Barnett	Founder & CEO		wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor		angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager		walter-gordon-office-manager.jpg
// Angela Lopez	 Social Media Manager angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer			scott-estrada-developer.jpg
// Barbara Ramos Graphic Designer		barbara-ramos-graphic-designer.jpg

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    pic: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    pic: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    pic: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    pic: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    pic: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    pic: "barbara-ramos-graphic-designer.jpg",
  },
];
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let teamMember in teamMembers) {
  console.log(teamMembers[teamMember]);
}
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
const writeDom = document.getElementById("writeDOM");

for (const teamMember of teamMembers) {
  writeDom.innerHTML += `
  <div class="card m-3" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Team Member</h5>
          <p class="card-text">
            name : ${teamMember.name}, <br>
            role : ${teamMember.role}, <br>
            pic : ${teamMember.pic}
          </p>
        </div>
    </div>`;
}

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

const cardContainer = document.getElementById("cardContainer");

for (const teamMember of teamMembers) {
  cardContainer.innerHTML += `
  <div class="card m-3" style="width: 18rem">
        <img src="./img/${teamMember.pic}" class="card-img-top" alt="" id="cardImg"/>
        <div class="card-body">
          <h5 class="card-title">Team Member</h5>
          <p class="card-text">
            name : ${teamMember.name}, <br>
            role : ${teamMember.role}, <br>
          </p>
          <a href="#" class="btn btn-primary">Get in touch</a>
        </div>
      </div>`;
}

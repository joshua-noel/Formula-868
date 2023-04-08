const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbarMenu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

function drawTable(records){
    let result = document.querySelector('#result');
    
    let html='';

    for(let rec of records){
        let html += 
            `<tr>
                <td>${driver.Driver.givenName} ${driver.Driver.familyName}</td>
                <td>${driver.Constructors[0].name}</td>
                <td>${driver.points}</td>
            <\tr>`;
    }

    result.innerHTML = html;
    }

    async function getData(){
        const response = await fetch('https://ergast.com/api/f1/current/driverStandings');
        const data = await response.json();
        //drawTable(data.MRData.StandingsTable.StandingsLists[0].DriverStandings.slice(0, 10));
        drawTable(data);
    }

getData();
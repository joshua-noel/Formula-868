const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbarMenu');
const url = "http://ergast.com/api/f1/current/driverStandings.json"; //appends .json to format response as jsom instead of xml

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

function drawTable(driverArr) {
    let table = document.querySelector("tbody#results");

    for (let i = 0; i < 10; i++) { // Loop through the first 10 items only
        let driver = driverArr[i];
        if (driver) { // Check if the driver exists in the array
            let row = document.createElement("tr");
            let driver_cell = document.createElement("td");
            driver_cell.innerText = `${driver.Driver.givenName} ${driver.Driver.familyName}`;
            let company_cell = document.createElement("td");
            company_cell.innerText = `${driver.Constructors[0].name}`;
            let points_cell = document.createElement("td");
            points_cell.innerText = `${driver.points}`;

            row.appendChild(driver_cell);
            row.appendChild(company_cell);
            row.appendChild(points_cell);
            table.appendChild(row);
        }
    }
}

(async () => {
    const response = await fetch(url);
    const json = await response.json();

    drawTable(json.MRData.StandingsTable.StandingsLists[0].DriverStandings);
})();
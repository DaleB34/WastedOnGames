
const apiKey = "C021017D2A839D32E50154A4E556C847";


// document.getElementById("addBtn").addEventListener("click", addRow);

// function addRow() {   
//         const para = document.createElement("div");
//         para.innerText = fetchCSHours();
//         document.body.appendChild(para);
// }
fetchCSHours();

async function fetchCSHours(){
    const steamid = "76561198394533709";

    try{
        const response = await fetch("http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + apiKey + "&steamid=" + steamid + "&format=json");
        if(!response.ok){
            throw new Error("could not fetch resource");
        }

        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}


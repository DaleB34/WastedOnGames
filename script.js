
document.getElementById("addBtn").addEventListener("click", addRow);

function addRow() {   
        const para = document.createElement("div");
        para.innerText = "Hello Geeks";
        document.body.appendChild(para);
}

async function fetchCSHours(){

    try{
        const response = await fetch("https://api.steampowered.com/IPlayerService/GetOwnedGames/v1");
        if(!response.ok)
        {
            throw new Error("could not fetch resource");
        }

        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}


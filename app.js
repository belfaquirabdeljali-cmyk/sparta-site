window.addEventListener("load",()=>{
  document.getElementById("loader").classList.add("hide");
});

async function fetchStatus(){
  try{
    const r = await fetch(
      "https://api.mcstatus.io/v2/status/bedrock/SpartaMC.ma:19132"
    );
    const d = await r.json();
    document.getElementById("players").innerText = d.players.online;
  }catch{
    document.getElementById("players").innerText = "0";
  }
}
fetchStatus();
setInterval(fetchStatus,30000);

// COPY IP
document.getElementById("copyIp")?.addEventListener("click",()=>{
  navigator.clipboard.writeText("SpartaMC.ma");
});

const copyBtn = document.getElementById("copyIp");
const toast = document.getElementById("copyToast");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText("SpartaMC.ma");

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1600);
});

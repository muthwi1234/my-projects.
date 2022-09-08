function TransferNews(){
  fetch ("https://transfermarket.p.rapidapi.com/news/detail?id=372889")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("card-news").src = data.TransferNews
    document.getElementById("card-title").textContent = data.title
});
}

const addLikes = document.getElementById("like-count");
let likes = 0;
document.getElementById("like-button").addEventListener("click", () =>{
    likes += 1;
    renderLikes();
})

function Competitions(){
  fetch ("https://transfermarket.p.rapidapi.com/transfers/list-rumors?competitionIds=IT1%2CGB1&offset=0&sort=date_desc")
  .then((res) => res.json())
  .then((data) => {
      document.getElementById("card-competitions").src = data.Competitions
      document.getElementById("card-title").textContent = data.title
  });
}

function Players(){
  fetch ("https://transfermarket.p.rapidapi.com/players/get-performance-detail?id=106987&competitionID=CL&seasonID=2021")
  .then((res) => res.json())
  .then((data) => {
      document.getElementById("card-players").src = data.players
      document.getElementById("card-title").textContent = data.title
  });
}

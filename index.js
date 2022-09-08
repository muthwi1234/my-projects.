function TransferNews(){
  fetch ("https://transfermarket.p.rapidapi.com/news/detail?id=372889")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("card-news").src = data.TransferNews
    document.getElementById("card-title").textContent = data.title
});
}


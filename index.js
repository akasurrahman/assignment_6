const loadData1 = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displaySocials(data.data.tools);
};
const displaySocials = socials =>{
    const socialContainer = document.getElementById('social-container');
    socials.forEach(social => {
        const socialDiv = document.createElement('div');
        socialDiv.classList.add('col');
        socialDiv.innerHTML = `
        <div class="card">
        <img class="img-fluid" style="height:300px" src="${social.image}" class="card-img-top" alt="images">
        <div class="card-body shadow-sm p-3 mb-5 bg-body rounded" style="height:150px">
          <h5 class="card-title ps-3">Features</h5>
        <ol>
        <li>Natural language processing</li>
        <li>Contextual understanding</li>
        <li>Text generation</li>
        </ol>
        </div>
        <div class="d-flex">
          <div class="ps-4 pe-5 me-5">
            <ul class="list-inline">
            <li><h5>${social.name}</h5></li>
            <span class="d-flex"><i class="fa-sharp fa-solid fa-calendar-days pt-1"></i><li class="ps-2"><p>${social.published_in}</p></li></span>
            </ul>
            </div>
            <div class="ms-5 ps-5 pt-2"><i class="fa-sharp fa-solid fa-circle-arrow-right fs-2 "></i></div>
        </div>
      </div>
        `;
        socialContainer.appendChild(socialDiv);
    })};
loadData1();

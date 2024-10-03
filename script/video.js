
// shared function
function getTimeString(time) {
  const hour = parseInt(time/3600);
  let remaningSecond = time % 3600;
  const minute = parseInt(remaningSecond / 60);
  remaningSecond = remaningSecond % 60;
  return `${hour} hour ${minute} m ${remaningSecond}sec ago`
}

// 1. fetch show load catgorese on html
// create load catagorese
const loadCatagories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((err) => console.log(err));
};

// loadCategoryVideos
const loadCatagoryVideos = async(id) => {
  // alert(id)
  const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);
  const data =  await res.json();
  displayVideos(data.category)
};

// videos
const loadVideos = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/videos"
  );
  const data = await res.json();
  displayVideos(data.videos);
};

// display videos
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videoContainer.innerHTML = "";
  videos.forEach((video) => {
    // display video
    const card = document.createElement("div");
    card.classList = "card card-compact  ";
    card.innerHTML = `
         <figure class="h-[200px] relative">
            <img class ="h-full w-full object-cover"
            src=${video.thumbnail}
            alt="Shoes" />
            ${
              video.others.posted_date?.length===0 ? "":`<span class="text-xs absolute right-2 bottom-2 bg-black text-white rounded ">${
              getTimeString(video.others.posted_date)
            }</span>`
            }
            
        </figure>
        <div class="px-0 py-2 flex gap-2">
         <div>
          <img class="h-10 w-10 rounded-full object-cover" src=${
            video.authors[0].profile_picture
          } />
         </div>
         <div>
         <h2 class="font-bold">${video.title}</h2>
         <div class="flex items-center gap-1">
          <p>${video.authors[0].profile_name}</p>
          ${
            video.authors[0].verified === true
              ? `<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>`
              : ""
          }
         </div>
         <p></p>
         <p></p>
         </div>
        </div>
        `;
    videoContainer.append(card);
  });
};

// create display catagores
const displayCatagories = (catagories) => {
  catagories.forEach((item) => {
    const categoreContainer = document.getElementById("catagorey-container");
    // create button
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
    <button onclick="loadCatagoryVideos('${item.category_id}')" class="btn">
    ${item.category}
    </button>
    `
    categoreContainer.append(buttonContainer);
  });
};

loadCatagories();
loadVideos();

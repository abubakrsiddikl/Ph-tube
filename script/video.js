// 1. fetch show load catgorese on html
// create load catagorese
const loadCatagories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((err) => console.log(err));
};

const cardDemo = {
  category_id: "1001",
  video_id: "aaaa",
  thumbnail: "https://i.ibb.co/L1b6xSq/shape.jpg",
  title: "Shape of You",
  authors: [
    {
      profile_picture: "https://i.ibb.co/D9wWRM6/olivia.jpg",
      profile_name: "Olivia Mitchell",
      verified: "",
    },
  ],
  others: {
    views: "100K",
    posted_date: "16278",
  },
  description:
    "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey.",
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
  videos.forEach((video) => {
    console.log(video);
    // display video
    const card = document.createElement("div");
    card.classList = "card card-compact  ";
    card.innerHTML = `
         <figure class="h-[200px] relative">
            <img class ="h-full w-full object-cover"
            src=${video.thumbnail}
            alt="Shoes" />
            ${
              video.others.posted_date?.length===0 ? "":`<span class="absolute right-2 bottom-2 bg-black text-white rounded ">${
              video.others.posted_date
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
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    categoreContainer.append(button);
  });
};

loadCatagories();
loadVideos();

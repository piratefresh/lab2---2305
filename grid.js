// The array of albums
const albums = [
  (album1 = {
    src: "cover1.jpg",
    title: "Album 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, explicabo!"
  }),
  (album2 = {
    src: "cover2.jpg",
    title: "Album 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, explicabo!"
  }),
  (album3 = {
    src: "cover3.jpg",
    title: "Album 3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, explicabo!"
  }),
  (album4 = {
    src: "cover4.png",
    title: "Album 4",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, explicabo!"
  }),
  (album5 = {
    src: "cover5.png",
    title: "Album 5",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, explicabo!"
  }),
  (album6 = {
    src: "cover6.jpg",
    title: "Album 6",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, explicabo!"
  }),
  (album7 = {
    src: "cover7.jpg",
    title: "Album 7",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, explicabo!"
  }),
  (album8 = {
    src: "cover8.jpg",
    title: "Album 8",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, explicabo!"
  }),
  (album9 = {
    src: "cover9.jpg",
    title: "Album 9",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, explicabo!"
  }),
  (album10 = {
    src: "cover10.jpg",
    title: "Album 10",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, explicabo!"
  }),
  (album11 = {
    src: "cover11.jpg",
    title: "Album 11",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, explicabo!"
  }),
  (album12 = {
    src: "cover12.jpg",
    title: "Album 12",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, explicabo!"
  })
];

// Getting the album cover image grid container
const imageGrid = document.getElementsByClassName("albumGrid");

function addImages() {
  // Loop through each object inside the array
  albums.map(album => {
    // Create the img element for each object
    let img = document.createElement("img");
    img.src = `images/${album.src}`;
    img.alt = `${album.title}`;
    img.setAttribute("data-desc", `${album.description}`);
    img.setAttribute("onclick", "imgClick(this)");
    // pushes the img to the image grid
    document.querySelector(".albumGrid").appendChild(img);
  });
}

function imgClick(element) {
  // Get the elemtent data
  let url = element.src;
  let albumTitle = element.alt;
  let albumDesc = element.getAttribute("data-desc");
  // Select the media object
  let img = document.querySelector(".mr-3");
  let title = document.querySelector(".mt-0");
  let desc = document.querySelector(".media-desc");
  // Add element data to media object attributes
  img.src = `${url}`;
  title.innerText = albumTitle;
  desc.innerText = albumDesc;
}

window.onload = addImages();

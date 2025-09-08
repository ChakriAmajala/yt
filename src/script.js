// Example video data
const videos = [
  { title: "My First Video", thumbnail: "images/thumb1.jpg" },
  { title: "Second Awesome Video", thumbnail: "images/thumb2.jpg" },
  { title: "Another Cool Video", thumbnail: "images/thumb3.jpg" },
  { title: "Gaming Highlights", thumbnail: "images/thumb4.jpg" },
  { title: "Music Mix", thumbnail: "images/thumb5.jpg" }
];

const videoContainer = document.getElementById("videoContainer");

// Load videos dynamically
function loadVideos(list) {
  videoContainer.innerHTML = "";
  list.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.innerHTML = `
      <img src="${video.thumbnail}" alt="${video.title}">
      <h3>${video.title}</h3>
    `;
    videoContainer.appendChild(card);
  });
}

// Initial load
loadVideos(videos);

// Search functionality
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = videos.filter(v => v.title.toLowerCase().includes(query));
  loadVideos(filtered);
});

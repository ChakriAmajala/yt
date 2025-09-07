const videoData = [
  { title: "Amazing Nature", channel: "John Doe", views: "1.2M views", time: "1 week ago", thumbnail: "https://picsum.photos/300/170?random=1" },
  { title: "Coding Tutorial", channel: "Jane Smith", views: "500K views", time: "3 days ago", thumbnail: "https://picsum.photos/300/170?random=2" },
  { title: "Travel Vlog", channel: "Alex Brown", views: "2M views", time: "2 weeks ago", thumbnail: "https://picsum.photos/300/170?random=3" },
  { title: "Music Video", channel: "DJ Mike", views: "10M views", time: "1 month ago", thumbnail: "https://picsum.photos/300/170?random=4" },
  { title: "Gaming Highlights", channel: "ProGamer", views: "800K views", time: "4 days ago", thumbnail: "https://picsum.photos/300/170?random=5" },
  { title: "Cooking Recipes", channel: "Chef Anna", views: "600K views", time: "5 days ago", thumbnail: "https://picsum.photos/300/170?random=6" },
  { title: "Tech Review", channel: "Tech Guru", views: "1.5M views", time: "2 weeks ago", thumbnail: "https://picsum.photos/300/170?random=7" },
  { title: "Movie Trailer", channel: "Film Studio", views: "5M views", time: "3 days ago", thumbnail: "https://picsum.photos/300/170?random=8" }
];

const container = document.getElementById("videoContainer");

videoData.forEach(video => {
  const card = document.createElement("div");
  card.className = "videoCard";
  card.innerHTML = `
    <img src="${video.thumbnail}" alt="${video.title}">
    <div class="videoInfo">
      <h4>${video.title}</h4>
      <p>${video.channel}</p>
      <p>${video.views} • ${video.time}</p>
    </div>
  `;
  container.appendChild(card);
});


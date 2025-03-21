//toggling the sidebar
document.getElementById('menu').addEventListener('click', () => {
    let sideBar = document.querySelector('.side-bar');
    sideBar.classList.toggle('hide');
    console.log('clicked')
});

//adding the active class to the nav-link
let navLinkElements = document.querySelectorAll('.nav-link');
navLinkElements.forEach((nav) => {
    nav.addEventListener('click', () => {
        navLinkElements.forEach((link) => link.classList.remove('active'));
        nav.classList.add('active');
    })
})

//calling getYoutube function
document.addEventListener('DOMContentLoaded', () => {
    fetchVideos();
});


//fetch home video api
function fetchVideos(videos){
    const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'eea6a34f4dmsh296963a5654d19ep13d93ajsn94fa453c501f',
          'x-rapidapi-host': 'youtube138.p.rapidapi.com'
        }
      };
    const url = "https://youtube138.p.rapidapi.com/v2/trending";

    axios.get(url, options).then(response => renderVideos(response.data.list)).catch(error => console.error('Error fetching videos', error));
}


//defining variables
let videoContainer = document.querySelector('.videos');

//function for rendering videos
function renderVideos(videos){
    videoContainer.innerHTML = '';
    // console.log(videos);
    videos.forEach((video) => {
        const vidItem = document.createElement('div');
        vidItem.classList.add('video');
        vidItem.innerHTML = 
                `
                    <div class="thumbnail">
                    <img src="${video.videoThumbnails[0].url || '' }" alt="">
                    </div>
                    <!-- end of thumbnail -->
                    <div class="details">
                    <div class="author">
                    <img src="${video.authorThumbnails[0].url || '' }" alt="">
                    </div>
                    <!-- end of author -->
                    <div class="title">
                    <h3>${video.title || 'No Title' }</h3>
                    <a href="${video.authorUrl}">${video.author}</a>
                    <span>${video.viewCountText || 'No Views'} • ${video.publishedText || 'Unknown Date'}</span>
                    </div>
                    <!-- end of title -->
                    </div>
                    <!-- end of details -->
          `;
          videoContainer.appendChild(vidItem);
    })
    
}

// Datos de ejemplo
const musicData = {
    albums: [
        {
            id: 1,
            title: "BoyWithUke Music",
            artist: "BoyWithUke",
            img: "img/boywithuke.jpg",
            songs: [
                { id: 1, title: "Ghost", duration: "4:11" },
                { id: 2, title: "Can You Feel It", duration: "3:21" },
                { id: 3, title: "Pitfall", duration: "3:06" },
                { id: 4, title: "Backseat", duration: "2:40" },
                { id: 5, title: "Burn", duration: "2:53" },
                { id: 6, title: "Paper Planes", duration: "3:10" },
                { id: 7, title: "Gaslight", duration: "3:18" },
                { id: 8, title: "Love Lost", duration: "3:36" },
                { id: 9, title: "Easier", duration: "5:46" },
                { id: 10, title: "Stranger", duration: "3:39" },
                { id: 11, title: "Change", duration: "3:19" },
                { id: 12, title: "Petrichor", duration: "2:41" },
                { id: 13, title: "Coffee", duration: "3:41" },
                { id: 14, title: "Corduroy", duration: "3:35" }
            ]
        },
        {
            id: 2,
            title: "NF Music",
            artist: "NF",
            img: "img/nf.jpg",
            songs: [
                { id: 15, title: "Intro", duration: "2:57" },
                { id: 16, title: "Intro 2", duration: "3:16" },
                { id: 17, title: "The Search", duration: "4:51" },
                { id: 18, title: "Leave Me Alone", duration: "5:12" },
                { id: 19, title: "When I Grow Up", duration: "4:00" },
                { id: 20, title: "MOTTO", duration: "3:53" },
                { id: 21, title: "HOPE", duration: "5:03" },
                { id: 22, title: "PANDEMONIUM", duration: "3:17" },
                { id: 23, title: "CLOUDS", duration: "4:13" },
                { id: 24, title: "LOST", duration: "4:03" },
                { id: 25, title: "TRUST", duration: "4:24" },
                { id: 26, title: "THAT'S A JOKE", duration: "3:49" },
                { id: 27, title: "LAYERS", duration: "3:15" },
                { id: 28, title: "WHY", duration: "3:11" },
                { id: 29, title: "Outcast", duration: "5:22" },
                { id: 30, title: "Real", duration: "4:40" }
                
            ]
        },
        {
            id: 3,
            title: "Bohnes Music",
            artist: "Bohnes",
            img: "img/bohne.jpg",
            songs: [
                { id: 31, title: "HOLY SMOKES", duration: "3:18" },
                { id: 32, title: "Take it Out on Me", duration: "3:39" },
                { id: 33, title: "Raging On A Sunday", duration: "3:28" },
                { id: 34, title: "Vicious", duration: "3:27" },
                { id: 35, title: "12 Rounds", duration: "3:45" },
                { id: 36, title: "Zombie Love", duration: "3:44" },
                { id: 37, title: "Psycho", duration: "2:27" },
                { id: 38, title: "Detonate", duration: "3:08" },
                { id: 39, title: "Moshpit", duration: "3:24" },
                { id: 40, title: "Slither", duration: "2:48" }

            ]
        },
        {
            id: 4,
            title: "Cristian Gates Music",
            artist: "Cristian Gates",
            img: "img/cristianGates.jpg",
            songs: [
                { id: 41, title: "GIRLS", duration: "1:48" },
                { id: 42, title: "LIAR LIAR", duration: "1:50" },
                { id: 43, title: "FREAK", duration: "1:58" },
                { id: 44, title: "BABYDOLL", duration: "1:45" },
                { id: 45, title: "FOOD POISONING", duration: "1:56" },
                { id: 46, title: "SECRETS", duration: "2:41" },
                { id: 47, title: "Arson", duration: "2:16" },
                { id: 48, title: "Dangerous State of Mind", duration: "2:07" },
                { id: 49, title: "Traumatized", duration: "2:35" },
                { id: 50, title: "SAYING GOODBYE", duration: "2:12" },
                { id: 51, title: "NUMB", duration: "2:08" },
                { id: 52, title: "Stayin' Up", duration: "3:01" },
                { id: 53, title: "FVCK NIGHT", duration: "3:15" },
                { id: 54, title: "SHREDS", duration: "2:48" },
                { id: 55, title: "Breakup Sex", duration: "2:04" },
                { id: 56, title: "Star", duration: "2:42" },
                { id: 57, title: "After Hours", duration: "2:49" },
                { id: 58, title: "Skitzo", duration: "1:05" },
                { id: 59, title: "Lost_CG", duration: "2:59" },
                { id: 60, title: "KILL_MY_X", duration: "2:31" },
                { id: 61, title: "999", duration: "3:31" },
                { id: 62, title: "ALL_IN", duration: "2:11" }
            ]
        },
        {
            id: 5,
            title: "Proximamente",
            artist: "Proximamente",
            img: "img/logo.jpg",
            songs: [
                
            ]
        },
        {
            id: 6,
            title: "Proximamente",
            artist: "Proximamente",
            img: "img/logo.jpg",
            songs: [
                
            ]
        }
        
    ]
};

// Variables globales
let allSongs = [];
let currentSongIndex = 0;
let isPlaying = false;
let audioPlayer = document.getElementById('audioPlayer');

// Inicializar la aplicación
function init() {
    // Combinar todas las canciones
    musicData.albums.forEach(album => {
        album.songs.forEach(song => {
            allSongs.push({
                ...song,
                artist: album.artist,
                albumTitle: album.title,
                img: album.img
            });
        });
    });

    renderAlbums();
    renderSongs(allSongs);
    setupEventListeners();
}

// Renderizar álbumes
function renderAlbums(albums = musicData.albums) {
    const albumsGrid = document.getElementById('albumsGrid');
    albumsGrid.innerHTML = albums.map(album => `
        <div class="album-card" onclick="filterByAlbum(${album.id})">
            <img class="album-cover" src="${album.img}" alt="${album.artist}">
            <div class="album-info">
                <div class="album-title">${album.title}</div>
                <div class="album-artist">${album.artist}</div>
            </div>
        </div>
    `).join('');
}


// Renderizar canciones
function renderSongs(songs) {
    visibleSongs = songs; // actualizar canciones visibles
    const songList = document.getElementById('songList');
    songList.innerHTML = songs.map((song, index) => `
        <div class="song-item" onclick="playSongFromVisible(${index})">
            <div class="song-number">${index + 1}</div>
            <div class="song-info">
                <div class="song-title">${song.title}</div>
                <div class="song-artist">${song.artist}</div>
            </div>
            <div class="song-duration">${song.duration}</div>
        </div>
    `).join('');
}

function playSongFromVisible(index) {
    const song = visibleSongs[index];
    const realIndex = allSongs.findIndex(s => s.id === song.id && s.artist === song.artist);
    if (realIndex !== -1) {
        playSong(realIndex);
    }
}


// Configurar event listeners
function setupEventListeners() {
    // Búsqueda
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        if (!query) {
            // Si la búsqueda está vacía, mostrar todo
            renderAlbums();
            currentPage = 1;
            renderSongs(allSongs);
            renderPagination(allSongs);
            return;
        }

        const filteredSongs = allSongs.filter(song =>
            song.title.toLowerCase().includes(query) ||
            song.artist.toLowerCase().includes(query) ||
            song.albumTitle.toLowerCase().includes(query)
        );

        // Filtrar álbumes únicos que tienen alguna de esas canciones
        const filteredAlbumIds = new Set(filteredSongs.map(song => song.albumTitle));
        const filteredAlbums = musicData.albums.filter(album =>
            filteredAlbumIds.has(album.title)
        );

        // Renderizar álbumes filtrados
        renderAlbums(filteredAlbums);

        // Reiniciar a página 1 y renderizar canciones
        currentPage = 1;
        renderSongs(filteredSongs);
        renderPagination(filteredSongs);
    });

    // Controles del reproductor
    document.getElementById('playBtn').addEventListener('click', togglePlay);
    document.getElementById('prevBtn').addEventListener('click', playPrevious);
    document.getElementById('nextBtn').addEventListener('click', playNext);

    // Barra de progreso
    document.getElementById('progressBar').addEventListener('click', (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audioPlayer.currentTime = percent * audioPlayer.duration;
    });

    // Actualizar progreso
    audioPlayer.addEventListener('timeupdate', updateProgress);
    
    // Reproducción automática de la siguiente canción
    audioPlayer.addEventListener('ended', () => {
        playNext();
    });
}

// Reproducir canción
function playSong(index) {
    currentSongIndex = index;
    const song = allSongs[index];
    
    // Actualizar UI
    document.getElementById('currentTitle').textContent = song.title;
    document.getElementById('currentArtist').textContent = song.artist;
    document.getElementById('miniCover').src = song.img;
    
    // Actualizar canción activa
    document.querySelectorAll('.song-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
    
    // Simular carga de archivo de audio
    // En una aplicación real, aquí cargarías el archivo de audio real
    audioPlayer.src = `music/${song.title.replace(/\s+/g, "_")}.mp3`;
 // Simulación
    
    // Para esta demo, simularemos la duración
    audioPlayer.duration = parseDuration(song.duration);
    document.getElementById('totalTime').textContent = song.duration;
    
    play();
}

// Reproducir/Pausar
function togglePlay() {
    if (isPlaying) {
        pause();
    } else {
        play();
    }
}

function play() {
    // En una aplicación real, aquí reproducirías el audio
    audioPlayer.play();
    isPlaying = true;
    document.getElementById('playBtn').textContent = '⏸';
    

}

function pause() {
    audioPlayer.pause();
    isPlaying = false;
    document.getElementById('playBtn').textContent = '▶';
}

// Canción anterior
function playPrevious() {
    currentSongIndex = (currentSongIndex - 1 + allSongs.length) % allSongs.length;
    playSong(currentSongIndex);
}

// Siguiente canción
function playNext() {
    currentSongIndex = (currentSongIndex + 1) % allSongs.length;
    playSong(currentSongIndex);
}

// Actualizar progreso
function updateProgress() {
    if (audioPlayer.duration) {
        const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        document.getElementById('progress').style.width = percent + '%';
        document.getElementById('currentTime').textContent = formatTime(audioPlayer.currentTime);
    }
}

// Filtrar por álbum
function filterByAlbum(albumId) {
    const album = musicData.albums.find(a => a.id === albumId);
    if (album) {
        const albumSongs = allSongs.filter(song => song.albumTitle === album.title);
        renderSongs(albumSongs);
        
        // Desplazar a la sección de canciones
        document.querySelector('.songs-section').scrollIntoView({ behavior: 'smooth' });
    }
}

// Utilidades
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function parseDuration(duration) {
    const [mins, secs] = duration.split(':').map(Number);
    return mins * 60 + secs;
}

// Simulación de reproducción (para demo)
let simulationInterval;
function simulatePlayback() {
    clearInterval(simulationInterval);
    audioPlayer.currentTime = 0;
    
    simulationInterval = setInterval(() => {
        if (isPlaying && audioPlayer.currentTime < audioPlayer.duration) {
            audioPlayer.currentTime += 0.1;
            updateProgress();
            
            // Simular fin de canción
            if (audioPlayer.currentTime >= audioPlayer.duration) {
                audioPlayer.dispatchEvent(new Event('ended'));
            }
        }
    }, 100);
}

// Inicializar la aplicación
init();
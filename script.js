// Datos de los artistas directamente en el código
const artistsData = [
    {
        id: 1,
        albumTitle: "BoyWithUke Music",
        artist: "BoyWithUke",
        img: "img/boywithuke.jpg",
        songs: [
            { id: 1, title: "Ghost", duration: "4:11", file: "Ghost.mp3" },
            { id: 2, title: "Can You Feel It", duration: "3:21", file: "Can_You_Feel_It.mp3" },
            { id: 3, title: "Pitfall", duration: "3:06", file: "Pitfall.mp3" },
            { id: 4, title: "Backseat", duration: "2:40", file: "Backseat.mp3" },
            { id: 5, title: "Burn", duration: "2:53", file: "Burn.mp3" },
            { id: 6, title: "Paper Planes", duration: "3:10", file: "Paper_Planes.mp3" },
            { id: 7, title: "Gaslight", duration: "3:18", file: "Gaslight.mp3" },
            { id: 8, title: "Love Lost", duration: "3:36", file: "Love_Lost.mp3" },
            { id: 9, title: "Easier", duration: "5:46", file: "Easier.mp3" },
            { id: 10, title: "Stranger", duration: "3:39", file: "Stranger.mp3" },
            { id: 11, title: "Change", duration: "3:19", file: "Change.mp3" },
            { id: 12, title: "Petrichor", duration: "2:41", file: "Petrichor.mp3" },
            { id: 13, title: "Coffee", duration: "3:41", file: "Coffee.mp3" },
            { id: 14, title: "Corduroy", duration: "3:35", file: "Corduroy.mp3" }
        ]
    },
    {
        id: 2,
        albumTitle: "NF Music",
        artist: "NF",
        img: "img/nf.jpg",
        songs: [
            { id: 15, title: "Intro", duration: "2:57", file: "Intro.mp3" },
            { id: 16, title: "Intro 2", duration: "3:16", file: "Intro_2.mp3" },
            { id: 17, title: "The Search", duration: "4:51", file: "The_Search.mp3" },
            { id: 18, title: "Leave Me Alone", duration: "5:12", file: "Leave_Me_Alone.mp3" },
            { id: 19, title: "When I Grow Up", duration: "4:00", file: "When_I_Grow_Up.mp3" },
            { id: 20, title: "MOTTO", duration: "3:53", file: "MOTTO.mp3" },
            { id: 21, title: "HOPE", duration: "5:03", file: "HOPE.mp3" },
            { id: 22, title: "PANDEMONIUM", duration: "3:17", file: "PANDEMONIUM.mp3" },
            { id: 23, title: "CLOUDS", duration: "4:13", file: "CLOUDS.mp3" },
            { id: 24, title: "LOST", duration: "4:03", file: "LOST.mp3" },
            { id: 25, title: "TRUST", duration: "4:24", file: "TRUST.mp3" },
            { id: 26, title: "THAT'S A JOKE", duration: "3:49", file: "THAT'S_A_JOKE.mp3" },
            { id: 27, title: "LAYERS", duration: "3:15", file: "LAYERS.mp3" },
            { id: 28, title: "WHY", duration: "3:11", file: "WHY.mp3" },
            { id: 29, title: "Outcast", duration: "5:22", file: "Outcast.mp3" },
            { id: 30, title: "Real", duration: "4:40", file: "Real.mp3" }
        ]
    },
    {
        id: 3,
        albumTitle: "Bohnes Music",
        artist: "Bohnes",
        img: "img/bohne.jpg",
        songs: [
            { id: 31, title: "HOLY SMOKES", duration: "3:18", file: "HOLY_SMOKES.mp3" },
            { id: 32, title: "Take it Out on Me", duration: "3:39", file: "Take_it_Out_on_Me.mp3" },
            { id: 33, title: "Raging On A Sunday", duration: "3:28", file: "Raging_On_A_Sunday.mp3" },
            { id: 34, title: "Vicious", duration: "3:27", file: "Vicious.mp3" },
            { id: 35, title: "12 Rounds", duration: "3:45", file: "12_Rounds.mp3" },
            { id: 36, title: "Zombie Love", duration: "3:44", file: "Zombie_Love.mp3" },
            { id: 37, title: "Psycho", duration: "2:27", file: "Psycho.mp3" },
            { id: 38, title: "Detonate", duration: "3:08", file: "Detonate.mp3" },
            { id: 39, title: "Moshpit", duration: "3:24", file: "Moshpit.mp3" },
            { id: 40, title: "Slither", duration: "2:48", file: "Slither.mp3" }
        ]
    },
    {
        id: 4,
        albumTitle: "Cristian Gates Music",
        artist: "Cristian Gates",
        img: "img/cristianGates.jpg",
        songs: [
            { id: 41, title: "GIRLS", duration: "1:48", file: "GIRLS.mp3" },
            { id: 42, title: "LIAR LIAR", duration: "1:50", file: "LIAR_LIAR.mp3" },
            { id: 43, title: "FREAK", duration: "1:58", file: "FREAK.mp3" },
            { id: 44, title: "BABYDOLL", duration: "1:45", file: "BABYDOLL.mp3" },
            { id: 45, title: "FOOD POISONING", duration: "1:56", file: "FOOD_POISONING.mp3" },
            { id: 46, title: "SECRETS", duration: "2:41", file: "SECRETS.mp3" },
            { id: 47, title: "Arson", duration: "2:16", file: "Arson.mp3" },
            { id: 48, title: "Dangerous State of Mind", duration: "2:07", file: "Dangerous_State_of_Mind.mp3" },
            { id: 49, title: "Traumatized", duration: "2:35", file: "Traumatized.mp3" },
            { id: 50, title: "SAYING GOODBYE", duration: "2:12", file: "SAYING_GOODBYE.mp3" },
            { id: 51, title: "NUMB", duration: "2:08", file: "NUMB.mp3" },
            { id: 52, title: "Stayin' Up", duration: "3:01", file: "Stayin'_Up.mp3" },
            { id: 53, title: "FVCK NIGHT", duration: "3:15", file: "FVCK_NIGHT.mp3" },
            { id: 54, title: "SHREDS", duration: "2:48", file: "SHREDS.mp3" },
            { id: 55, title: "Breakup Sex", duration: "2:04", file: "Breakup_Sex.mp3" },
            { id: 56, title: "Star", duration: "2:42", file: "Star.mp3" },
            { id: 57, title: "After Hours", duration: "2:49", file: "After_Hours.mp3" },
            { id: 58, title: "Skitzo", duration: "1:05", file: "Skitzo.mp3" },
            { id: 59, title: "Lost", duration: "2:59", file: "Lost.mp3" },
            { id: 60, title: "KILL_MY_X", duration: "2:31", file: "KILL_MY_X.mp3" },
            { id: 61, title: "999", duration: "3:31", file: "999.mp3" },
            { id: 62, title: "ALL_IN", duration: "2:11", file: "ALL_IN.mp3" }
        ]
    },
    {
        id: 5,
        albumTitle: "Próximamente",
        artist: "Próximamente",
        img: "img/logo.jpg",
        songs: []
    },
    {
        id: 6,
        albumTitle: "Próximamente",
        artist: "Próximamente",
        img: "img/logo.jpg",
        songs: []
    }
];

// Variables globales
let allSongs = [];
let currentSongIndex = 0;
let isPlaying = false;
let audioPlayer = document.getElementById('audioPlayer');
let visibleSongs = [];
let favorites = [];

// Cargar favoritos del localStorage
function loadFavorites() {
    try {
        const saved = localStorage.getItem('astramusic_favorites');
        if (saved) {
            favorites = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error cargando favoritos:', error);
        favorites = [];
    }
}

// Inicializar la aplicación
function init() {
    loadFavorites();
    loadAllSongs();
    renderAlbums();
    renderSongs(allSongs);
    setupEventListeners();
    updateFavoritesSection();
}

// Cargar todas las canciones
function loadAllSongs() {
    allSongs = [];
    
    artistsData.forEach(artist => {
        artist.songs.forEach(song => {
            allSongs.push({
                ...song,
                artist: artist.artist,
                albumTitle: artist.albumTitle,
                img: artist.img,
                // Ruta del archivo de audio
                audioPath: `music/artists/${artist.artist}/${song.file}`
            });
        });
    });
}

// Renderizar álbumes
function renderAlbums(albums = artistsData) {
    const albumsGrid = document.getElementById('albumsGrid');
    albumsGrid.innerHTML = albums.map(album => `
        <div class="album-card" onclick="filterByAlbum('${album.artist}')">
            <img class="album-cover" src="${album.img}" alt="${album.artist}">
            <div class="album-info">
                <div class="album-title">${album.albumTitle}</div>
                <div class="album-artist">${album.artist}</div>
            </div>
        </div>
    `).join('');
}

// Renderizar canciones
function renderSongs(songs) {
    visibleSongs = songs;
    const songList = document.getElementById('songList');
    
    if (songs.length === 0) {
        songList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🎵</div>
                <div class="empty-state-text">No se encontraron canciones</div>
            </div>
        `;
        return;
    }
    
    songList.innerHTML = songs.map((song, index) => {
        const isLiked = favorites.some(fav => fav.id === song.id && fav.artist === song.artist);
        return `
            <div class="song-item" onclick="playSongFromVisible(${index})">
                <div class="song-number">${index + 1}</div>
                <div class="song-info">
                    <div class="song-title">${song.title}</div>
                    <div class="song-artist">${song.artist}</div>
                </div>
                <div class="song-duration">${song.duration}</div>
                <button class="like-btn ${isLiked ? 'liked' : ''}" 
                        onclick="toggleLike(event, ${song.id}, '${song.artist}')">
                    ${isLiked ? '❤️' : '🤍'}
                </button>
            </div>
        `;
    }).join('');
}

// Toggle like
function toggleLike(event, songId, artist) {
    event.stopPropagation();
    
    const song = allSongs.find(s => s.id === songId && s.artist === artist);
    if (!song) return;
    
    const index = favorites.findIndex(fav => fav.id === songId && fav.artist === artist);
    
    if (index === -1) {
        // Agregar a favoritos
        favorites.push(song);
    } else {
        // Quitar de favoritos
        favorites.splice(index, 1);
    }
    
    // Guardar en localStorage
    try {
        localStorage.setItem('astramusic_favorites', JSON.stringify(favorites));
    } catch (error) {
        console.error('Error guardando favoritos:', error);
    }
    
    // Actualizar UI
    updateLikeButton(songId, artist, index === -1);
    updateFavoritesSection();
    
    // Si estamos en la vista de favoritos, volver a renderizar
    if (document.getElementById('favoritesSection').style.display !== 'none') {
        renderFavorites();
    }
}

// Actualizar botón de like
function updateLikeButton(songId, artist, isLiked) {
    const buttons = document.querySelectorAll('.like-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('onclick').includes(`${songId}, '${artist}'`)) {
            btn.classList.toggle('liked', isLiked);
            btn.textContent = isLiked ? '❤️' : '🤍';
        }
    });
}

// Mostrar favoritos
function showFavorites() {
    document.getElementById('allSongsSection').style.display = 'none';
    document.getElementById('favoritesSection').style.display = 'block';
    renderFavorites();
}

// Mostrar todas las canciones
function showAllSongs() {
    document.getElementById('favoritesSection').style.display = 'none';
    document.getElementById('allSongsSection').style.display = 'block';
    renderSongs(allSongs);
}

// Renderizar favoritos
function renderFavorites() {
    const favoritesList = document.getElementById('favoritesList');
    
    if (favorites.length === 0) {
        favoritesList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">💔</div>
                <div class="empty-state-text">No tienes canciones favoritas aún</div>
            </div>
        `;
        return;
    }
    
    favoritesList.innerHTML = favorites.map((song, index) => `
        <div class="song-item" onclick="playSongFromFavorites(${index})">
            <div class="song-number">${index + 1}</div>
            <div class="song-info">
                <div class="song-title">${song.title}</div>
                <div class="song-artist">${song.artist}</div>
            </div>
            <div class="song-duration">${song.duration}</div>
            <button class="like-btn liked" 
                    onclick="toggleLike(event, ${song.id}, '${song.artist}')">
                ❤️
            </button>
        </div>
    `).join('');
}

// Actualizar sección de favoritos
function updateFavoritesSection() {
    const showFavBtn = document.querySelector('.show-favorites-btn');
    if (showFavBtn) {
        if (favorites.length > 0) {
            showFavBtn.style.display = 'block';
        } else {
            showFavBtn.style.display = 'none';
            // Si estamos en la vista de favoritos y no hay favoritos, volver a todas las canciones
            if (document.getElementById('favoritesSection').style.display !== 'none') {
                showAllSongs();
            }
        }
    }
}

// Reproducir desde favoritos
function playSongFromFavorites(index) {
    const song = favorites[index];
    const realIndex = allSongs.findIndex(s => s.id === song.id && s.artist === song.artist);
    if (realIndex !== -1) {
        playSong(realIndex);
    }
}

// Reproducir desde canciones visibles
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
            renderAlbums();
            renderSongs(allSongs);
            return;
        }

        const filteredSongs = allSongs.filter(song =>
            song.title.toLowerCase().includes(query) ||
            song.artist.toLowerCase().includes(query) ||
            song.albumTitle.toLowerCase().includes(query)
        );

        const filteredAlbumArtists = new Set(filteredSongs.map(song => song.artist));
        const filteredAlbums = artistsData.filter(album =>
            filteredAlbumArtists.has(album.artist)
        );

        renderAlbums(filteredAlbums);
        renderSongs(filteredSongs);
    });

    // Controles del reproductor
    document.getElementById('playBtn').addEventListener('click', togglePlay);
    document.getElementById('prevBtn').addEventListener('click', playPrevious);
    document.getElementById('nextBtn').addEventListener('click', playNext);

    // Barra de progreso
    document.getElementById('progressBar').addEventListener('click', (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        if (audioPlayer.duration) {
            audioPlayer.currentTime = percent * audioPlayer.duration;
        }
    });

    // Actualizar progreso
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('loadedmetadata', () => {
        document.getElementById('totalTime').textContent = formatTime(audioPlayer.duration);
    });
    
    // Reproducción automática de la siguiente canción
    audioPlayer.addEventListener('ended', () => {
        playNext();
    });

    // Error al cargar audio
    audioPlayer.addEventListener('error', (e) => {
        console.error('Error cargando audio:', e);
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
        const isActive = (document.getElementById('favoritesSection').style.display === 'none' 
            ? visibleSongs[i]?.id === song.id && visibleSongs[i]?.artist === song.artist
            : favorites[i]?.id === song.id && favorites[i]?.artist === song.artist);
        item.classList.toggle('active', isActive);
    });
    
    // Cargar archivo de audio
    audioPlayer.src = song.audioPath;
    audioPlayer.load();
    
    play();
}

// Reproducir/Pausar
function togglePlay() {
    if (isPlaying) {
        pause();
    } else {
        if (audioPlayer.src) {
            play();
        } else if (allSongs.length > 0) {
            playSong(0);
        }
    }
}

function play() {
    audioPlayer.play().catch(e => {
        console.error('Error al reproducir:', e);
    });
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
function filterByAlbum(artistName) {
    const artist = artistsData.find(a => a.artist === artistName);
    if (artist && artist.songs.length > 0) {
        const albumSongs = allSongs.filter(song => song.artist === artistName);
        renderSongs(albumSongs);
        
        // Desplazar a la sección de canciones
        document.querySelector('.songs-section').scrollIntoView({ behavior: 'smooth' });
    }
}

// Utilidades
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
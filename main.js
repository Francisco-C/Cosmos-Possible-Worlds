var chapters = document.getElementById("chaptersBtn");
var words = document.getElementById("wordBtn");
var info = document.getElementById("infoBtn");
var book = document.getElementById("bookBtn");
var init = document.getElementById("init");
var back_up = document.getElementById("btnUp");
var back_down = document.getElementById("btnDown");
var close = document.getElementById("closeTrailer");
var trailer = document.getElementById("vidTrailer");
var defaultDisplay = document.getElementById("default_display");
var allDisplay = document.getElementById("all_display")
var whichButton = 0;

var chaptersDiv = document.getElementById("Capitulos");
var wordsDiv = document.getElementById("Palavras");
var infoDiv = document.getElementById("Informacoes");
var bookDiv = document.getElementById("Texto");

var settings = document.getElementById("Settings");
var settingsBtn = document.getElementById("settingsBtn");
var main = document.getElementById("main");

function fun(number){
    whichButton = number; 
}

main.style.scrollBehavior = "auto";
window.scrollTo(0, settings.offsetHeight);
main.style.scrollBehavior = "smooth";

settingsBtn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

close.addEventListener("click", function() {
    trailer.pause();
    trailer.currentTime = 0;
    toggle();
});

init.addEventListener("click", function() {
    fun(1);
    document.getElementById('vid').scrollIntoView();
    chaptersDiv.style.display = "block";
    jQuery(chapters).toggleClass('active1');
    allDisplay.style.display = "none";
    defaultDisplay.style.display = "block";
});

chapters.addEventListener("click", function() {
    if(whichButton == 2){
        jQuery(words).toggleClass('active2');
        jQuery(chapters).toggleClass('active1');
        wordsDiv.style.display = "none";
        chaptersDiv.style.display = "block";
        fun(1);
    }
    else if(whichButton == 3){
        jQuery(info).toggleClass('active3');
        jQuery(chapters).toggleClass('active1');
        infoDiv.style.display = "none";
        chaptersDiv.style.display = "block";
        fun(1);
    }
    else if(whichButton == 4){
        jQuery(book).toggleClass('active4');
        jQuery(chapters).toggleClass('active1');
        bookDiv.style.display = "none";
        chaptersDiv.style.display = "block";
        fun(1);
    } 
});
words.addEventListener("click", function() {
    if(whichButton == 1){
        jQuery(chapters).toggleClass('active1');
        jQuery(words).toggleClass('active2');
        chaptersDiv.style.display = "none";
        wordsDiv.style.display = "block";
        fun(2);
    }
    else if(whichButton == 3){
        jQuery(info).toggleClass('active3');
        jQuery(words).toggleClass('active2');
        infoDiv.style.display = "none";
        wordsDiv.style.display = "block";
        fun(2);
    }
    else if(whichButton == 4){
        jQuery(book).toggleClass('active4');
        jQuery(words).toggleClass('active2');
        bookDiv.style.display = "none";
        wordsDiv.style.display = "block";
        fun(2);
    }
});
info.addEventListener("click", function() {
    if(whichButton == 1){
        jQuery(chapters).toggleClass('active1');
        jQuery(info).toggleClass('active3');
        chaptersDiv.style.display = "none";
        infoDiv.style.display = "block";
        fun(3);
    }
    else if(whichButton == 2){
        jQuery(words).toggleClass('active2');
        jQuery(info).toggleClass('active3');
        wordsDiv.style.display = "none";
        infoDiv.style.display = "block";
        fun(3);
    }
    else if(whichButton == 4){
        jQuery(book).toggleClass('active4');
        jQuery(info).toggleClass('active3');
        bookDiv.style.display = "none";
        infoDiv.style.display = "block";
        fun(3);
    }
});
book.addEventListener("click", function() {
    if(whichButton == 1){
        jQuery(chapters).toggleClass('active1');
        jQuery(book).toggleClass('active4');
        chaptersDiv.style.display = "none";
        bookDiv.style.display = "block";
        fun(4);
    }
    else if(whichButton == 2){
        jQuery(words).toggleClass('active2');
        jQuery(book).toggleClass('active4');
        wordsDiv.style.display = "none";
        bookDiv.style.display = "block";
        fun(4);
    }
    else if(whichButton == 3){
        jQuery(info).toggleClass('active3');
        jQuery(book).toggleClass('active4');
        infoDiv.style.display = "none";
        bookDiv.style.display = "block";
        fun(4);
    }
});
back_up.addEventListener("click", function() {
    chaptersDiv.style.display = "none";
    wordsDiv.style.display = "none";
    infoDiv.style.display = "none";
    bookDiv.style.display = "none";

    if(whichButton == 1){
        jQuery(chapters).toggleClass('active1');
    }
    else if(whichButton == 2){
        jQuery(words).toggleClass('active2');
    }
    else if(whichButton == 3){
        jQuery(info).toggleClass('active3');
    }
    else if(whichButton == 4){
        jQuery(book).toggleClass('active4');
    }

    window.scrollTo(0, settings.offsetHeight);
});
back_down.addEventListener("click", function() {
    window.scrollTo(0, settings.offsetHeight);
});

var key1Btn = document.getElementById("key1Btn");
var key2Btn = document.getElementById("key2Btn");
var key3Btn = document.getElementById("key3Btn");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var subprev = document.getElementById("subprev");
var subnext = document.getElementById("subnext");
var video = document.getElementById("vid");

var chapter1 = 0;
var chapter2 = 212;
var chapter3 = 587;
var chapter4 = 1423;
var chapter5 = 1893;
var chapter6 = 2069;
var chapter7 = 2240;
var chapter3_1 = 611;
var chapter3_2 = 686;
var chapter3_3 = 743;
var chapter3_4 = 1005;
var chapter3_5 = 1045;
var chapter3_6 = 1162;
var chapter4_1 = 1477;

prev.addEventListener("click", function() {
    var time = video.currentTime;
    if(time >= chapter1 && time < chapter2){
        vid.currentTime = chapter1;
    }
    else if(time >= chapter2 && time < chapter3){
        vid.currentTime = chapter1;
    }
    else if(time >= chapter3 && time < chapter4){
        vid.currentTime = chapter2;
    }
    else if(time >= chapter4 && time < chapter5){
        vid.currentTime = chapter3;
    }
    else if(time >= chapter5 && time < chapter6){
        vid.currentTime = chapter4;
    }
    else if(time >= chapter6 && time < chapter7){
        vid.currentTime = chapter5;
    }
    else if(time >= chapter7){
        vid.currentTime = chapter6;
    }
});

subprev.addEventListener("click", function() {
    var time = video.currentTime;
    if(time >= chapter1 && time < 2){
        vid.currentTime = chapter1;
    }
    else if(time >= chapter2 && time < chapter3){
        vid.currentTime = chapter1;
    }
    else if(time >= chapter3 && time < chapter3_1){
        vid.currentTime = chapter2;
    }
    else if(time >= chapter3_1 && time < chapter3_2){
        vid.currentTime = chapter3;
    }
    else if(time >= chapter3_2 && time < chapter3_3){
        vid.currentTime = chapter3_1;
    }
    else if(time >= chapter3_3 && time < chapter3_4){
        vid.currentTime = chapter3_2;
    }
    else if(time >= chapter3_4 && time < chapter3_5){
        vid.currentTime = chapter3_3;
    }
    else if(time >= chapter3_5 && time < chapter3_6){
        vid.currentTime = chapter3_4;
    }
    else if(time >= chapter3_6 && time < chapter4){
        vid.currentTime = chapter3_5;
    }
    else if(time >= chapter4 && time < chapter4_1){
        vid.currentTime = chapter3_6;
    }
    else if(time >= chapter4_1 && time < chapter5){
        vid.currentTime = chapter4;
    }
    else if(time >= chapter5 && time < chapter6){
        vid.currentTime = chapter4_1;
    }
    else if(time >= chapter6 && time < chapter7){
        vid.currentTime = chapter5;
    }
    else if(time >= chapter7){
        vid.currentTime = chapter6;
    }
});

next.addEventListener("click", function() {
    var time = video.currentTime;
    if(time >= chapter1 && time < chapter2){
        vid.currentTime = chapter2;
    }
    else if(time >= chapter2 && time < chapter3){
        vid.currentTime = chapter3;
    }
    else if(time >= chapter3 && time < chapter4){
        vid.currentTime = chapter4;
    }
    else if(time >= chapter4 && time < chapter5){
        vid.currentTime = chapter5;
    }
    else if(time >= chapter5 && time < chapter6){
        vid.currentTime = chapter6;
    }
    else if(time >= chapter6 && time < chapter7){
        vid.currentTime = chapter7;
    }
    else if(time >= chapter7){
        vid.currentTime = 3000;
    }
});

subnext.addEventListener("click", function() {
    var time = video.currentTime;
    if(time >= chapter1 && time < 2){
        vid.currentTime = chapter2;
    }
    else if(time >= chapter2 && time < chapter3){
        vid.currentTime = chapter3;
    }
    else if(time >= chapter3 && time < chapter3_1){
        vid.currentTime = chapter3_1;
    }
    else if(time >= chapter3_1 && time < chapter3_2){
        vid.currentTime = chapter3_2;
    }
    else if(time >= chapter3_2 && time < chapter3_3){
        vid.currentTime = chapter3_3;
    }
    else if(time >= chapter3_3 && time < chapter3_4){
        vid.currentTime = chapter3_4;
    }
    else if(time >= chapter3_4 && time < chapter3_5){
        vid.currentTime = chapter3_5;
    }
    else if(time >= chapter3_5 && time < chapter3_6){
        vid.currentTime = chapter3_6;
    }
    else if(time >= chapter3_6 && time < chapter4){
        vid.currentTime = chapter4;
    }
    else if(time >= chapter4 && time < chapter4_1){
        vid.currentTime = chapter4_1;
    }
    else if(time >= chapter4_1 && time < chapter5){
        vid.currentTime = chapter5;
    }
    else if(time >= chapter5 && time < chapter6){
        vid.currentTime = chapter6;
    }
    else if(time >= chapter6 && time < chapter7){
        vid.currentTime = chapter7;
    }
    else if(time >= chapter7){
        vid.currentTime = 3000;
    }
});

var voyager = 284;
var blackHole = 348;
var einstein = 431;
var gWaves = 444;
var eSpectrum = 453;
var dna = 636;
var bigBang = 651;
var naturalSelection = 664;
var neoCortex = 703;
var triassic = 707;
var homoSapiens = 847;
var blombos = 1017;
var catalhoyuk = 1191;
var protoCity = 1208;
var ocher = 1357;
var giordano = 1473;
var christian = 1545;
var textile = 1537;
var antony = 1549;
var baruch = 1615;
var einstein2 = 1796;
var bio = 2033;
var endagered = 2045;
var anthropocene = 2140;
var starshot = 2252;
var voyager2 = 2414;

function update(){

	var fileName = location.href.split("/").slice(-1)
	console.log(fileName);
	if(fileName == "index.html"){
		var time = video.currentTime;

	    if(key1Btn.textContent != ""){
	        key1Btn.style.display = "inline";
	    }
	    if(key2Btn.textContent != ""){
	        key2Btn.style.display = "inline";
	    }
	    if(key3Btn.textContent != ""){
	        key3Btn.style.display = "inline";
	    }
	    if(time >= voyager && time < blackHole){
	        key1Btn.textContent = "Voyager I";
	    }
	    else if(time >= blackHole && time < einstein){
	        key2Btn.textContent = "Black Hole";
	    }
	    else if(time >= einstein && time < gWaves){
	        key3Btn.textContent = "Albert Einstein";
	    }
	    else if(time >= gWaves && time < eSpectrum){
	        key1Btn.textContent = "Gravitational Waves";
	    }
	    else if(time >= eSpectrum && time < dna){
	        key2Btn.textContent = "Electromagnetic Spectrum";
	    }
	    else if(time >= dna && time < bigBang){
	        key3Btn.textContent = "DNA";
	    }
	    else if(time >= bigBang && time < naturalSelection){
	        key1Btn.textContent = "Big Bang";
	    }
	    else if(time >= naturalSelection && time < neoCortex){
	        key2Btn.textContent = "Natural Selection";
	    }
	    else if(time >= neoCortex && time < triassic){
	        key3Btn.textContent = "NeoCortex";
	    }
	    else if(time >= triassic && time < homoSapiens){
	        key1Btn.textContent = "Triassic";
	    }
	    else if(time >= homoSapiens && time < blombos){
	        key2Btn.textContent = "Homo Sapiens";
	    }
	    else if(time >= blombos && time < catalhoyuk){
	        key3Btn.textContent = "Blombos Cave";
	    }
	    else if(time >= catalhoyuk && time < protoCity){
	        key1Btn.textContent = "Çatalhöyük";
	    }
	    else if(time >= protoCity && time < ocher){
	        key2Btn.textContent = "Proto-city";
	    }
	    else if(time >= ocher && time < giordano){
	        key3Btn.textContent = "Ocher";
	    }
	    else if(time >= giordano && time < textile){
	        key1Btn.textContent = "Giordano Bruno";
	    }
	    else if(time >= textile && time < christian){
	        key2Btn.textContent = "Textile Merchant Lens";
	    }
	    else if(time >= christian && time < antony){
	        key3Btn.textContent = "Christiaan Huygens";
	    }
	    else if(time >= antony && time < baruch){
	        key1Btn.textContent = "Antony van Leeuwenhoek";
	    }
	    else if(time >= baruch && time < einstein2){
	        key2Btn.textContent = "Baruch Spinoza";
	    }
	    else if(time >= einstein2 && time < bio){
	        key3Btn.textContent = "Albert Einstein";
	    }
	    else if(time >= bio && time < endagered){
	        key1Btn.textContent = "Biodiversity";
	    }
	    else if(time >= endagered && time < anthropocene){
	        key2Btn.textContent = "Endangered Species";
	    }
	    else if(time >= anthropocene && time < starshot){
	        key3Btn.textContent = "Anthropocene";
	    }
	    else if(time >= starshot && time < voyager2){
	        key1Btn.textContent = "Project Breakthrough Starshot";
	    }
	    else if(time >= voyager2){
	        key2Btn.textContent = "Voyager I";
	    }
	}
	else{
		var time = video.currentTime;
	    if(key1Btn.textContent != ""){
	        key1Btn.style.display = "inline";
	    }
	    if(key2Btn.textContent != ""){
	        key2Btn.style.display = "inline";
	    }
	    if(key3Btn.textContent != ""){
	        key3Btn.style.display = "inline";
	    }
	    if(time >= voyager && time < blackHole){
	        key1Btn.textContent = "Voyager I";
	    }
	    else if(time >= blackHole && time < einstein){
	        key2Btn.textContent = "Buraco Negro";
	    }
	    else if(time >= einstein && time < gWaves){
	        key3Btn.textContent = "Albert Einstein";
	    }
	    else if(time >= gWaves && time < eSpectrum){
	        key1Btn.textContent = "Ondas Gravitacionais";
	    }
	    else if(time >= eSpectrum && time < dna){
	        key2Btn.textContent = "Espectro Eletromagnético";
	    }
	    else if(time >= dna && time < bigBang){
	        key3Btn.textContent = "DNA";
	    }
	    else if(time >= bigBang && time < naturalSelection){
	        key1Btn.textContent = "Big Bang";
	    }
	    else if(time >= naturalSelection && time < neoCortex){
	        key2Btn.textContent = "Seleção Natural";
	    }
	    else if(time >= neoCortex && time < triassic){
	        key3Btn.textContent = "NeoCortex";
	    }
	    else if(time >= triassic && time < homoSapiens){
	        key1Btn.textContent = "Triássico";
	    }
	    else if(time >= homoSapiens && time < blombos){
	        key2Btn.textContent = "Homo Sapiens";
	    }
	    else if(time >= blombos && time < catalhoyuk){
	        key3Btn.textContent = "Caverna de Blombos";
	    }
	    else if(time >= catalhoyuk && time < protoCity){
	        key1Btn.textContent = "Çatalhöyük";
	    }
	    else if(time >= protoCity && time < ocher){
	        key2Btn.textContent = "Proto-cidade";
	    }
	    else if(time >= ocher && time < giordano){
	        key3Btn.textContent = "Ocre";
	    }
	    else if(time >= giordano && time < textile){
	        key1Btn.textContent = "Giordano Bruno";
	    }
	    else if(time >= textile && time < christian){
	        key2Btn.textContent = "Textile Merchant Lens";
	    }
	    else if(time >= christian && time < antony){
	        key3Btn.textContent = "Christiaan Huygens";
	    }
	    else if(time >= antony && time < baruch){
	        key1Btn.textContent = "Antony van Leeuwenhoek";
	    }
	    else if(time >= baruch && time < einstein2){
	        key2Btn.textContent = "Baruch Spinoza";
	    }
	    else if(time >= einstein2 && time < bio){
	        key3Btn.textContent = "Albert Einstein";
	    }
	    else if(time >= bio && time < endagered){
	        key1Btn.textContent = "Biodiversidade";
	    }
	    else if(time >= endagered && time < anthropocene){
	        key2Btn.textContent = "Espécies em Perigo";
	    }
	    else if(time >= anthropocene && time < starshot){
	        key3Btn.textContent = "Antropoceno";
	    }
	    else if(time >= starshot && time < voyager2){
	        key1Btn.textContent = "Projeto Breakthrough Starshot";
	    }
	    else if(time >= voyager2){
	        key2Btn.textContent = "Voyager I";
	    }
	}
}

var prevvid = document.getElementById("prevvid");
var subprevvid = document.getElementById("subprevvid");
var nextvid = document.getElementById("nextvid");
var subnextvid = document.getElementById("subnextvid");

function updateVids(){
    var time = video.currentTime;
    if(time >= chapter1 && time < 2){
       if(subnextvid.getAttribute('src') != 'video_photos/c2.mp4'){
            prevvid.setAttribute('src', 'video_photos/c1.mp4');
            subprevvid.setAttribute('src', 'video_photos/c1.mp4');
            nextvid.setAttribute('src', 'video_photos/c2.mp4');
            subnextvid.setAttribute('src', 'video_photos/c2.mp4');
       } 
    }
    else if(time >= chapter2 && time < chapter3){
        if(subnextvid.getAttribute('src') != 'video_photos/c3.mp4'){
            prevvid.setAttribute('src', 'video_photos/c1.mp4');
            subprevvid.setAttribute('src', 'video_photos/c1.mp4');
            nextvid.setAttribute('src', 'video_photos/c3.mp4');
            subnextvid.setAttribute('src', 'video_photos/c3.mp4');
        }
    }
    else if(time >= chapter3 && time < chapter3_1){
        if(subnextvid.getAttribute('src') != 'video_photos/c4.mp4'){
            prevvid.setAttribute('src', 'video_photos/c2.mp4');
            subprevvid.setAttribute('src', 'video_photos/c2.mp4');
            nextvid.setAttribute('src', 'video_photos/c10.mp4');
            subnextvid.setAttribute('src', 'video_photos/c4.mp4');
        }
    }
    else if(time >= chapter3_1 && time < chapter3_2){
        if(subnextvid.getAttribute('src') != 'video_photos/c5.mp4'){
            prevvid.setAttribute('src', 'video_photos/c2.mp4');
            subprevvid.setAttribute('src', 'video_photos/c3.mp4');
            nextvid.setAttribute('src', 'video_photos/c10.mp4');
            subnextvid.setAttribute('src', 'video_photos/c5.mp4');
        }
    }
    else if(time >= chapter3_2 && time < chapter3_3){
        if(subnextvid.getAttribute('src') != 'video_photos/c6.mp4'){
            prevvid.setAttribute('src', 'video_photos/c2.mp4');
            subprevvid.setAttribute('src', 'video_photos/c4.mp4');
            nextvid.setAttribute('src', 'video_photos/c10.mp4');
            subnextvid.setAttribute('src', 'video_photos/c6.mp4');
        }
    }
    else if(time >= chapter3_3 && time < chapter3_4){
        if(subnextvid.getAttribute('src') != 'video_photos/c7.mp4'){
            prevvid.setAttribute('src', 'video_photos/c2.mp4');
            subprevvid.setAttribute('src', 'video_photos/c5.mp4');
            nextvid.setAttribute('src', 'video_photos/c10.mp4');
            subnextvid.setAttribute('src', 'video_photos/c7.mp4');
        }
    }
    else if(time >= chapter3_4 && time < chapter3_5){
        if(subnextvid.getAttribute('src') != 'video_photos/c8.mp4'){
            prevvid.setAttribute('src', 'video_photos/c2.mp4');
            subprevvid.setAttribute('src', 'video_photos/c6.mp4');
            nextvid.setAttribute('src', 'video_photos/c10.mp4');
            subnextvid.setAttribute('src', 'video_photos/c8.mp4');
        }
    }
    else if(time >= chapter3_5 && time < chapter3_6){
        if(subnextvid.getAttribute('src') != 'video_photos/c9.mp4'){
            prevvid.setAttribute('src', 'video_photos/c2.mp4');
            subprevvid.setAttribute('src', 'video_photos/c7.mp4');
            nextvid.setAttribute('src', 'video_photos/c10.mp4');
            subnextvid.setAttribute('src', 'video_photos/c9.mp4');
        }
    }
    else if(time >= chapter3_6 && time < chapter4){
        if(subnextvid.getAttribute('src') != 'video_photos/c10.mp4'){
            prevvid.setAttribute('src', 'video_photos/c2.mp4');
            subprevvid.setAttribute('src', 'video_photos/c8.mp4');
            nextvid.setAttribute('src', 'video_photos/c10.mp4');
            subnextvid.setAttribute('src', 'video_photos/c10.mp4');
        }
    }
    else if(time >= chapter4 && time < chapter4_1){
        if(subnextvid.getAttribute('src') != 'video_photos/c11.mp4'){
            prevvid.setAttribute('src', 'video_photos/c3.mp4');
            subprevvid.setAttribute('src', 'video_photos/c9.mp4');
            nextvid.setAttribute('src', 'video_photos/c12.mp4');
            subnextvid.setAttribute('src', 'video_photos/c11.mp4');
        }
    }
    else if(time >= chapter4_1 && time < chapter5){
        if(subnextvid.getAttribute('src') != 'video_photos/c12.mp4'){
            prevvid.setAttribute('src', 'video_photos/c3.mp4');
            subprevvid.setAttribute('src', 'video_photos/c9.mp4');
            nextvid.setAttribute('src', 'video_photos/c12.mp4');
            subnextvid.setAttribute('src', 'video_photos/c12.mp4');
        }
    }
    else if(time >= chapter5 && time < chapter6){
        if(subnextvid.getAttribute('src') != 'video_photos/c13.mp4'){
            prevvid.setAttribute('src', 'video_photos/c10.mp4');
            subprevvid.setAttribute('src', 'video_photos/c10.mp4');
            nextvid.setAttribute('src', 'video_photos/c13.mp4');
            subnextvid.setAttribute('src', 'video_photos/c13.mp4');
        }
    }
    else if(time >= chapter6 && time < chapter7){
        if(subnextvid.getAttribute('src') != 'video_photos/c14.mp4'){
            prevvid.setAttribute('src', 'video_photos/c12.mp4');
            subprevvid.setAttribute('src', 'video_photos/c12.mp4');
            nextvid.setAttribute('src', 'video_photos/c14.mp4');
            subnextvid.setAttribute('src', 'video_photos/c14.mp4');
        }
    }
    else if(time >= chapter7){
        if(subnextvid.getAttribute('src') != 'video_photos/c1.mp4'){
            prevvid.setAttribute('src', 'video_photos/c13.mp4');
            subprevvid.setAttribute('src', 'video_photos/c13.mp4');
            nextvid.setAttribute('src', 'video_photos/c1.mp4');
            subnextvid.setAttribute('src', 'video_photos/c1.mp4');
        }
    }
}

video.ontimeupdate = function(){
    update()
    updateVids()
};

var allChapters = document.getElementById("allChaptersBtn");
var backChapters = document.getElementById("backChapters");

allChapters.addEventListener("click", function() {
    defaultDisplay.style.display = "none";
    allDisplay.style.display = "block";
});

backChapters.addEventListener("click", function() {
    allDisplay.style.display = "none";
    defaultDisplay.style.display = "block";
});

var intro_all = document.getElementById("intro_all");
var c1_all = document.getElementById("c1_all");
var c2_all = document.getElementById("c2_all");
var c3_all = document.getElementById("c3_all");
var c4_all = document.getElementById("c4_all");
var c5_all = document.getElementById("c5_all");
var c6_all = document.getElementById("c6_all");

intro_all.addEventListener("click", function() {
    vid.currentTime = chapter1;
});

c1_all.addEventListener("click", function() {
    vid.currentTime = chapter2;
});

c2_all.addEventListener("click", function() {
    vid.currentTime = chapter3;
});

c3_all.addEventListener("click", function() {
    vid.currentTime = chapter4;
});

c4_all.addEventListener("click", function() {
    vid.currentTime = chapter5;
});

c5_all.addEventListener("click", function() {
    vid.currentTime = chapter6;
});

c6_all.addEventListener("click", function() {
    vid.currentTime = chapter7;
});

var book_1 = document.getElementById("TheShipOfImaginationBtn");
var book_2 = document.getElementById("CosmicCalendarBtn");
var book_3 = document.getElementById("OriginofLifeBtn");
var book_4 = document.getElementById("FirstMammalsBtn");
var book_5 = document.getElementById("HumanEvolutionBtn");
var book_6 = document.getElementById("BlombosCaveBtn");
var book_7 = document.getElementById("BeginningOfAgriculture");
var book_8 = document.getElementById("ÇatalhöyükBtn");
var book_9 = document.getElementById("GoldenAgeOfScienceAndArtBtn");
var book_10 = document.getElementById("TheExistenceOfOtherWorlds");
var book_11 = document.getElementById("PlantAndAnimalKingdomsBtn");
var book_12 = document.getElementById("HallsOfExtintionBtn");
var book_13 = document.getElementById("TheFutureBtn");

var book_c1 = document.getElementById("TheShipOfImaginationtxt");
var book_c2 = document.getElementById("CosmicCalendartxt");
var book_c3 = document.getElementById("GoldenAgeOfScienceAndArttxt");
var book_c4 = document.getElementById("PlantAndAnimalKingdomstxt");
var book_c5 = document.getElementById("HallsOfExtintiontxt");
var book_c6 = document.getElementById("TheFuturetxt");

book_1.addEventListener("click", function() {
    vid.currentTime = 212;
    book_c1.scrollIntoView(true);
});

book_2.addEventListener("click", function() {
    vid.currentTime = 587;
    book_c2.scrollIntoView(true);
});

book_3.addEventListener("click", function() {
    vid.currentTime = 611;
    book_c2.scrollIntoView(true);
});

book_4.addEventListener("click", function() {
    vid.currentTime = 686;
    book_c2.scrollIntoView(true);
});

book_5.addEventListener("click", function() {
    vid.currentTime = 743;
    book_c2.scrollIntoView(true);
});

book_6.addEventListener("click", function() {
    vid.currentTime = 1005;
    book_c2.scrollIntoView(true);
});

book_7.addEventListener("click", function() {
    vid.currentTime = 1095;
    book_c2.scrollIntoView(true);
});

book_8.addEventListener("click", function() {
    vid.currentTime = 1162;
    book_c2.scrollIntoView(true);
});

book_9.addEventListener("click", function() {
    vid.currentTime = 1423;
    book_c3.scrollIntoView(true);
});

book_10.addEventListener("click", function() {
    vid.currentTime = 1477;
    book_c3.scrollIntoView(true);
});

book_11.addEventListener("click", function() {
    vid.currentTime = 1892;
    book_c4.scrollIntoView(true);
});

book_12.addEventListener("click", function() {
    vid.currentTime = 2069;
    book_c5.scrollIntoView(true);
});

book_13.addEventListener("click", function() {
    vid.currentTime = 2240;
    book_c6.scrollIntoView(true);
});

var key_word_btn1 = document.getElementById("key_word_btn1");
var key_word_btn2 = document.getElementById("key_word_btn2");
var key_word_btn3 = document.getElementById("key_word_btn3");
var key_word_btn4 = document.getElementById("key_word_btn4");
var key_word_btn5 = document.getElementById("key_word_btn5");
var key_word_btn6 = document.getElementById("key_word_btn6");
var key_word_btn7 = document.getElementById("key_word_btn7");
var key_word_btn8 = document.getElementById("key_word_btn8");
var key_word_btn9 = document.getElementById("key_word_btn9");
var key_word_btn10 = document.getElementById("key_word_btn10");
var key_word_btn11 = document.getElementById("key_word_btn11");
var key_word_btn12 = document.getElementById("key_word_btn12");
var key_word_btn13 = document.getElementById("key_word_btn13");
var key_word_btn14 = document.getElementById("key_word_btn14");
var key_word_btn15 = document.getElementById("key_word_btn15");
var key_word_btn16 = document.getElementById("key_word_btn16");
var key_word_btn17 = document.getElementById("key_word_btn17");
var key_word_btn18 = document.getElementById("key_word_btn18");
var key_word_btn19 = document.getElementById("key_word_btn19");
var key_word_btn20 = document.getElementById("key_word_btn20");
var key_word_btn21 = document.getElementById("key_word_btn21");
var key_word_btn22 = document.getElementById("key_word_btn22");
var key_word_btn23 = document.getElementById("key_word_btn23");
var key_word_btn24 = document.getElementById("key_word_btn24");

var info_text1 = document.getElementById("Voyager");
var info_text2 = document.getElementById("Black Hole");
var info_text3 = document.getElementById("Albert Einstein");
var info_text4 = document.getElementById("Gravitational Waves");
var info_text5 = document.getElementById("Electromagnetic Spectrum");
var info_text6 = document.getElementById("Big Bang");
var info_text7 = document.getElementById("DNA");
var info_text8 = document.getElementById("Natural Selection");
var info_text9 = document.getElementById("NeoCortex");
var info_text10 = document.getElementById("Triassic");
var info_text11 = document.getElementById("Homo Sapiens");
var info_text12 = document.getElementById("Blombos Cave");
var info_text13 = document.getElementById("Çatalhöyük");
var info_text14 = document.getElementById("Proto-city");
var info_text15 = document.getElementById("Ocher");
var info_text16 = document.getElementById("Giordano Bruno");
var info_text17 = document.getElementById("Christiaan Huygens");
var info_text18 = document.getElementById("Textile Merchant Lens");
var info_text19 = document.getElementById("Antony van Leeuwenhoek");
var info_text20 = document.getElementById("Baruch Spinoza");
var info_text21 = document.getElementById("Biodiversity");
var info_text22 = document.getElementById("Endangered species");
var info_text23 = document.getElementById("Anthropocene");
var info_text24 = document.getElementById("Project Breakthrough Starshot");

function reset(){
    info_text1.style.display = "none";
    info_text2.style.display = "none";
    info_text3.style.display = "none";
    info_text4.style.display = "none";
    info_text5.style.display = "none";
    info_text6.style.display = "none";
    info_text7.style.display = "none";
    info_text8.style.display = "none";
    info_text9.style.display = "none";
    info_text10.style.display = "none";
    info_text11.style.display = "none";
    info_text12.style.display = "none";
    info_text13.style.display = "none";
    info_text14.style.display = "none";
    info_text15.style.display = "none";
    info_text16.style.display = "none";
    info_text17.style.display = "none";
    info_text18.style.display = "none";
    info_text19.style.display = "none";
    info_text20.style.display = "none";
    info_text21.style.display = "none";
    info_text22.style.display = "none";
    info_text23.style.display = "none";
    info_text24.style.display = "none";
}

key_word_btn1.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text1.style.display = "block";
});

key_word_btn2.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text2.style.display = "block";
});

key_word_btn3.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text3.style.display = "block";
});

key_word_btn4.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text4.style.display = "block";
});

key_word_btn5.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text5.style.display = "block";
});

key_word_btn6.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text6.style.display = "block";
});

key_word_btn7.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text7.style.display = "block";
});

key_word_btn8.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text8.style.display = "block";
});

key_word_btn9.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text9.style.display = "block";
});

key_word_btn10.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text10.style.display = "block";
});

key_word_btn11.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text11.style.display = "block";
});

key_word_btn12.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text12.style.display = "block";
});

key_word_btn13.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text13.style.display = "block";
});

key_word_btn14.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text14.style.display = "block";
});

key_word_btn15.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text15.style.display = "block";
});

key_word_btn16.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text16.style.display = "block";
});

key_word_btn17.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text17.style.display = "block";
});

key_word_btn18.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text18.style.display = "block";
});

key_word_btn19.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text19.style.display = "block";
});

key_word_btn20.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text20.style.display = "block";
});

key_word_btn21.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text21.style.display = "block";
});

key_word_btn22.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text22.style.display = "block";
});

key_word_btn23.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text23.style.display = "block";
});

key_word_btn24.addEventListener("click", function() {
    jQuery(words).toggleClass('active2');
    jQuery(info).toggleClass('active3');
    wordsDiv.style.display = "none";
    infoDiv.style.display = "block";
    fun(3);
    reset();
    info_text24.style.display = "block";
});

var newromanBtn = document.getElementById("timesnewroman");
var courierBtn = document.getElementById("couriernew");
var pinkBtn = document.getElementById("pink");
var turquoiseBtn = document.getElementById("turquoise");
var img1btn = document.getElementById("img1");
var img2btn = document.getElementById("img2");

newromanBtn.addEventListener("click", function() {
    document.documentElement.style.setProperty('--font', '"Times New Roman", Times, serif');
});

courierBtn.addEventListener("click", function() {
    document.documentElement.style.setProperty('--font', '"Courier New", Courier, monospace');
});

pinkBtn.addEventListener("click", function () {
    document.documentElement.style.setProperty('--menuBTN', '#fee4ca');
    document.documentElement.style.setProperty('--settingsBTN', '#f6a5c1');
    document.documentElement.style.setProperty('--settingsLightColour', '#fcdde8');
    document.documentElement.style.setProperty('--settingsLightColour1', '#f7aac4');
    document.documentElement.style.setProperty('--settingsLightColour2', '#f7aec7');
    document.documentElement.style.setProperty('--settingsLightColour3', '#f8b3ca');
    document.documentElement.style.setProperty('--settingsLightColour4', '#f8b7cd');
    document.documentElement.style.setProperty('--settingsLightColour5', '#f8bcd0');
    document.documentElement.style.setProperty('--settingsLightColour6', '#f9c0d3');
    document.documentElement.style.setProperty('--settingsDownBtn', 'linear-gradient(315deg, white 0%, #f7aec7 74%)');
    document.documentElement.style.setProperty('--videoUpBtn', 'linear-gradient(45deg, white 0%, #f7aec7 74%)');
    document.documentElement.style.setProperty('--videoChapBtns', '#f6a5c1');
    document.documentElement.style.setProperty('--videoWordHover', 'pink');
    document.documentElement.style.setProperty('--headerbtn1', '#fff0f0');
    document.documentElement.style.setProperty('--headerbtn2', '#f9c4d2');
    document.documentElement.style.setProperty('--headerbtnborder1', '#b18597');
    document.documentElement.style.setProperty('--headerbtnborder2', '#ffe3e2');
    document.documentElement.style.setProperty('--headerbtnhover', '#ffe9e9');
    document.documentElement.style.setProperty('--base-color', 'black');
    document.documentElement.style.setProperty('--hover-color', 'rgba(220, 120, 150, 1)');
});

turquoiseBtn.addEventListener("click", function() {
    document.documentElement.style.setProperty('--menuBTN', '#2a9d8f');
    document.documentElement.style.setProperty('--settingsBTN', '#83c5be');
    document.documentElement.style.setProperty('--settingsLightColour', '#07beb8');
    document.documentElement.style.setProperty('--settingsLightColour1', '#07beb8');
    document.documentElement.style.setProperty('--settingsLightColour2', '#3dccc7');
    document.documentElement.style.setProperty('--settingsLightColour3', '#68d8d6');
    document.documentElement.style.setProperty('--settingsLightColour4', '#9ceaef');
    document.documentElement.style.setProperty('--settingsLightColour5', '#c4fff9');
    document.documentElement.style.setProperty('--settingsLightColour6', '#c4fff9');
    document.documentElement.style.setProperty('--settingsDownBtn', 'linear-gradient(315deg, white 0%, #2a9d8f 74%)');
    document.documentElement.style.setProperty('--videoUpBtn', 'linear-gradient(45deg, white 0%, #2a9d8f 74%)');
    document.documentElement.style.setProperty('--videoChapBtns', '#2a9d8f');
    document.documentElement.style.setProperty('--videoWordHover', '#68d8d6');
    document.documentElement.style.setProperty('--headerbtn1', '#c4fff9');
    document.documentElement.style.setProperty('--headerbtn2', '#9ceaef');
    document.documentElement.style.setProperty('--headerbtnborder1', '#3dccc7');
    document.documentElement.style.setProperty('--headerbtnborder2', '#68d8d6');
    document.documentElement.style.setProperty('--headerbtnhover', '#07beb8');
    document.documentElement.style.setProperty('--base-color', 'black');
    document.documentElement.style.setProperty('--hover-color', '#3dccc7');
});

img2btn.addEventListener("click", function() {
    document.documentElement.style.setProperty('--bck', 'url("video_photos/pexels-pixabay-2150.jpg")');
    window.scrollTo(0, settings.offsetHeight);
});

img1btn.addEventListener("click", function() {
    document.documentElement.style.setProperty('--bck', 'url("video_photos/cosmos2.jpg")');
    window.scrollTo(0, settings.offsetHeight);
});

key1Btn.addEventListener("click", function() {
    if(key1Btn.textContent != ""){
        if(whichButton == 1){
            jQuery(chapters).toggleClass('active1');
            jQuery(info).toggleClass('active3');
            chaptersDiv.style.display = "none";
            infoDiv.style.display = "block";
            fun(3);
        }
        else if(whichButton == 2){
            jQuery(words).toggleClass('active2');
            jQuery(info).toggleClass('active3');
            wordsDiv.style.display = "none";
            infoDiv.style.display = "block";
            fun(3);
        }
        else if(whichButton == 4){
            jQuery(book).toggleClass('active4');
            jQuery(info).toggleClass('active3');
            bookDiv.style.display = "none";
            infoDiv.style.display = "block";
            fun(3);
        }
        reset();
        if(key1Btn.textContent == "Voyager I"){
            info_text1.style.display = "block";
        }
        else if(key1Btn.textContent == "Gravitational Waves" || key1Btn.textContent == "Ondas Gravitacionais"){
            info_text4.style.display = "block";
        }
        else if(key1Btn.textContent == "Big Bang"){
            info_text6.style.display = "block";
        }
        else if(key1Btn.textContent == "Triassic" || key1Btn.textContent == "Triássico"){
            info_text10.style.display = "block";
        }
        else if(key1Btn.textContent == "Çatalhöyük"){
            info_text13.style.display = "block";
        }
        else if(key1Btn.textContent == "Giordano Bruno"){
            info_text16.style.display = "block";
        }
        else if(key1Btn.textContent == "Antony van Leeuwenhoek"){
            info_text19.style.display = "block";
        }
        else if(key1Btn.textContent == "Biodiversity" || key1Btn.textContent == "Biodiversidade"){
            info_text21.style.display = "block";
        }
        else if(key1Btn.textContent == "Project Breakthrough Starshot" || key1Btn.textContent == "Projeto Breakthrough Starshot"){
            info_text24.style.display = "block";
        }
    }
});

key2Btn.addEventListener("click", function() {
    if(key2Btn.textContent != ""){
        if(whichButton == 1){
            jQuery(chapters).toggleClass('active1');
            jQuery(info).toggleClass('active3');
            chaptersDiv.style.display = "none";
            infoDiv.style.display = "block";
            fun(3);
        }
        else if(whichButton == 2){
            jQuery(words).toggleClass('active2');
            jQuery(info).toggleClass('active3');
            wordsDiv.style.display = "none";
            infoDiv.style.display = "block";
            fun(3);
        }
        else if(whichButton == 4){
            jQuery(book).toggleClass('active4');
            jQuery(info).toggleClass('active3');
            bookDiv.style.display = "none";
            infoDiv.style.display = "block";
            fun(3);
        }
        reset();
        if(key2Btn.textContent == "Voyager I"){
            info_text1.style.display = "block";
        }
        else if(key2Btn.textContent == "Black Hole" || key2Btn.textContent == "Buraco Negro"){
            info_text2.style.display = "block";
        }
        else if(key2Btn.textContent == "Electromagnetic Spectrum" || key2Btn.textContent == "Espectro Eletromagnético"){
            info_text5.style.display = "block";
        }
        else if(key2Btn.textContent == "Natural Selection" || key2Btn.textContent == "Seleção Natural"){
            info_text8.style.display = "block";
        }
        else if(key2Btn.textContent == "Homo Sapiens"){
            info_text11.style.display = "block";
        }
        else if(key2Btn.textContent == "Proto-city" || key2Btn.textContent == "Proto-cidade"){
            info_text14.style.display = "block";
        }
        else if(key2Btn.textContent == "Textile Merchant Lens"){
            info_text18.style.display = "block";
        }
        else if(key2Btn.textContent == "Baruch Spinoza"){
            info_text20.style.display = "block";
        }
        else if(key2Btn.textContent == "Endangered Species" || key2Btn.textContent == "Espécies em Perigo"){
            info_text22.style.display = "block";
        }
    }
});

key3Btn.addEventListener("click", function() {
    if(key3Btn.textContent != ""){
        if(whichButton == 1){
            jQuery(chapters).toggleClass('active1');
            jQuery(info).toggleClass('active3');
            chaptersDiv.style.display = "none";
            infoDiv.style.display = "block";
            fun(3);
        }
        else if(whichButton == 2){
            jQuery(words).toggleClass('active2');
            jQuery(info).toggleClass('active3');
            wordsDiv.style.display = "none";
            infoDiv.style.display = "block";
            fun(3);
        }
        else if(whichButton == 4){
            jQuery(book).toggleClass('active4');
            jQuery(info).toggleClass('active3');
            bookDiv.style.display = "none";
            infoDiv.style.display = "block";
            fun(3);
        }
        reset();
        if(key3Btn.textContent == "Albert Einstein"){
            info_text3.style.display = "block";
        }
        else if(key3Btn.textContent == "DNA"){
            info_text7.style.display = "block";
        }
        else if(key3Btn.textContent == "NeoCortex"){
            info_text9.style.display = "block";
        }
        else if(key3Btn.textContent == "Blombos Cave" || key3Btn.textContent == "Caverna de Blombos"){
            info_text12.style.display = "block";
        }
        else if(key3Btn.textContent == "Ocher" || key3Btn.textContent == "Ocre"){
            info_text15.style.display = "block";
        }
        else if(key3Btn.textContent == "Christiaan Huygens"){
            info_text17.style.display = "block";
        }
        else if(key3Btn.textContent == "Anthropocene" || key3Btn.textContent == "Antropoceno"){
            info_text23.style.display = "block";
        }
    }
});

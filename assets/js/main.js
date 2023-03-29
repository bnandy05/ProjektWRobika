function Belepes(){
    document.getElementsByClassName("container")[0].innerHTML='<div class="row"><div class="col-md-4"><div class="card" style="width: 100%;"><img class="card-img-top" src="assets/images/DeathNote.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">Death Note</h5><p class="card-text" style="color:grey">Misztikus, Természetfeletti, Sejtelmes, Rendőrség, Pszichológiai</p><a href="deathnote.html" class="btn btn-primary">Megnézem!</a></div></div></div><div class="col-md-4"><div class="card" style="width: 100%;"><img class="card-img-top" src="assets/images/kakegurui.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">Kakegurui</h5><p class="card-text" style="color:grey">Misztikus, Természetfeletti, Sejtelmes, Rendőrség, Pszichológiai</p><a href="kakegurui.html" class="btn btn-primary">Megnézem!</a></div></div></div><div class="col-md-4"><div class="card" style="width: 100%;"><img class="card-img-top" src="assets/images/berserk.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">Kenpuu Denki Berserk</h5><p class="card-text" style="color:grey">Fantasy, Középkor, Háború, Pszichológiai</p><a href="berserk.html" class="btn btn-primary">Megnézem!</a></div></div></div></div>'
}


//#region Death Note link lista
const deathnote = ['<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-9602cdebd0" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/9602cdebd0" frameborder="0"></iframe>',
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-ab9cb32ed3" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/ab9cb32ed3" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-a86598d92e" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/a86598d92e" frameborder="0"></iframe>  ', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-429a9c6a9a" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/429a9c6a9a" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-6a497098d0" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/6a497098d0" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-ba96ed6a4c" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/ba96ed6a4c" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-be8b981de8" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/be8b981de8" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-3386dbb712" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/3386dbb712" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-7cd707dc2c" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/7cd707dc2c" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-4d725862c0" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/4d725862c0" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-38e843d563" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/38e843d563" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-af82f48d31" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/af82f48d31" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-fb6dcc680d" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/fb6dcc680d" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-1486aa0e9b" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/1486aa0e9b" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-9f2a0fa422" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/9f2a0fa422" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-1b1628fe5e" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/1b1628fe5e" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-00fea45894" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/00fea45894" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-3f4aadac1a" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/3f4aadac1a" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-fdc3d14715" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/fdc3d14715" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-c1a7dd68de" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/c1a7dd68de" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-e6605fa396" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/e6605fa396" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-b9f866fb10" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/b9f866fb10" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-5e5d99eed4" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/5e5d99eed4" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-d25302f2a4" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/d25302f2a4" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-ff9604f700" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/ff9604f700" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-0286278721" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/0286278721" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-7942537c31" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/7942537c31" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-65d1ab923a" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/65d1ab923a" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-d135acf820" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/d135acf820" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-d135acf820" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/d135acf820" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-987215aa8e" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/987215aa8e" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-8b2d846094" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/8b2d846094" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-940d020626" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/940d020626" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-8c880b03dc" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/8c880b03dc" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-9fc46b13a6" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/9fc46b13a6" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-3e923eda28" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/3e923eda28" frameborder="0"></iframe>',
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-0bbf9230e9" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/0bbf9230e9" frameborder="0"></iframe>']

//#endregion 


//#region Kakegurui link lista

const kakegurui = 
['<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-3905759ccb" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/3905759ccb" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-aae6d71dea" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/aae6d71dea" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-71078a7e0d" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/71078a7e0d" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-25c5cc2cc6" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/25c5cc2cc6" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-c3fdf522bd" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/c3fdf522bd" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-14e5275401" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/14e5275401" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-9ebd2cb540" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/9ebd2cb540" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-609560064e" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/609560064e" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-704b0d3b2d" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/704b0d3b2d" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-4dca60d0c1" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/4dca60d0c1" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-05560d2d60" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/05560d2d60" frameborder="0"></iframe>', 
'<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-6f3cfdf0ba" type="text/html" width="640" height="360" src="//embed.indavideo.hu/player/video/6f3cfdf0ba" frameborder="0"></iframe>']


//#endregion

//#region Berserk link lista

// ---JAVÍTÁS ALLAT VAN AZ OLDALON---

//#endregion
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

function Betolt()
{
    for (var i=0;i<kakegurui.length;i++)
    {
        document.getElementById("valaszto").innerHTML+="<option value=R"+(i+1)+">"+(i+1)+". Rész</option>"
    }
}

function Valtoztat()
{
    var a=document.getElementById("valaszto").value
    var szam=0
    for (var i=0;i<kakegurui.length;i++)
    {
        if(a=="R"+(i+1))
        {
            szam=i
        }
    }
    document.getElementsByClassName("iframe-container")[0].innerHTML=kakegurui[szam]
}
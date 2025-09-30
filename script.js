tab =[
    "Pobrzeże Koszalińskie ",
    "Przylądek Rozewie ",
    "Pobrzeże Szczecińskie ",
    "Pobrzeże Gdańskie ",
    "Żuławy Wiślane ",
    "Pojezierze Pomorskie ",
    "kolano Odry koło Cedyni ",
    "Pojezierze Kaszubskie ",
    "Bory Tucholskie ",
    "Pojezierze Mazurskie ",
    "Pojezierze Olsztyńskie ",
    "Dylewska Góra 312 m n.p.m",
    "Kraina Wielkich Jezior ",
    "Pojezierze Suwalskie ",
    "Kotlina Gorzowska ",
    "Kotlina Toruńska ",
    "Kotlina Warszawska ",
    "Pojezierze Kujawskie ",
    "Nizina Mazowiecka ",
    "Nizina Podlaska ",
    "Kotlina Biebrzańska ",
    "Nizina Wielkopolska ",
    "Wał Trzebnicki ",
    "Nizina Śląska ",
    "Wyżyna Śląska ",
    "Wyżyna Małopolska ",
    "Wyżyna Krakowsko-Częstochowska ",
    "Niecka Nidziańska ",
    "Wyżyna Kielecko-Sandomierska ",
    "Góry Świętokrzyskie",
    "Wyżyna Lubelska Roztocze ",
    "Sudety ",
    "Przedgórze Sudeckie ",
    "Płaskowyż Głubczycki ",
    "Karkonosze",
    "Kotlina Kłodzka ",
    "Kotlina Sandomierska ",
    "Karpaty ",
    "Beskidy Zachodnie ",
    "Beskid Śląski ",
    "Beskid Żywiecki ",
    "Gorce ",
    "Pieniny ",
    "Beskidy Środkowe ",
    "Beskid Sądecki ",
    "Beskidy Wschodnie ",
    "Bieszczady ",
    "Tatry ",
    "Rysy 2499m n.p.m.",
    "Podhale ",
    "Rzeka Wisła ",
    "Rzeka Soła",
    "Rzeka Dunajec ",
    "Rzeka San ",
    "Rzeka Wieprz ",
    "Rzeka Narew ",
    "Rzeka Bug ",
    "Rzeka Biebrza ",
    "Rzeka Nogat ",
    "Rzeka Nida ",
    "Rzeka Pilica ",
    "Rzeka Bzura ",
    "Rzeka Brda ",
    "Rzeka Odra ",
    "Rzeka Nysa Łużycka ",
    "Rzeka Nysa Kłodzka",
    "Rzeka Bystrzyca ",
    "Rzeka Bóbr ",
    "Rzeka Olza ",
    "Rzeka Warta ",
    "Rzeka Noteć ",
    "Rzeka Rega ",
    "Rzeka Słupia ",
    "Rzeka Łeba",
    "Jezioro Dąbie ",
    "Jezioro Jamno ",
    "Jezioro Gardno ",
    "Jezioro Łebsko ",
    "Jezioro Druzno ",
    "Jezioro Miedwie ",
    "Jezioro Mamry ",
    "Jezioro Śniardwy ",
    "Jezioro Wigry",
    "Jezioro Hańcza ",
    "Jezioro Gopło ",
    "Jezioro Morskie Oko ",
    "Zbiornik Włocławski ",
    "Zbiornik Zegrzyński (Dębe) ",
    "Zbiornik Otmuchowski",
    "Zbiornik Czorsztyn-Niedzica ",
    "Zbiornik Soliński ",
    "Kanał Bydgoski ",
    "Kanał Wieprz-Krzna ",
    "Zatoka Pomorska ",
    "Zalew Szczeciński ",
    "Zatoka Gdańska ",
    "Zalew Wiślany ",
    "Wolin ",
    "Mierzeja Helska ",
    "Mierzeja Wiślana "
];

let kolejnosc = [];

for(let i=0; i<tab.length; i++)
{
    while(true)
    {
        let random = Math.floor(Math.random() * tab.length);
        let flag = true;
        kolejnosc.forEach(element => {
            if(random == element)
            {
                flag = false;
            }
        });
        if(flag)
        {
            kolejnosc.push(random)
            break;
        }
    }
}

let idContent = document.querySelector("#id");
let titleContent = document.querySelector("#title");
let mapContent = document.querySelector("#map");
let previousButton = document.querySelector("#previous");
let showButton = document.querySelector("#see");
let nextButton = document.querySelector("#next");

let idWszystko = 0;

function pokaz(id)
{
    idContent.innerHTML = kolejnosc[id];
    titleContent.innerHTML = tab[kolejnosc[id]];
    if(kolejnosc[id] < 50)
    {
        mapContent.innerHTML = "<img src='mapa.png'>";
    }
    else
    {
        if(kolejnosc[id] <75)
        {
            mapContent.innerHTML = "<img src='mapaWodna.png'>";
        }
        else
        {
            mapContent.innerHTML = "<img src='mapaJeziora.png'>";
        }
    }
}
pokaz(idWszystko)

showButton.addEventListener("click", function(){
    mapContent.innerHTML = `<img src='${kolejnosc[idWszystko]}.png'>`;
});

nextButton.addEventListener("click", function(){
    idWszystko++;
    pokaz(idWszystko);
});

previousButton.addEventListener("click", function(){
    idWszystko--;
    pokaz(idWszystko);

});


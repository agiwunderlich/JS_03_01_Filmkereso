// elemek összegyűjtése

let inputNameFilter = document.getElementById('nameFilter');
let resultList = document.getElementById('resultList');


// változók

let nameFilter = '';
let list = [
    'Judgement at Nuremberg',
    'Az ötödik pecsét',
    'Születésnap',
    'Blue Jasmine',
    'Inglourious Basterds',
    'Hounds of love',
    'A félelem bére',
    'Két félidő a pokolban',
    'Amadeus',
    '12 Angry Men',
    'La Pianiste',
    'Play it again Sam',
    'Annie Hall',
    'Oldboy',
    'Dancer in the dark'
]


// abc sorrendbe rendezés

list.sort(function(a, b){
    
    return a.localeCompare(b);

});

console.log(list);


// lista kiírása / init -inicializálás

RenderList();



// feliratkozás

inputNameFilter.addEventListener('keyup', UpdateFilter);


function RenderListItem(text){ // átadjuk paraméterként
    let newListItem = document.createElement('li');
    newListItem.innerText = text; // megadjuk a szövegét
    resultList.appendChild(newListItem);
}

// függvények

function RenderList(){

    // először ki kell üríteni a listát

    ResetList();

    // filterezés

    let filteredList = list.filter(function(item){

        // több sorban
        let lowerCaseItem = item.toLowerCase();
        let lowerCaseNameFilter = nameFilter.toLowerCase();

        let position = lowerCaseItem.indexOf(lowerCaseNameFilter);

        // egy sorban
        //let position = item.toLowerCase().indexOf(nameFilter.toLowerCase());


        // több sorban
        if( position == -1){
            return false;
        } else {
            return true;
        }
        
        // egy sorban
        // return position != -1;


    });
    filteredList.forEach(function(item){
        RenderListItem(item);

    })
}

function ResetList(){

    resultList.innerText = '';
};


function UpdateFilter(){
    nameFilter = this.value;

    // végleges lista kiírása

    RenderList();
}
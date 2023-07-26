let table="";
let first=[];
let last=[];
let random;
let number = 0;
for (let i = 0; i < 16; i++){
// burdaki for necenci reqeme qeder davam etsin 
first[i]= i + 1;
// console.log(first[i]); 
// [1...16] daxil olmaqlar butun ededler sira ile cixir
}
            for (let i = 0; i < 16; i++){
            //burdaki for nece defe tekrarlansin demekdi 
            random = Math.floor(Math.random() * first.length );
            last[i] = first[random];
            first.splice(random,1);
            console.log(last[i]);
            // last[i]- [1..16] ededler verecek TEKRARLANMADAN
            }
                                            // Cedvel hissenin ozu buradan baslayir
                                            for ( let i = 0; i < 4; i++){
                                            table += `<tr>`
                                            for ( let j = 0; j < 4; j++){
                                            table += `<td id="eyni${last[number]}" onclick="Kunopka(${last[number]})"> ${last[number]} </td>`;
                                            number ++;
                                            }
                                            table += `</tr>`
                                            document.getElementById("table").innerHTML = table;
                                            }
                                            // Cedvel hissenin sonu burada bitir
                                                                                                // Basmaq hissesi BUTTON yeri
                                                                                                let baslangic = 1;    
                                                                                                function Kunopka(x){
                                                                                                let button = document.getElementById("eyni" + x);
                                                                                                if (x == baslangic){
                                                                                                button.style.backgroundColor = "limegreen";
                                                                                                if (x == 16){
                                                                                                alert("YOU WIN!");
                                                                                                }
                                                                                                baslangic++;
                                                                                                // kut++ her defesinde artsin demekdir
                                                                                                } else{
                                                                                                button.style.backgroundColor = "red";
                                                                                                alert("Game Over");
                                                                                                }
                                                                                                }
let time = 10;
setInterval(vaxt, 1000)  
// s..val(vaxt, 1000) vaxt funksiyanin adidi (moterizeleri yazmirsan)  1000 = 1saniye;   
function vaxt(){
let vaxt = document.getElementById("vaxt");
vaxt.innerHTML = `Sizin ${time} saniye vaxtiniz qaldi`;
time--;
// time--; azalmasini bildirir
if(time == 0 ){
alert("Vaxt bitdi");
let reload = confirm("Siz oyunda meglub oldunuz Yeniden cehd etmek isteyirsiz?");
if( reload == true){
location.reload();
// location.reload();-sehifeni yenileyir
}
}
}
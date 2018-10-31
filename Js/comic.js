
function VoteBar(comic1,comic2) {
    let tot=comic1+comic2;                               
    let pu=(comic1 * 100)/tot;

    document.getElementById("progressBar").style.width = pu + "%";
};               

function dissabled() {

};
let btnMinus,btnPlus,qtyBoxes;

function changeQty(i,qty){
    let newQty=parseInt(qtyBoxes[i].value)+qty;
    if(newQty<0){
        newQty=0;
    }
    qtyBoxes[i].value=newQty;
}                                                                       
window.addEventListener("load", function(){
    btnMinus=document.getElementsByClassName("btnMinus");
    btnPlus=document.getElementsByClassName("btnPlus");
    qtyBoxes=document.getElementsByClassName("qtyBox");

    for(let i=0;i<btnMinus.length;i++){
        btnMinus[i].onclick=function(){
            changeQty(i ,-1);
        };
        btnPlus[i].onclick=function(){
            changeQty(i ,+1);
        };
    }
})
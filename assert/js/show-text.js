function show_content_p(skl){
    skill=document.getElementById(skl);
    skill.style.display="block";
    skill.parentNode.style.height=skill.offsetHeight+"px";
}
function hidden_content_p(skl){
    skill=document.getElementById(skl);
    skill.parentNode.style.height=0+"px";
    skill.style.display="none";
}
var int_active="1";
function int_show(ths,p,item){
    if(item.charAt(item.length-1)===int_active){}
    else{
        document.getElementById("int_p_"+int_active).style.display="none";
        document.getElementById("int_item_"+int_active).style.display="none";
        if(int_active==5||int_active==6)
            document.getElementById("int_"+int_active).className="operat-arch";
        else
            document.getElementById("int_"+int_active).className="";
        ths.className+=" active";
        document.getElementById(p).style.display="block";
        document.getElementById(item).style.display="block";
        int_active=item.charAt(item.length-1);
    }
}
function int_p_show(){
    document.getElementById("int_p_"+int_active).style.opacity="1";
}
function int_p_hidden(){
    document.getElementById("int_p_"+int_active).style.opacity="0";
}
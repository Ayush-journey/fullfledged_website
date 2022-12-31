let login_btn = document.getElementById('login-btn');

login_btn.addEventListener('click', ()=>{
    document.getElementById('logcont').style.display='block';    
});

let close = document.getElementById('close');
close.addEventListener('click', ()=>{
    document.getElementById('logcont').style.display='none';
});

let login_panel =  document.getElementById('btn1');

login_panel.addEventListener('click', ()=>{
    document.getElementById('logcont').style.display='none'
    document.getElementById('msg').style.display = 'block';
});

let close1 = document.getElementById('close1');
close1.addEventListener('click', ()=>{
    document.getElementById('msg').style.display='none';
});


let coll = document.getElementsByClassName('collapsible');

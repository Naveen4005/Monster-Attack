let monsterHP = 300;
let playerHP = 300;
let roundLog = "";
let turn = 0;
function check(){
    if(monsterHP <= 0){
        alert("Player Won!!!");
        console.log(roundLog);
    }
    else if(playerHP <= 0){
        alert("Monster Won!!!");
        console.log(roundLog);
    }
}
function onClickReset(){
    monsterHP = 300;
    playerHP = 300;
    roundLog = "";
    turn = 0;
    document.getElementById('monsterHP').style.width = `${monsterHP}px`;
    document.getElementById('playerHP').style.width = `${playerHP}px`;
}
function monsterTurn(){
    let x = Math.floor(Math.random()*3);
    if(x==0){
        playerHP = playerHP - 20;
        document.getElementById('playerHP').style.width = `${playerHP}px`;
        roundLog += ` Round${turn} : Monster used LA`
    }
    else if(x==1){
        playerHP = playerHP - 30;
        document.getElementById('playerHP').style.width = `${playerHP}px`;
        roundLog += ` Round${turn} : Monster used HA`
    }
    else{
        monsterHP = monsterHP + 30;
    if(monsterHP > 300){
        monsterHP = 300;
    }
    document.getElementById('monsterHP').style.width = `${monsterHP}px`;
    roundLog += ` Round${turn} : Monster used Heal`
    }
}
function onClickLA(){
    turn++;
    monsterHP = monsterHP - 20;
    document.getElementById('monsterHP').style.width = `${monsterHP}px`;
    monsterTurn();
    roundLog += ` Round${turn} : Player used LA`
    check();
}
function onClickHA(){
    turn++;
    monsterHP = monsterHP - 30;
    document.getElementById('monsterHP').style.width = `${monsterHP}px`;
    monsterTurn();
    roundLog += ` Round${turn} : Player used HA`
    check();
}
function onClickHeal(){
    turn++;
    playerHP = playerHP + 30;
    if(playerHP > 300){
        playerHP = 300;
    }
    document.getElementById('playerHP').style.width = `${playerHP}px`;
    monsterTurn();
    roundLog += ` Round${turn} : Player used Heal`
    check();
}
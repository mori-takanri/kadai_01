const hands = ['rock','paper','scissors'];



function onHandClick(btn){
  const playerHand = btn.id;
  // console.log(btn.id);


const i = Math.floor(Math.random() *3);

const computerHand =hands[i];
console.log(computerHand);
const conputerElement = document.querySelector('#computerHand');
// console.log(conputerElement);
conputerElement.innerText =computerHand;

const result =  judge(playerHand,computerHand);

// let str = 'p:'+　(playerHand + ',')
// str += ',c：' +(computerHand + ',')
// str += 'player:'+result;
// console.log(str);

document.querySelector('#outcome').innerText = result;

}

function judge(playerHand,computerHand){
  let result = undefined;

  if (playerHand === 'rock'){
    if(computerHand ==='rock'){
      result = 'draw';
    }else if (computerHand ==='scissors'){
      result = 'win';
    } else{
      result  = 'lose'
    }
  }

  if (playerHand === 'paper'){
    if(computerHand ==='rock'){
      result = 'win';
    }else if (computerHand ==='scissors'){
      result = 'lose';
    } else{
      result  = 'draw'
    }
  }

  if (playerHand === 'scissors'){
    if(computerHand ==='rock'){
      result = 'lose';
    }else if (computerHand ==='paper'){
      result = 'win';
    } else{
      result  = 'draw'
    }
  }




  

  // console.log.('p:'+　playerHand +　',c：' +computerHand);

  return result;
}

for(let playerHand of hands ){
  for(let computerHand of hands){
  const result =  judge(playerHand,computerHand);

    let str = 'p:'+　(playerHand + ',')
  str += ',c：' +(computerHand + ',')
  str += 'player:'+result;
  console.log(str);
}
}

$("a").on("click",function(){
  $("a").css("color", "red");
  alert("じゃんけんが押されました！");
});

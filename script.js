function showTime() {
  document.
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

const scores=localStorage.getItem('scores')?JSON.parse(localStorage.getItem('scores')):{
  win:0,
  lose:0,
  tie:0
}

const todoList=[];
displayTodos();
function fetchComputerMove(){
  const randomNumber=Math.floor(Math.random()*10)+1;
  if(randomNumber>=1 && randomNumber<=3){
    return 'rock';
  }
  else if(randomNumber>=4 && randomNumber<7){
    return 'paper';
  }
  else{
    return 'scissors';
  }
}

function playGame(choice){
  let computerMove=fetchComputerMove();
  if(choice=='rock'){
    if(computerMove=='paper'){
      scores.lose+=1;
      alert(`Your move ${choice} computerMove ${computerMove} you lost`);
    }
    else if(computerMove=='scissors'){
      scores.win+=1;
      alert(`Your move ${choice} computerMove ${computerMove} you win`);
    }
    else{
      scores.tie+=1;
      alert(`Your move ${choice} computerMove ${computerMove} it's a tie`);
    }
  }
  if(choice=='paper'){
    if(computerMove=='scissors'){
      scores.lose+=1;
      alert(`Your move ${choice} computerMove ${computerMove} you lost`);
    }
    else if(computerMove=='rock'){
      scores.win+=1;
      alert(`Your move ${choice} computerMove ${computerMove} you win`);
    }
    else{
      scores.tie++;
      alert(`Your move ${choice} computerMove ${computerMove} it's a tie`);
    }
  }
  if(choice=='scissors'){
    if(computerMove=='rock'){
      scores.lose+=1;
      alert(`Your move ${choice} computerMove ${computerMove} you lost`);
    }
    else if(computerMove=='paper'){
      scores.win+=1;
      alert(`Your move ${choice} computerMove ${computerMove} you win`);
    }
    else{
      scores.tie+=1;
      alert(`Your move ${choice} computerMove ${computerMove} it's a tie`);
    }
    localStorage.setItem('scores',JSON.stringify(scores));
  }
  
  document.querySelector('.win').innerHTML=`Win ${scores.win}`
  document.querySelector('.lose').innerHTM=`Lost ${scores.lose}`;
  document.querySelector('.tie').innerHTML=`Tie ${scores.tie}`;
  
}

function subscribe(){
  const isSub = document.querySelector('.subscribe').innerHTML;
  if(isSub==='Subscribe'){
    document.querySelector('.subscribe').innerHTML='Subscribed'
  }
  else{
    document.querySelector('.subscribe').innerHTML='Subscribe';
  }
}

function calculate(){
  const amount = document.querySelector('.amount').value;
  let finalAmount=Number(amount);
  if(amount<40){
    finalAmount+=10;
  }
  document.querySelector('.final-amount').innerHTML=finalAmount;
}
function handleButton(n){
  const selectedBtn = document.querySelector(`.${n}`);
  if(selectedBtn.classList.contains('test-clicked')){
    selectedBtn.classList.remove('test-clicked');
  }
  else{
    removePrevious();
    selectedBtn.classList.add('test-clicked');
  }


}

function removePrevious(){
  const toggledId = document.querySelector('.test-clicked');
  if(toggledId){
    toggledId.classList.remove('test-clicked')
  }
}

function addTodo(){
  const element = document.querySelector('.todo-input-1');
  const dateElement = document.querySelector('.todo-date');
  const value = element.value;
  const date = dateElement.value;
  const data={
    value,
    date
  }
  todoList.push(data);
  element.value='';
  dateElement.value='';
  displayTodos();
}

function handleDelete(i){
  todoList.splice(i,1);
  displayTodos();
}

function displayTodos(){
  let html='';
  for(let i=0;i<todoList.length;i++){
    html+=`<div>${todoList[i].value}</div>`
    html+=`<div>${todoList[i].date}</div>`
    html+=`<button onclick="handleDelete(${i});">Delete</button>`
    
  }
  document.querySelector('.all-todos').innerHTML=html;
}

function handleClick(myMove){
  const computerMove = fetchComputerMove();
  const element  = document.querySelector('.scores');
  const commonString = `My move ${myMove} computer move ${computerMove}`
  if(myMove=='rock'){
    if(computerMove=='rock'){
      element.innerHTML = commonString+' tie';
    }
    else if(computerMove=='scissors'){
      element.innerHTML= commonString+' win';
    }
    else{
      element.innerHTML = commonString+' lose';
    }
  }
  else if(myMove=='scissors'){
    if(computerMove=='rock'){
      element.innerHTML = commonString+' lose';
    }
    else if(computerMove=='paper'){
      element.innerHTML= commonString+' win';
    }
    else{
      element.innerHTML = commonString+' tie';
    }
  }
  else{
    if(computerMove=='rock'){
      element.innerHTML = commonString+' win';
    }
    else if(computerMove=='paper'){
      element.innerHTML= commonString+' tie';
    }
    else{
      element.innerHTML = commonString+' lose';
    }
  }
  
}


function randomClicker(){
  const randomMove=fetchComputerMove();
  handleClick(randomMove);
}

function autoPlay(){
  let autoPlaying=false;let IntervalId;
  const element = document.querySelector('.auto-play');
  if(element.innerHTML==='Auto Play'){
    autoPlaying=true;
    element.innerHTML='Pause'
  }
  else{
    autoPlaying=false;
    element.innerHTML='Auto Play';
  }
  if(autoPlaying){
  IntervalId=setInterval(randomClicker,1000);
    
  }
  else{
    clearInterval(IntervalId);
  }
    
  
}

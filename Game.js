
let score=JSON.parse(localStorage.getItem('score'));
    
    if (!score) {
       
        score ={Win:0,lose:0,tie:0};}
        
document.querySelector('.score').innerText=displayscore(score);       

function calaccupmut() {
    let i = Math.random();
    if (i<0.3) {return 'Rock';} 
    else if (i<=0.6) {return 'Payper';}
    else return 'scissor';
}
function playGame(name) {
  
    let result ='';
    comp=calaccupmut();
    document.querySelector('.affichage').innerHTML='<p class="You">You<\p><img src="'+name+'.png" class="img1">'+'\n'+'<img src="'+comp+'.png" class="img1"> <p class="You">Computer<\p>';

    if (name===comp){
        score.tie++;
        result='Tie';
       
          }
    else if (name==='Rock')
        {
            console.log(comp);
            if(comp ==='Payper'){  score.lose++; result='You Lose';}
            else if(comp==='scissor'){ score.Win++;
                result='You Win';
                }
        }
        else if (name==='Payper') 
            {
            if(comp==='Rock'){
                score.Win++;
                result='You Win';
            }
            else if(comp==='scissor') {
                score.lose++;
                result='You Lose';
            }
        }
        else if (name==='scissor') {
            if(comp==='Payper'){ score.Win++; result='You Win';}
            else if (comp==='Rock'){score.Win++;result='You Lose';}
        }
    
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('.score').innerText= result+"\n"+displayscore(score);
}
  
function  displayscore(score,etat){
    return(`Win :${score.Win} lose :${score.lose} tie :${score.tie}`);
    }

let z;
let stop = false;
let Ap= document.querySelector('.A-play');
let x= () =>{
     playGame(calaccupmut());
};
Ap.addEventListener('click',()=>{
    if (stop==false) {
        z=setInterval(x,1000);
        stop=true;
        document.querySelector('.A-play').innerHTML='Stop play';
        document.querySelector('.A-play').classList.add('STOP');
        
    }
    else
    {  
        console.log('hh');
        clearInterval(z);
        stop=false;
        document.querySelector('.A-play').innerHTML='Auto play';
        document.querySelector('.A-play').classList.remove('STOP');
    }
    
    
})
document.body.addEventListener('keydown',(event)=>{
  
  if (event.key==='a') {
    if (stop==false) {
        z=setInterval(x,1000);
        stop=true;
        document.querySelector('.A-play').innerHTML='Stop play';
        document.querySelector('.A-play').classList.add('STOP');
        
    }
    else
    {  
        console.log('hh');
        clearInterval(z);
        stop=false;
        document.querySelector('.A-play').innerHTML='Auto play';
        document.querySelector('.A-play').classList.remove('STOP');
    }
    
    
  }
    
    
})

 





let rscor= document.querySelector('.R-score');
rscor.addEventListener('click', ()=>{ 
    document.querySelector('.Ask').innerHTML=
    `
    <p class "alert"> Are you sure you want to reset the score <p>
    <button class = "Yes">Yes</button>
    <button class ="No">No</button>
    `;
    document.querySelector('.Yes').addEventListener('click', ()=> {
    score.Win=0;
    score.tie=0;
    score.lose=0;
 document.querySelector('.score').innerText= displayscore(score);
 localStorage.removeItem('score');
 document.querySelector('.Ask').innerHTML='';

    }
);
document.querySelector('.No').addEventListener('click', ()=>{
    document.querySelector('.score').innerText= displayscore(score);
 localStorage.removeItem('score');
    document.querySelector('.Ask').innerHTML='';
});

 
})


































function getcomputerchoice()
{   const word=["rock","paper","scissors"];
    let i=Math.floor(Math.random()*3);
    return word[i];
}

function playround(playerselection,computerselection)
{
   
    
    if(playerselection=="rock" && computerselection=="paper")
    {       
        return 0;
    }

    else if(playerselection=="paper" && computerselection=="rock")
    {   
        return 1;
    }

    else if(playerselection=="rock" && computerselection=="scissors")
    {   
        return 1;
    }

    else if(playerselection=="scissors" && computerselection=="rock")
    {   
        return 0;
    }

    else if(playerselection=="paper" && computerselection=="scissors")
    {   
        return 0;
    }
    
    else if(playerselection=="scissors" && computerselection=="paper")
    {   
        return 1;
    }

    else if(playerselection==computerselection)
    {   
        return 2;
    }

   
    
    
}

function Game()
{   
    let playerselection;
    let computerselection;
    let result;
    let playercount=0;
    let computercount=0;
    
   
   
    const buttons=document.querySelectorAll('button');
    buttons.forEach( button =>
    {  
       
        button.addEventListener('click',()=>
        {
            playerselection=button.getAttribute('id');   
            computerselection=getcomputerchoice();
            result=playround(playerselection,computerselection);

                        
            if(result==1)
            {
                let display=document.querySelector('#display');
                display.textContent="You win! "+playerselection+" beats "+computerselection+"\t";
                playercount+=1;
            }

            else if(result==0)
            {
                
                let display=document.querySelector('#display');
                display.textContent="You lose! "+computerselection+" beats "+playerselection+"\t";
                computercount=computercount+1;
            }

            else if(result==2)
            {
               
                let display=document.querySelector('#display');
                display.textContent="ITS A DRAW";
            }

            const player=document.querySelector('.player span');
            player.textContent=playercount;

            const computer=document.querySelector('.computer span');
            computer.textContent=computercount;

            if(playercount==5 || computercount==5)
            {   
               
                const winner=document.querySelector('.winner span');
                winner.textContent=playercount==5?"Player wins the game!":"Computer wins the game!";
            
                display.style.display = 'none';
                const score=document.querySelector('.score');
                score.style.display = 'none';

                const play=document.querySelector('.play');
                play.innerHTML='<p>DO you wanna play again?</p> <button class="yes">YES</button> <button class="no">NO</button>';

                const yes=document.querySelector('.yes');
                const no=document.querySelector('.no');

                yes.addEventListener('click',()=>
                {   
                    display.textContent='';
                    playercount=0;
                    computercount=0;
                    player.textContent=playercount;
                    computer.textContent=computercount;
                    winner.textContent='';
                   
                    display.style.display = 'block';
                    score.style.display = 'block';

                });

                no.addEventListener('click',()=>
                {
                play.remove();
                    
                });

            }
            
            });
    
    });

}


Game();
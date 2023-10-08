function getcomputerchoice()
{   const word=["rock","paper","scissors"];
    let i=Math.floor(Math.random()*3);
    return word[i];
}

function playround(playerselection,computerselection)
{
    playerselection=playerselection.toLowerCase();
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

    else
    {
        return 3;
    }
    
    
}

function Game()
{   
    let playerselection;
    let computerselection;
    let result;

    for (let i=0;i<5;i++)
{   
    console.log("Round "+(i+1)+"\t");
    playerselection=prompt("Rock, Paper or scissors ?");
    computerselection=getcomputerchoice();
    result=playround(playerselection,computerselection);
    

    if(result==1)
    {
        console.log("You win! "+playerselection+" beats "+computerselection+"\t");
    }

    else if(result==0)
    {
        console.log("You lose! "+computerselection+" beats "+playerselection+"\t");
    }

    else if(result==2)
    {
        console.log("ITS A DRAW! \t");
    }

    else
    {
        console.log("Wrong input! \t")
    }
}

}

Game();




var input;	
var secondInput;		
var element;				
var firstCount = 0;		
var economyCount = 0;		
var seats = [0,0,0,0,0,0,0,0,0,0];			
//allocate 10-element Array			
function startArray()		
{						
    for(var i = 0; i < 10; i++)			
    {									
        input = window.prompt("Please type 1 for First Class and Please type 2 for Economy.");					
        if (input == 1 || input == 2)					
        {						
            element = linearSearch(seats);						
            if (element==-1 && input == 1)						
            {							
                document.writeln("The First Class is already fully booked<br/>");							
                secondQuestion(seats);						
            }						
            else if (element ==-1 && input == 2)						
            {							
                document.writeln("The Economy Class is already fully booked<br/>");							
                secondQuestion(seats);						
            }						
            else							
            boardingPass(input);						
        }															
        //to terminate the program					
        else 					
        {												
            System.exit(0);					
        }													
    }		
}				

function linearSearch(theArray)		
{			
    if (input == 1)			
    {				
        for (var n = 0; n < 5; n++)					
        if (theArray [n] == 0)						
        return n;			
    }			
    else if (input == 2)			
    {				
        for (var n = 5; n < 10; n++)					
        if (theArray [n] == 0)						
        return n;			
    }			
        return -1;		
}		

function boardingPass(theInput)		
{			
    if (input == 1)			
    {											
        document.writeln("You are allocated in the First Class<br/>");				
        document.writeln("Your seat number is "+ element+"<br/>");								
        seats[element]= 1;				
        firstCount++;				
    }			
    else if (input == 2)			
    {												
        document.writeln("You are allocated in the Economy Class<br/>");				
        document.writeln("Your seat number is "+ element +"<br/>");							
        seats[element]= 1;				
        economyCount++;				
    }					
}		

function secondQuestion(theArray)		
{			
    if (input == 1)			
    {				
        for (var n = 6; n < 11;n++)				
        {					
            if (theArray [n] == 0)					
            {						
                secondInput = window.prompt("Do you want to move to Economy Class? (If YES, please press 1. If NO, please press 2)");							
                if ( secondInput == 1)							
                {																
                    input = 2;								
                    element=linearSearch(seats);								
                    document.writeln("You have been allocated to Economy Class<br/>");								
                    boardingPass(input);								
                    break;							
                }							
                else if (secondInput == 2)							
                {								
                    document.writeln("Next flight leaves in 3 hours<br/>");								
                    break;							
                }					
            }				
        }			
    }			

    else if (input == 2)			
    {				
        for (var n = 0; n < 6; n++)				
        {					
            if (theArray [n] == 0)					
            {						
                secondInput = window.prompt("Do you want to move to First Class? (If YES, please press 1. If NO, please press 2)");							
                if ( secondInput == 1)							
                {								
                    input = 1;								
                    element=linearSearch(seats);								
                    document.writeln("You have been allocated to First Class<br/>");								
                    boardingPass(input);								
                    break;							
                }							
                    else if (secondInput == 2)							
                {								
                    document.writeln("Next flight leaves in 3 hours<br/>");								
                    break;							
                }					
            }				
        }			
    }					
}		
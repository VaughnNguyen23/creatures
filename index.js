function showHome()
        {
            /*
                loop through all creatures
                
                if creature lives on land, background color green
                if creature lives in water, blue
                if creature lives in air, yellow
                
                */
               
            let myHome = "";

            const myNodelist = document.querySelectorAll("div.creature");
            for (let i = 0; i < myNodelist.length; i++) {
            myHome = myNodelist[i].dataset.home;

            switch(myHome){
                case "land":
                myNodelist[i].style.backgroundColor = "green";
                break;

                case "water":
                myNodelist[i].style.backgroundColor = "blue";
                break;

                case "air":
                myNodelist[i].style.backgroundColor = "yellow";
                break;             
            }               
}
            
        }//end showHome()
        
        function showType()
        {
            /*
                loop through all creatures
                
                if creature is an animal, border color solid red
                if creature is an insect, border color is dashed orange
            */
            let myType = "";

            const myNodelist = document.querySelectorAll("div.creature");
            for (let i = 0; i < myNodelist.length; i++) {
            myType = myNodelist[i].dataset.type;

            switch(myType){
            case "animal":
                myNodelist[i].style.border = "4px solid red";
            break;

            case "insect":
                    myNodelist[i].style.border = "4px dashed orange";
            break;
           
            }               
        }
        }//end showType()

        function clearAll()
        {
            /*
                loop through all creatures
                
                clear border back to 1px solid black
                clear background color to white
                
            */
            const myNodelist = document.querySelectorAll("div.creature");
            myNodelist.forEach(function(el){

                el.style.backgroundColor = "white";            
                el.style.border = "1px solid black";
            });
        }//end clearAll()

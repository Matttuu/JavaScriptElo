 /* console.log(" " + "#" + " " + "#" + " " + "#" + " " + "#" +
           "\n #" + " " + "#" + " " + "#" + " " + "#" + " " +
           "\n " + " " + "#" + " " + "#" + " " + "#" + " " + "#" +
           "\n #" + " " + "#" + " " + "#" + " " + "#" + " " +
           "\n " + " " + "#" + " " + "#" + " " + "#" + " " + "#" +
           "\n #" + " " + "#" + " " + "#" + " " + "#" + " " +
           "\n " + " " + "#" + " " + "#" + " " + "#" + " " + "#" +
           "\n #" + " " + "#" + " " + "#" + " " + "#" + " "  );
           
           */ 


          let size = 8;
          let chessboard ="";
          
          for (let vertical = 0; vertical < size; vertical++){
            for (let horizontal = 0; horizontal < size; horizontal++){
              if((horizontal+vertical) % 2 == 0)
                 chessboard += " ";
              else
                 chessboard += "#";
                 }
              chessboard += "\n";
            }
            
            console.log(chessboard);
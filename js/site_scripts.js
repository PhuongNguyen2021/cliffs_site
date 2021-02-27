var photos = []; //declare an empty array to store image element
            var fileNames = [];//declare an empty element to store image file names
            var imageList = [];//declare an empty array to store html list that contain an image
            var image;//declare an empty variable to store the assembled image list codes 
            var openList = "<li class='partner'>";//declare a variable to contain open list tag
            var closeList = "</li>";//declare a variable to contain close list tag
        
            //Create a loop to create 6 images starting with index of 0
            for (var i=0; i<6; i++) {
                fileNames.push("partner"+(i+1));//create image file name and store in the array
                photos.push("<img src='images/partners/"+fileNames[i]+".png'>"); //assemble file name into image element and store in an array
                image =  openList + photos[i] + closeList; //assemble image element from array list with list elements and store in a variable
                imageList.push(image); //store(push) the assemnled list codes into an array
            }
            //Display all six images code stored in the array
            document.getElementById("partners").innerHTML = imageList.join(" ");
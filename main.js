
function startClassification()    
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/p3uhWn-6A/model.json', modelReady);

}
function modelReady(){

    classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
var tiger = 0;
function gotResults(error,results)
{
    if(error)
    {
        console.error(error);
    }
 
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()* 255) + 1;
        random_number_g = Math.floor(Math.random()* 255) + 1;
        random_number_b = Math.floor(Math.random()* 255) + 1;
        
        document.getElementById("result_label").innerHTML = 'I CaN HeAr - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'detected dog,cats and tiger are  - ' + (results[0].confidence * 100).toFixed(2) + " % ";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
         img = document.getElementById("animal_image");
         if(results[0].label == 'DOG(bark)')
         {
             img.src = 'download.jpg';
             dog = dog+1;

         }
         else if(results[0].label == 'cat(meow)'){
            img.src = 'download-2.jpg';
             cat = cat+1;

         }
         
         else if(results[0].label == 'tiger(roar)'){
            img.src = 'download-2.jpg';
             tiger = tiger+1;

         }

        else{

            img.src = 'download.png'
        }
    

    }

        
}

//cat starts

if(results[0].label == 'cat(meow)')
 {
         
             img.src = 'download-2.jpg';              
             cat = cat+1;

         }
          else if (results[0].label == 'DOG(bark)'){
            img.src = 'download.jpg';
             dog = dog+1;

         }
         
         else if(results[0].label == 'tiger(roar)'){
            img.src = 'download-2.jpg';
             tiger = tiger+1;

         }

        else{

            img.src = 'download.png'
        }
    

    

        

//tiger

if(results[0].label == 'tiger(roar)')
         {
             img.src = 'download-2.jpg';              
             tiger = tiger+1;

         }
         else if(results[0].label == 'DOG(bark)'){
            img.src = 'download.jpg';
             dog = dog+1;

         }
         
         else if(results[0].label == 'cat(meow)'){
            img.src = 'download-1.jpg';
             dog = dog+1;

         }

        else{

            img.src = 'download.png'
        }
    

    

        


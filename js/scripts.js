

// Fetching Records on Homepage

$(document).ready(function(){

    
    // Fetch user inputs and return vet records 
    $("#searchTopVets").submit(
        function(e){

            e.preventDefault();
            
            var animalCategory = $("#animalCategory").val();
            var countyLocation = $("#countyLocation").val();
    
            console.log(animalCategory + " "+ countyLocation);

            // Read from data store 
            $('.vetSearchResults').toggle(2000);

            for (var i = 0 ; i < 5; i++){                        
                
                $("#registeredVetsResults").append("<tr class='resultRow'><td>john</td><td>Nairobi</td><td>general</td><td>0722222222</td></tr>");
                
            }

            

        }

    )








    }
)

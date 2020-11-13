var img = document.getElementById("imga");
        var pt = document.getElementById("pt");
        var pa = document.getElementById("pa"); // .value para valor
        var nmt =document.getElementById("nmt");
        var nma = document.getElementById("nma");
        var m5= document.getElementById("m5");
        var m10 = document.getElementById("m10");
        var m15 = document.getElementById("m15");
        var m30 = document.getElementById("m30");
        var m50 = document.getElementById("m50");
        var porcen = document.getElementById("porcen");
        var calpor = document.getElementById("calcular");
        var porObj = pt.value*.7;
        
        nmt.addEventListener("click",()=>{
           alert(pt.value*45); 
        });
        nma.addEventListener("click", ()=>{
            alert(pa.value*45);
        });
        m5.addEventListener("click" , ()=>{
            suma(5);
        });
        m10.addEventListener("click" , ()=>{
            suma(10);
        });
        m15.addEventListener("click" , ()=>{
            suma(15);
        });
        m30.addEventListener("click" , ()=>{
            suma(30);
        });
        m50.addEventListener("click" , ()=>{
            suma(50);
        });
        
        calpor.addEventListener("click",()=>{
            var por = (pa.value*100)/pt.value;
            document.getElementById("porcen").value=por;
            if(por>=70){
               document.getElementById("imga").src="imgenes/mover.jpg";
            }else{
                document.getElementById("imga").src="imgenes/manzanas.jpg";
            }
            

        });

        function suma(v){
            total = parseInt(pa.value) + v;
            document.getElementById("pa").value = total;
        }
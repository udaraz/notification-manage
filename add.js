var count=1;
            /*Move here when Add button click*/
            $("#add").click(function (){
                 
                /*click save button*/
                 document.getElementById('save').onclick = function (){
                
                 var check=$("#checkbox").is(":checked")?"active":"Inactive";
                 /*Create new tr*/
                 var tr=$(document.createElement('tr'))
                         .attr("id",'row'+count);
                 
                 /*Create td element inside created tr*/
                 tr.after().html(
                            '<td id="td'+count+'">'+ $("#comment").val()+'</td>'+  //set value of note
                            '<td id="date'+count+'">'+$("#dateVal").val()+'</td>'+ //set value of date
                            '<td id="st'+count+'">'+check+'</td>'+                 //set value of status
                            '<td><button class="btn btn-primary selector" data-toggle="modal" data-target="#myModal" id="show"><span class="fa fa-pencil"></span></button></td>'  //set edit button
                         );
                 tr.appendTo("#reminder"); //append created html to table
                  
                  $("textarea#comment").val(''); //set textarea value empty 
                  $("#dateVal").val(''); //set date value empty
                 count++;
                
                 
             }/*End of save button*/
             
             /*click exit button*/
             document.getElementById('exit').onclick=function (){ 
                 
                 $("textarea#comment").val(''); //set textarea value empty 
                 $("#dateVal").val(''); //set date value empty
             }/*End of exit button*/
            });
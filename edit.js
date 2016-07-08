/*Move here when Edit button click*/
            $(document).on("click","#show",function (){
                
                 id=parseInt($(this).closest('tr').attr('id').replace ( /[^\d.]/g, '' )); //get clicked row id and it's numeric value
               
                /*Get clicked row values*/
                 $("tr#row"+id).each(function (){
                    var status=$(this).find("#st"+id).text(); //get status
                    
                    /*Set status in popup*/
                    if(status==="active"){
                        $("#checkbox").bootstrapToggle('on');
                    }else{
                        $("#checkbox").bootstrapToggle('off');
                    }   
                    /*End setting status*/
                    
                    var note=$(this).find("#td"+id).text(); //get valule of note from table
                    $("textarea#comment").val(note); //set value of note to textarea in popup
                    
                    var date=$(this).find("#date"+id).text(); //get value of date from table
                    $("#dateVal").val(date); //set value of date to popup 
                });
                
                /*Click save button*/
                document.getElementById('save').onclick = function (){
                    var check=$("#checkbox").is(":checked")?"active":"inactive"; //get checkbox checked or unchecked
                    $("td#st"+id).html(check); //set checkbox value to table cell
                    
                    var cmt=$("#comment").val(); //get textarea value
                    $("td#td"+id).html(cmt); //set textarea value to table cell
                    
                    var date=$("#dateVal").val();//get date value
                    $("td#date"+id).html(date); //set date value to table cell
                    
                    $("textarea#comment").val(''); //set textarea value empty
                    $("#dateVal").val(''); //set date value empty
                };
                /*End of save button*/
                
                /*Click exit button*/
                document.getElementById('exit').onclick=function (){
                    $("textarea#comment").val(''); //set textarea value empty
                    $("#dateVal").val(''); //set date value empty
                }
                /*End of exit button*/
            });
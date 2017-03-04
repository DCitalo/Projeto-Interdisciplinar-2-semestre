
        $(document).ready(function(){
		$i = "n";
            $(".tudo").hide();
            $(".principal").click(function(){
				if ($i == "n") {
                $(".tudo").slideUp("slow");
                $(this).next(".tudo").slideDown("slow");
				$i = "s";
				}else {
					$(".tudo").slideUp("fast");
					$i = "n";
				}
            });
		
        })
   
    
	
	$c = "n";
        $(document).ready(function(){
            $(".menu").hide();
            $(".conteudo").click(function(){
				if ($c == "n") {
                $(".menu").slideUp("slow");
                $(this).next(".menu").slideDown("slow");
				$c = "s";
				}else {
					$(".menu").slideUp("fast");
					$c = "n";
				}
							
            });
		
        })
  
        $f = "n";
        $(document).ready(function(){
            $(".sub-menu").hide();
            $(".itemmenu").click(function(){
                if ($f == "n") {
                $(".sub-menu").slideUp("slow");
                $(this).next(".sub-menu").slideDown("slow");
				$f = "s";
				}else {
					$(".sub-menu").slideUp("fast");
					$f = "n";
				}
            });
			
			
        })
    // JavaScript Document
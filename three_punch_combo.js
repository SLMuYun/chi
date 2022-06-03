        $i = 0;
        $('#start').click(function(){
            $i++;
            if($i >=10 ){
                $('#start').hide();
                $('#stop').show();
            }
        })
        $('#stop').click(function(){
            alert('铁子，莫点了，就这么多了，实在不行咱吃别的吧QAQ')
            $(this).hide();
        })
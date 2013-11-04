define(
    ["moment"],
    function( moment ){
        try{
            delete window.moment;
        }
        catch( exception ){ /* IE7/8 throws an unspecced exception when delete-ing from window. */ }

        return moment;
    }
);

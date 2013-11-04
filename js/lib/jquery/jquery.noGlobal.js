define(
    ["jquery"],
    function( $ ){
        var local$ = $.noConflict( true );

        window.$ = undefined;
        window.jQuery = undefined;

        try{
            delete window.$;
            delete window.jQuery;
        }
        catch( e ){ /* IE7/8 throw unspecced errors when deleting from window. */ }

        return local$;
    }
);

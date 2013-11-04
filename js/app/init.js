define(
    ["ui", "storage"],
    function( Ui, Storage ){
        var Init = {},
            toogather = new Storage( "Toogather" );

        Init.startApp = function(){
            Ui.fillPreData();
            Ui.bindEvents();
        };

        return Init;
    }
);

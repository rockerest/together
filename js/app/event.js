define(
    ["jquery", "firebase"],
    function( $, Firebase ){
        var Event = {},
            msgList = new Firebase( "https://rockerest.firebaseio.com/messages" );

        Event.Ui = {};

        Event.Ui.bindToClicks = function(){
            $( "button" ).on( "click", function(){
                msgList.push( [$( "input#name" ).val(), $( "input#message" ).val()] );
                $( "input#message" ).val( "" ).focus();
            });
        };

        Event.Ui.bindToKeys = function(){
            $( "input#message" ).on( "keyup", function( e ){
                var code = e.keyCode || e.which;

                if( code === 13 ){
                    msgList.push( [$( "input#name" ).val(), $( "input#message" ).val()] );
                    $( "input#message" ).val( "" ).focus();
                }
            })
        };

        Event.Ui.watchForMessages = function( dataAction ){
            msgList.on( "child_added", dataAction );
        };

        return Event;
    }
);

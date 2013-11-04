define(
    ["jquery", "underscore", "event", "transfer"],
    function( $, _, Event, Transfer ){
        var Ui = {},
            self = this;

        Ui.bindEvents = function(){
            $(function(){
                Event.Ui.bindToClicks();
                Event.Ui.bindToKeys();
                Event.Ui.watchForMessages( function( newMsg ){ Ui.addMessage.call( self, newMsg ) } );
            });
        };

        Ui.fillPreData = function(){
            var chat = "",
                lines = [];
            $.when( Transfer.remoteLoad() ).done( function( data, s, x ){
                _( data.messages ).each( function( msg ){
                    lines.push( chat + msg[0] + ": " + msg[1] );
                });

                $( "textarea" ).val( lines.join( "\n" ) );
            });
        };

        Ui.addMessage = function( message ){
            var view = $( "textarea" );
            view
                .val(
                    view.val() + "\n" + message.val()[0] + ": " + message.val()[1]
                );

            view[0].scrollTop = view[0].scrollHeight;
        };

        return Ui;
    }
)

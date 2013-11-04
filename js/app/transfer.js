define(
    ["jquery", "firebase"],
    function( $, Firebase ){
        var Transfer = {},
            remoteDb = new Firebase( "https://rockerest.firebaseio.com/" );

        Transfer.remoteSave = function( jsonData ){
            remoteDb.set( jsonData );
        };

        Transfer.remoteLoad = function(){
            var dfd = new $.Deferred();

            remoteDb.on( "value", function( snapshot ){
                dfd.resolve( snapshot.val() );
            });

            return dfd.promise();
        }

        return Transfer;
    }
);

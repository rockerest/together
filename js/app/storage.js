define(
    ["underscore", "transfer"],
    function( _, Transfer ){
        var Storage = function( appName ){
            this.appName = appName;

            window[ appName ] = window[ appName ] || {};

            var self = this,
                store = window[ appName ],
                app;

            //set up app storage
            store.__app__ = store.__app__ || {};
            app = store.__app__;

            return {
                "set": function( key, val ){
                    app[ key ] = val;
                    self.refresh( store );
                    Transfer.remoteSave( app );

                    console.info( app );

                    return app[ key ];
                },
                "get": function( key ){
                    return app[ key ];
                }
            };
        };

        Storage.prototype.refresh = function( dataStore ){
            window[ this.appName ] = dataStore;
        };

        return Storage;
    }
);

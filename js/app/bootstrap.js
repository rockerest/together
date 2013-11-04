requirejs.config({
    "urlArgs": "_=" + (new Date()).getTime(),
    "paths": {
        "lib":          "../lib",

        "text":         "../lib/require/text",
        "json":         "../lib/require/json",

        "jquery":       ["//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min", "../lib/jquery/jquery.min"],

        "underscore":   "../lib/underscore/underscore",
        "moment":       "../lib/moment/moment",
        "sammy":        "../lib/sammy/sammy",

        "firebase":     ["//cdn.firebase.com/v0/firebase", "../lib/firebase/firebase.min"]
    },
    "shim": {
        "underscore": {
            "exports": "_",
            "init": function(){
                var local_ = _.noConflict();
                window._ = undefined;

                // IE7/8 have a bug with delete
                try{
                    delete window._;
                }
                catch( exception ){ /* IE7/8 throws an unspecced exception when delete-ing from window. */ }

                return local_;
            }
        },
        "firebase": {
            "exports": "Firebase",
            "init": function(){
                var localFirebase = Firebase;

                window.Firebase = undefined;

                // IE7/8 have a bug with delete
                try{
                    delete window.Firebase;
                }
                catch( exception ){ /* IE7/8 throws an unspecced exception when delete-ing from window. */ }

                return localFirebase;
            }
        }
    },
    "map":{
        "*": {
            "jquery": "../lib/jquery/jquery.noGlobal",
            "moment": "../lib/moment/moment.noGlobal"
        },
        "../lib/jquery/jquery.noGlobal": {
            "jquery": "jquery"
        },
        "../lib/moment/moment.noGlobal": {
            "moment": "moment"
        },
        "_": "underscore"
    }
});

require(
    ["init"],
    function( Init ){
        "use strict";
        Init.startApp();
    }
);

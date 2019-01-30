var browserify = require("browserify");
var tsify = require("tsify");
//var jquery = require("jquery");

browserify()
    .add("./Scripts/ts/script.ts")
    .plugin("tsify", { noImplicitAny: true })
    .bundle()
    .pipe(process.stdout);
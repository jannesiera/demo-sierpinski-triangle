module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {
                            /*
                            plugins: [
                                "transform-es2015-classes",
                                ["transform-builtin-classes", {
                                    "globals": ["Array", "Error", "HTMLElement"]
                                }]
                            ],
                            */
                            presets: ["es2015"]
                        }]
                    ]
                },
                files: {
                    // if the source file has an extension of es6 then
                    // we change the name of the source file accordingly.
                    // The result file's extension is always .js
                    "./dist/bundle.js": ["./src/index.js"]
                }
            }
        },
        watch: {
            scripts: {
                files: ["./src/**/*.js"],
                tasks: ["browserify"]
            },
            templates: {
                files: ["./src/**/*.hb.html"],
                tasks: ["browserify"],
                options: {
                    spawn: false,
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-run');

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["browserify"]);
};
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
                files: ["./src/**/*.hbs"],
                tasks: ["live-handlebars", "browserify"],
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

    grunt.event.on('watch', function(action, filepath, target) {
        if(target === 'templates') { 
            var config = grunt.config("live-handlebars") || {};
            config.source = filepath;
            config.target = filepath.slice(0, -4) + '_render.js'; // Change extension from .hbs to .js
            grunt.config("live-handlebars", config);
        }
    });

    var compile = require('handlebars-live-templates-idom');
    grunt.registerTask('live-handlebars', 'Compile handlebars template to render function module.', function() {
        var config = grunt.config("live-handlebars");
        compile(config.source, config.target);
    });
};
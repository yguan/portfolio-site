/*jslint nomen: true*/
/*global $,define,require,d3,_ */

define(function (require, exports, module) {
    'use strict';

    var level = {
            expert: 'Expert',
            veryProficient: 'Very Proficient',
            proficient: 'Proficient',
            someExperience: 'Some Experience',
            noExperience: 'No Experience'
        },
        data = {
            ms: [
                { name: '.NET 4.5', years: [2013], duration: 0.9, level: level.proficient },
                { name: '.NET 4.0', years: [2010, 2011], duration: 1.5, level: level.proficient },
                { name: '.NET 3.5', years: [2010, 2011], duration: 0.6, level: level.proficient },
                { name: '.NET 3.0', years: [2008, 2009, 2010], duration: 1, level: level.proficient },
                { name: '.NET 2.0', years: [2006, 2007, 2008], duration: 2, level: level.proficient },
                { name: '.NET 1.1', years: [2004, 2005, 2006, 2007], duration: 3, level: level.proficient },
                { name: 'ASP.NET MVC', years: [2013], duration: 0.9, level: level.proficient },
                { name: 'ASP.NET', years: [2006, 2007, 2008, 2009, 2010, 2011], duration: 5, level: level.proficient },
                { name: 'ASP', years: [2006, 2010], duration: 1, level: level.someExperience },
                { name: 'NHibernate', years: [2010, 2011], duration: 0.5, level: level.someExperience },
                { name: 'WCF', years: [2010, 2011, 2012], duration: 1.5, level: level.someExperience },
                { name: 'ServiceStack', years: [2012, 2013], duration: 0.5, level: level.someExperience },
                { name: 'Telerik Reporting', years: [2011], duration: 0.2, level: level.someExperience },
                { name: 'ComponentArt (ASP.NET AJAX 2009)', years: [2009, 2011], duration: 1.5, level: level.someExperience },
                { name: 'Infragistics (Windows Forms 2008)', years: [2008], duration: 0.5, level: level.someExperience },
                { name: 'Microsoft SQL Server 2005', years: [2007, 2008, 2009, 2010, 2011, 2012, 2013], duration: 6, level: level.proficient },
                { name: 'Microsoft SQL Server 2000', years: [2006, 2007], duration: 0.5, level: level.proficient },
                { name: 'Microsoft Access 2003', years: [2004, 2006], duration: 0.5, level: level.someExperience }
            ],
            frontEnd: [
                { name: 'Ext JS 4.1 & 4.2', years: [2013], duration: 0.9, level: level.proficient },
                { name: 'Backbone.js', years: [2011, 2012, 2013], duration: 1.5, level: level.proficient },
                { name: 'JQuery', years: [2010, 2011, 2012, 2013], duration: 3.5, level: level.veryProficient },
                { name: 'Sass', years: [2012], duration: 0.3, level: level.proficient },
                { name: 'Angular JS', years: [2012, 2013], duration: 0.5, level: level.someExperience },
                { name: 'D3.js', years: [2012, 2013], duration: 0.5, level: level.someExperience }

            ],
            test: [
                { name: 'Jasmine', years: [2013], duration: 0.9, level: level.proficient },
                { name: 'Mocha', years: [2012], duration: 0.5, level: level.proficient },
                { name: 'Qunit', years: [2011, 2012, 2013], duration: 1.5, level: level.veryProficient },
                { name: 'sinon.js', years: [2012, 2013], duration: 0.5, level: level.proficient },
                { name: 'Rhino Mocks', years: [2011, 2012, 2013], duration: 2.5, level: level.proficient },
                { name: 'NUnit', years: [2008, 2009, 2010, 2011, 2012, 2013], duration: 5, level: level.veryProficient },
                { name: 'WebDriver', years: [2011, 2012], duration: 1, level: level.proficient },
                { name: 'Selenium', years: [2011], duration: 0.5, level: level.someExperience },
                { name: 'WatiN', years: [2008, 2009], duration: 0.5, level: level.someExperience }
            ],
            sourceControl: [
                { name: 'TFS', years: [2011, 2012, 2013], duration: 2.5, level: level.proficient },
                { name: 'Git', years: [2012, 2013], duration: 1, level: level.someExperience },
                { name: 'Subversion', years: [2010, 2011], duration: 1, level: level.someExperience },
                { name: 'Visual SourceSafe', years: [2009], duration: 0.5, level: level.someExperience },
                { name: 'TortoiseCVS', years: [2006, 2007, 2008, 2009], duration: 3, level: level.proficient }
            ],
            ci: [
                { name: 'Team City', years: [2011, 2012], duration: 1.5, level: level.someExperience },
                { name: 'CruiseControl.NET', years: [2009, 2010], duration: 0.2, level: level.someExperience }
            ],
            ide: [
                { name: 'Resharper (7, 6, 5, 4, 3)', years: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013], duration: 7.5, level: level.someExperience },
                { name: 'Visual Studio.NET 2012', years: [2012, 2013], duration: 1, level: level.proficient },
                { name: 'Visual Studio.NET 2010', years: [2010, 2011, 2012], duration: 2.5, level: level.proficient },
                { name: 'Visual Studio.NET 2008', years: [2009, 2010], duration: 1.5, level: level.proficient },
                { name: 'Visual Studio.NET 2005', years: [2007, 2008, 2009], duration: 2, level: level.proficient },
                { name: 'Visual Studio.NET 2003', years: [2004, 2005, 2006, 2007], duration: 3, level: level.proficient },
                { name: 'Webstorm', years: [2011, 2012, 2013], duration: 2.5, level: level.proficient }
            ]
        };

    function turnEachYearIntoField(data) {
        var frameworksCopy,
            newFrameworkEntry,
            years,
            duration;
        _.each(data, function (frameworks, key) {
            frameworksCopy = [];
            _.each(frameworks, function (framework) {
                years = framework.years;
                duration = framework.duration;
                delete framework['years'];
                delete framework['duration'];

                _.each(years, function (year) {
                    newFrameworkEntry = _.clone(framework);
                    newFrameworkEntry.year = year;
                    frameworksCopy.push(newFrameworkEntry);
                });
                newFrameworkEntry.duration = duration;
            });
            data[key] = frameworksCopy;

        });
    }

    turnEachYearIntoField(data);

    exports.getData = function () {
        return data;
    };
});


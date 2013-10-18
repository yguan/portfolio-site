define(function (require, exports, module) {
    'use strict';

    var data = {
        psychology: {
            name: 'Psychology',
            books: [
                {
                    thumbnail: 'predictably-irrational.jpg',
                    link: 'http://www.amazon.com/Predictably-Irrational-Revised-Expanded-Decisions/dp/0061353248/'
                },
                {
                    thumbnail: 'social-animal.jpg',
                    link: 'http://www.amazon.com/Social-Animal-Sources-Character-Achievement/dp/0812979370/'
                },
                {
                    thumbnail: 'power-of-habit.jpg',
                    link: 'http://www.amazon.com/Power-Habit-What-Life-Business/dp/1400069289/'
                },
                {
                    thumbnail: 'paradox-of-choice.jpg',
                    link: 'http://www.amazon.com/Paradox-Choice-Why-More-Less/dp/0060005696/'
                },
                {
                    thumbnail: 'thinking-fast-slow.jpg',
                    link: 'http://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555/'
                },
                {
                    thumbnail: 'normal-personality.jpg',
                    link: 'http://www.amazon.com/Normal-Personality-Thinking-about-People/dp/0521881064/'
                },
                {
                    thumbnail: 'antipatterns.jpg',
                    link: 'http://www.amazon.com/Antipatterns-Managing-Software-Organizations-Engineering/dp/1439861862/'
                }
            ]
        }
    };

    exports.getData = function () {
        return data;
    };
});
define(function (require, exports) {
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
        },
        visualDesign: {
            name: 'Visual Design',
            books: [
                {
                    thumbnail: 'design-with-the-mind-in-mind.jpg',
                    link: 'http://www.amazon.com/Designing-Mind-Simple-Understanding-Interface/dp/012375030X'
                },
                {
                    thumbnail: 'visual-thinking-for-design.jpg',
                    link: 'http://www.amazon.com/Visual-Thinking-Kaufmann-Interactive-Technologies/dp/0123708966'
                },
                {
                    thumbnail: 'seductive-interaction-design.jpg',
                    link: 'http://www.amazon.com/Seductive-Interaction-Design-Effective-Experiences/dp/0321725522'
                }
            ]
        },
        complexity: {
            name: 'Complexity Science',
            books: [
                {
                    thumbnail: 'complexity-a-guided-tour.jpg',
                    link: 'http://www.amazon.com/Complexity-Guided-Tour-Melanie-Mitchell/dp/0199798109'
                },
                {
                    thumbnail: 'complexity-organizations-and-change.jpg',
                    link: 'http://www.amazon.com/Complexity-Organizations-Change-Introduction-Management/dp/041539502X'
                }
            ]
        }
    };

    exports.getData = function () {
        return data;
    };
});
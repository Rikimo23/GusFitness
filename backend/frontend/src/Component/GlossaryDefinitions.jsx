const glossary = [
    {
        letter: 'A',
        definitions: [
            { term: 'Abs', definition: 'Short for abdominal muscles, located in the front of the body between the ribs and the pelvis.' },
            { term: 'Aerobic Exercise', definition: 'Exercise that relies on the presence of oxygen to produce energy, typically involving continuous, rhythmic activity like running or cycling.' },
            { term: 'Anaerobic Exercise', definition: 'Short, high-intensity exercise that doesn\'t rely on oxygen, such as weightlifting or sprinting.' }
        ]
    },
    {
        letter: 'B',
        definitions: [
            { term: 'Barbell', definition: 'A long bar with weights attached at each end, used for various strength training exercises.' },
            { term: 'Biceps', definition: 'The muscles located on the front of the upper arm, responsible for flexing the elbow.' },
            { term: 'BMI (Body Mass Index)', definition: 'A measure of body fat based on height and weight.' },
            { term: 'Body Composition', definition: 'The ratio of fat to lean mass in the body.' },
            { term: 'Bulking', definition: 'A phase of training where the goal is to gain muscle mass, often accompanied by an increase in body weight.' }
        ]
    },
    {
        letter: 'C',
        definitions: [
            { term: 'Cardio', definition: 'Short for cardiovascular exercise, any exercise that increases heart rate and improves the function of the heart and lungs.' },
            { term: 'Circuit Training', definition: 'A form of body conditioning that involves a series of exercises performed in rotation with minimal rest.' },
            { term: 'Compound Exercise', definition: 'A movement that engages two or more different joints and muscle groups, such as the squat or bench press.' }
        ]
    },
    {
        letter: 'D',
        definitions: [
            { term: 'Dead-lift', definition: 'A strength exercise where a loaded barbell or bar is lifted off the ground to the level of the hips, then lowered back to the ground.' },
            { term: 'DOMS (Delayed Onset Muscle Soreness)', definition: 'Muscle pain and stiffness that occurs hours to days after unaccustomed or strenuous exercise.' }
        ]
    },
    {
        letter: 'E',
        definitions: [
            { term: 'Endurance', definition: 'The ability to sustain prolonged physical or mental effort.' },
            { term: 'Eccentric Contraction', definition: 'Muscle lengthening under tension, usually when lowering a weight.' }
        ]
    },
    {
        letter: 'F',
        definitions: [
            { term: 'Free Weights', definition: 'Equipment like dumbbells and barbells that aren\'t attached to a machine.' },
            { term: 'Foam Rolling', definition: 'A self-myofascial release technique used to relieve muscle tightness, soreness, and inflammation.' }
        ]
    },
    {
        letter: 'G',
        definitions: [
            { term: 'Gains', definition: 'Slang for increases in muscle size or strength.' },
            { term: 'Glutes', definition: 'The muscles in the buttocks, primarily responsible for movement of the hip and thigh.' }
        ]
    },
    {
        letter: 'H',
        definitions: [
            { term: 'HIIT (High-Intensity Interval Training)', definition: 'A form of interval training that alternates short periods of intense exercise with less intense recovery periods.' },
            { term: 'Hypertrophy', definition: 'The enlargement of muscle cells, typically resulting in increased muscle mass.' }
        ]
    },
    {
        letter: 'I',
        definitions: [
            { term: 'Isolation Exercise', definition: 'A movement that targets a single muscle group or joint, like a bicep curl.' },
            { term: 'Intensity', definition: 'The level of effort required by a workout, often measured by heart rate or perceived exertion.' }
        ]
    },
    {
        letter: 'J',
        definitions: [
            { term: 'Joints', definition: 'The points where two or more bones meet, allowing for movement.' }
        ]
    },
    {
        letter: 'K',
        definitions: [
            { term: 'Kettle bell', definition: 'A cast iron or steel weight resembling a cannonball with a handle, used for various exercises to improve strength and conditioning.' }
        ]
    },
    {
        letter: 'L',
        definitions: [
            { term: 'Lats (Latissimus Dorsi)', definition: 'The large muscles of the back that help with shoulder and arm movements.' },
            { term: 'Leg Day', definition: 'A workout day focused on exercises targeting the legs and lower body.' },
            { term: 'Lifting', definition: 'The act of raising or moving weights as part of strength training.' }
        ]
    },
    {
        letter: 'M',
        definitions: [
            { term: 'Macros (Macronutrients)', definition: 'The three main nutrients that make up the majority of food: carbohydrates, proteins, and fats.' },
            { term: 'Metabolism', definition: 'The chemical processes that occur within a living organism in order to maintain life, including converting food into energy.' },
            { term: 'Muscle Memory', definition: 'The phenomenon of the body quickly regaining strength and skill after a period of inactivity due to previous training.' }
        ]
    },
    {
        letter: 'N',
        definitions: [
            { term: 'Neutral Grip', definition: 'A hand position used during exercises where the palms face each other.' },
            { term: 'Nutrition', definition: 'The process of providing or obtaining the food necessary for health and growth, essential for optimizing performance and recovery.' }
        ]
    },
    {
        letter: 'O',
        definitions: [
            { term: 'Overtraining', definition: 'A condition where the volume and intensity of exercise exceed the body’s ability to recover, leading to decreased performance and potential injury.' }
        ]
    },
    {
        letter: 'P',
        definitions: [
            { term: 'Plateau', definition: 'A period where progress, such as strength or weight loss, stalls despite continued effort.' },
            { term: 'PR (Personal Record)', definition: 'The best performance in a particular exercise, such as the heaviest weight lifted.' },
            { term: 'Progressive Overload', definition: 'The gradual increase of stress placed on the body during training to stimulate muscle growth and strength gains.' }
        ]
    },
    {
        letter: 'Q',
        definitions: [
            { term: 'Quads (Quadriceps)', definition: 'The large muscles on the front of the thigh, responsible for extending the knee.' }
        ]
    },
    {
        letter: 'R',
        definitions: [
            { term: 'Reps (Repetitions)', definition: 'The number of times an exercise is performed in one set.' },
            { term: 'Ripped', definition: 'Slang for having well-defined muscles with low body fat.' },
            { term: 'ROM (Range of Motion)', definition: 'The full movement potential of a joint, usually its range of flexion and extension.' }
        ]
    },
    {
        letter: 'S',
        definitions: [
            { term: 'Sets', definition: 'A group of consecutive repetitions of an exercise.' },
            { term: 'Spotter', definition: 'A person who assists with an exercise, typically during weightlifting, to ensure safety and proper form.' },
            { term: 'Supersets', definition: 'Performing two exercises back-to-back with no rest in between.' },
            { term: 'Swole', definition: 'Slang for being muscular or having well-developed muscles.' }
        ]
    },
    {
        letter: 'T',
        definitions: [
            { term: 'TUT (Time Under Tension)', definition: 'The total time a muscle is under strain during a set.' },
            { term: 'Training Split', definition: 'A workout plan that divides the body into different parts to train on different days.' }
        ]
    },
    {
        letter: 'U',
        definitions: [
            { term: 'Upper Body', definition: 'Refers to the muscles and structures of the torso and arms.' }
        ]
    },
    {
        letter: 'V',
        definitions: [
            { term: 'Vascularity', definition: 'The visibility of veins in the muscles, often a sign of low body fat and muscle definition.' }
        ]
    },
    {
        letter: 'W',
        definitions: [
            { term: 'Warm-Up', definition: 'Light exercises or stretching performed before a workout to prepare the body for more intense activity.' },
            { term: 'Weights', definition: 'Refers to any type of resistance used in strength training, including dumbbells, barbells, and machines.' }
        ]
    },
    {
        letter: 'X',
        definitions: [
            { term: 'X-Fit (CrossFit)', definition: 'A high-intensity fitness program incorporating elements from several sports and types of exercise.' }
        ]
    },
    {
        letter: 'Y',
        definitions: [
            { term: 'Yoke', definition: 'The area around the shoulders, traps, and upper back, often developed through heavy lifting.' }
        ]
    },
    {
        letter: 'Z',
        definitions: [
            { term: 'Zone Training', definition: 'A method of targeting specific heart rate zones during cardio workouts to optimize training effects.' }
        ]
    }
];

export {glossary}

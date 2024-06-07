// Instructions for fixing SpeakHello.js and SpeakGoodBye.js are provided here
// Follow the steps in the comments to complete the assignment
// Once fixed, the code in this file will loop over an array of names and print out either a hello or goodbye to that name to the browser console

// Starter code for the assignment
// Fix the code in SpeakHello.js and SpeakGoodBye.js as instructed
// Then, complete the code in this file to achieve the desired output

// List of names
var names = ["John", "Jane", "Jake", "Jill", "James", "Jennifer", "Jack"];

// Loop through the names array
for (var i = 0; i < names.length; i++) {
    var name = names[i];
    // Check if the name starts with letter J or j
    if (name.charAt(0).toLowerCase() === 'j') {
        // If the name starts with J or j, print Goodbye JSomeName to the console
        byeSpeaker.speak(name);
    } else {
        // If the name starts with any other letter, print Hello SomeName to the console
        helloSpeaker.speak(name);
    }
}

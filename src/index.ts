import {NodeHotKey} from 'nodehotkey';
import {Macros} from './SampleConfig';

let nhk = new NodeHotKey(Macros);

nhk.startListening();

nhk.on(nhk.eventTypes.keyReleased, (eventData: any) => {
    console.log('KeyReleased ', eventData.keyCode);
});

nhk.on(nhk.eventTypes.keyPressed, (eventData: any) => {
    console.log('KeyPressed ', eventData.keyCode);
});

nhk.on(nhk.eventTypes.mouseKeyReleased, (eventData: any) => {
    console.log('mouseKeyReleased ', eventData.keyCode);
});

nhk.on(nhk.eventTypes.mouseKeyPressed, (eventData: any) => {
    console.log('mouseKeyPressed ', eventData.keyCode);
});

nhk.on(nhk.eventTypes.macroTriggered, (eventData: any) => {
    console.log('macroTriggered ', eventData.macroName);
});

nhk.on(nhk.eventTypes.hotstringTriggered, (eventData: any) => {
    console.log('hotstringTriggered ', eventData.macroName);
});

// nhk.stopListening(); // terminates the program
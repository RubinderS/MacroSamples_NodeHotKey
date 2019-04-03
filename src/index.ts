import { NodeHotKey } from 'nodehotkey';
import { Macros } from './SampleConfig';

let nhk = new NodeHotKey(Macros);

nhk.startListening();

// nhk.stopListening(); // terminates the program
import { MacroType } from 'nodehotkey';
import { KEYCODES as kc } from 'nodehotkey';
import { typeCurrentDate } from './functions';

export let Macros: MacroType = {

	// Macro 1: press CTRL+E to trigger
	'Name of the Macro': {
		hotkeys: [kc._CONTROL, kc._E],
		steps: [
			{ type: 'This Macro can be triggered by pressing CTRL+E\n' },
			{ type: "Wait for 3 secs then press ','  " },
			{ wait: 3000 },
			{ click: kc._COMMA }
		]
	},

	// Macro 2:  type 'as/' in notepad or any other text editor to trigger
	'Use HotStrings': {
		hotstring: 'as/',
		steps: [{ type: "'as/' gets replaced by this line." }]
	},

	// Macro 3: press CTRL+SHIFT+A or type 'ab' to trigger
	'Macro3': {
		hotkeys: [kc._CONTROL, kc._SHIFT, kc._A],
		hotstring: 'ab',
		steps: [
			{ type: `This Macro is triggred by either typing 'ab' or holding CTRL+SHIFT+A. The next step types '$' symbol on screen 2 times ` },
			{ click: { key: kc._4, modifiers: kc._SHIFT, times: 2 } }
		]
	},

	// Macro 4: type 'long' in notepad or any other text editor to trigger
	// we use 'paste' instead of 'type' for longer text
	'Long Text': {
		hotstring: 'long',
		steps: [{ paste: `"The quick brown fox jumps over the lazy dog" is an English-language pangram—a sentence that contains all of the letters of the alphabet. It is commonly used for touch-typing practice, testing typewriters and computer keyboards, displaying examples of fonts, and other applications involving text where the use of all letters in the alphabet is desired. Owing to its brevity and coherence, it has become widely known.` }]
	},

	// Macro 5: type current date 
	'Custom Function': {
		hotkeys: [kc._F, kc._ALT],
		steps: [
			{ func: typeCurrentDate }
		]
	},

	//Macro 6: this Macro demonstrates all the different click step configurations possible
	'Click step configurations': {
		hotkeys: [kc._C, kc._ALT],
		steps: [
			{ click: kc._TAB }, // click one key
			{ click: [kc._A, kc._B, kc._C] }, // click all keys one by one
			{ click: { key: kc._TAB, times: 5 } }, // click TAB 5 times
			{ click: { key: kc._F, modifiers: [kc._SHIFT, kc._CONTROL, kc._ALT] } } // click CTRL+SHIFT+ALT+F
		]
	}
}
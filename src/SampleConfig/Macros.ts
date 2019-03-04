import { Macro } from 'nodehotkey';
import { KEYCODES as KC } from 'nodehotkey';

export let Macros: Macro = {
	// Macro 1 - press CTRL+E to trigger
	'Name of the Macro': {
		keys: [KC._CONTROL, KC._E],
		steps: [
			{ type: 'This Macro can be triggered by pressing CTRL+E\n' },
			{ type: "Wait for 3 secs then press ','  " },
			{ wait: 2000 },
			{ pressKey: KC._COMMA },
			{ releaseKey: KC._COMMA }
		]
	},
	// Macro 2 - type 'as/' in notepad or any other text editor to trigger
	'Use HotStrings': {
		Hotstring: 'as/',
		steps: [{ type: "'as/' gets replaced by this line." }]
	},
	// Macro 3 - press CTRL+SHIFT+A or type 'ab' to trigger
	'Macro3': {
		keys: [KC._CONTROL, KC._SHIFT, KC._A],
		Hotstring: 'ab',
		steps: [
			{ type: `This Macro is triggred by either typing 'ab' or holding CTRL+SHIFT+A. The next step types '$' symbol on screen 2 times ` },
			{ click: { key: KC._4, modifier: KC._SHIFT, times: 2 } }
		]
	},
	// Macro 4: - type 'long' in notepad or any other text editor to trigger
	// we use 'paste' instead of 'type' for longer text
	'Long Text': {
		Hotstring: 'long',
		steps: [{ paste: `"The quick brown fox jumps over the lazy dog" is an English-language pangram—a sentence that contains all of the letters of the alphabet. It is commonly used for touch-typing practice, testing typewriters and computer keyboards, displaying examples of fonts, and other applications involving text where the use of all letters in the alphabet is desired. Owing to its brevity and coherence, it has become widely known.` }]
	}
}
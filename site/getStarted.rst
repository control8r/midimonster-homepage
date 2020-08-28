.. rst-class:: centered
Getting started
###############

So you've just downloaded the package for your operating system or
maybe even built the sources yourself! Let's take a look at the next
steps and we'll have you up and running in no time!

Please select your operating system for some basic information on how
to store and use MIDIMonster configuration files.

.. raw:: html

	<input type="radio" id="tab1" name="tabGroup1" class="tab" checked>
	<label for="tab1">Linux</label>
	<input type="radio" id="tab2" name="tabGroup1" class="tab">
	<label for="tab2">Windows</label>
	<input type="radio" id="tab3" name="tabGroup1" class="tab">
	<label for="tab3">OSX</label>

	.. container:: tab-content

		Linux
		#######

		TBD

	.. container:: tab-content

		Windows
		#######

		As a Windows user, you may not be familiar with the practice of writing
		your own configuration files for programs. This mode of working with software
		is quite popular in the Linux world, where MIDIMonster has its roots.

		To create a new configuration (say, for a specific project), you can just
		create an empty text file. Usually, such configuration files get the `.cfg` suffix,
		but the MIDIMonster does not really care whether you leave it as `.txt`.

		Open this file with a plain text editor such as Notepad, or something more
		powerful like Notpad++ to create your first configuration.

		To run a specific conguration, just drag-and-drop the file you created onto
		`midimonster.exe`. This start the MIDIMonster and will pop up a Window giving
		you information on the current status.

	.. container:: tab-content

		OSX
		###

		TBD

Writing your first configuration
################################

When writing a MIDIMonster configuration, it's important to have an idea of what
your inputs and outputs are. Those terms are seen from the perspective of the MIDIMonster,
so *input* means "Events flowing into the MIDIMonster" and output means "Control data
coming out of the MIDIMonster".

For example, you may know that you get input from your lighting desk via the sACN protocol,
and you want to control some ArtNet fixtures using that data. At the same time, you want to
use your MIDI controller to to control some of those ArtNet fixtures, too.

So this means that you'll need both ArtNet and MIDI input, as well as sACN output.

The MIDIMonster organizes its protocol support into "backends", each of which is a module
(often also called a plugin) that contains the code to support a specific protocol.
Each backend also includes a documentation file, that gives lots of information on
particlular features of the backend, how it can be configured, what can and can't be done, etc.

TBD


Getting started
****************

So you've just downloaded the package for your operating system or
maybe even built the sources yourself! Let's take a look at the next
steps and we'll have you up and running in no time!

Please select your operating system for a quick start guide and basic
information on how to store and use MIDIMonster configuration files.

.. container:: section tab-wrap

	.. raw:: html

		<input type="radio" id="tab1" name="tabGroup1" class="tab" checked>
		<label for="tab1">Linux</label>
		<input type="radio" id="tab2" name="tabGroup1" class="tab">
		<label for="tab2">Windows</label>
		<input type="radio" id="tab3" name="tabGroup1" class="tab">
		<label for="tab3">OSX</label>

	.. container:: tab-content

		Linux
		#####

		If you're an adept Linux user, the MIDIMonster's philosophy of storing configuration
		in plain text files will immediately seem familiar to you. If you're not,
		it's very easy to get started: just create a new empty text file and start editing
		it using your favourite text editor, such as `vim`, `kwrite` or `gedit`!

		You can also take a look at the provided examples, and extend and modify those to
		fit your particular setup.
		We recommend using the `.cfg` suffix for MIDIMonster configuration files, but it's
		up to your personal preference.

		To run the MIDIMonster and load a specific configuration, start `midimonster <path/to/configfile.cfg>`
		in a console. The output will give you feedback on what the MIDIMonster is doing
		and how it sees your configuration.

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
		powerful like Notepad++ to create your first configuration.

		To run a specific conguration, just drag-and-drop the file you created onto
		`midimonster.exe`. This will start the MIDIMonster and will pop up a Window giving
		you information on the current status.

	.. container:: tab-content

		OSX
		###

		To use (or build) the MIDIMonster on OSX, you will need to install a few additional
		packages using the `brew` package manager.

		For a normal build containing most backends (except for some that require rather
		large dependencies installed), that would be:

		- lua
		- openssl
		- jack
		- python

		Using the MIDIMonster on OSX is very similar to using it on Linux: Just create
		a new empty text file, and edit it with your favourite editor to start your
		own configuration. Alternatively, edit some of our example configurations to your
		liking.

		To run the MIDIMonster and load a specific configuration, start `midimonster <path/to/configfile.cfg>`
		in a console. The output will give you feedback on what the MIDIMonster is doing
		and how it sees your configuration.

.. rst-class:: free-text
If you're still not entirely sure on how to start using the MIDIMonster, read on for some more
in-depth explanations!

Navigation
***********

.. container:: navbar

	`Gathering information <#gathering-information>`__
	`Some background <#some-background>`__
	`Creating a new configuration <#creating-a-new-configuration>`__
	`Adding backends to your configuration <#adding-backends-to-your-configuration>`__
	`Creating instances <#creating-instances>`__
	`Mapping channels <#mapping-channels>`__
	`Mapping many channels <#mapping-many-channels>`__
	`Adding comments <#adding-comments>`__


.. rst-class:: mobile-collapsable
Gathering information
*********************

When writing a MIDIMonster configuration, it's important to have an idea of what
your inputs and outputs are. Those terms are seen from the perspective of the MIDIMonster,
so *input* means "Events flowing into the MIDIMonster" and output means "Control data
coming out of the MIDIMonster".

For example, you might know that your lighting desk outputs data via the sACN protocol,
and you want to control some ArtNet fixtures using that data. At the same time, you want to
use your MIDI controller to to control some of those ArtNet fixtures, too.

In that scenario, you would need both sACN and MIDI input to the MIDIMonster (both from
the desk and your controller), as well as ArtNet output from the MIDIMonster to the fixtures.

.. rst-class:: mobile-collapsable
Some background
***************

The MIDIMonster organizes its protocol support into "backends", each of which is a module
(often also called a plugin) that contains the code to support a specific protocol.
Each backend also includes a documentation file, that gives lots of information on
particular features of the backend, how it can be configured, what can and can't be done, etc.

Every backend will provide multiple "instances", which are the actual adapters to a specific
component in your show. For example, the sACN and ArtNet backends are inherently segmented
into "universes" of 512 channels (from the underlying DMX protocol), so every universe is
one instance. For the MIDI backend, the logical grouping is one MIDI port, so every instance
provides one (virtual) MIDI port.

Every instance will provide a set of channels, which can be set to an absolute value.

.. rst-class:: mobile-collapsable
Creating a new configuration
****************************

The MIDIMonster organizes it's configuration in simple plain text files. To create a new one,
for example for a new project, just create a new empty file and open it in your favourite
editor (such as Notepad++, vim or VisualStudio Code). You can also copy an existing
configuration and edit it to match your intended setup, which can be easier for experimenting.

A configuration will consist of three basic section types, each of which are started by
a header line in square brackets.

  - Backend configuration sections, started by `[backend <backend-name>]`
  - Instance configuration sections, started by `[<backend-name> <instance-name>]`
  - Mapping sections, started by `[map]`

The next paragraphs will give some examples and go into detail on each of these sections.

.. rst-class:: mobile-collapsable
Adding backends to your configuration
**************************************

When starting up, the MIDIMonster will load all backends it can find, so they can be used
in your configuration. If you don't use it, a backend will not do much and thus will not take
any processing power.

If you decide to use it, most backends will require some amount of global configuration, which
will apply to all instances of that particular backend. For detailed information on what configuration
options may apply to a specific backend, check the backends documentation file.

To keep with the example, we will configure both the sACN and ArtNet backends to wait for input
on any IPv4 address configured on our computer::

	[backend artnet]
	bind = 0.0.0.0

	[backend sacn]
	bind = 0.0.0.0

You can leave out these sections for backends where you are content with the default values
for the global configuration as well as for backends that do not require any global configuration.

.. rst-class:: mobile-collapsable
Creating instances
******************

When we're happy with the global backend configuration, we can create any number of instances
from the backends we want to use. Instances are logical groupings of channels, the actual
meaning of which may vary between backends - again, it's a good idea to take a look at the
documentation for the specific backends you want to use.

To create an sACN input instance, we need to at least specify the universe we want to receive::

	[sacn in1]
	universe = 1

This will give us read (input to the MIDIMonster) access to the 512 DMX channels transferred via
the sACN protocol on universe 1.

To use the ArtNet protocol for output, we need to specify a universe number as well as a destination
to send the output to::

	[artnet out1]
	universe = 1
	destination = 255.255.255.255

This instance configuration gives us write (output from the MIDIMonster) access to the 512 DMX channels
transferred via ArtNet on universe 1 (sent via IPv4 broadcast to the entire local network).

.. rst-class:: mobile-collapsable
Mapping channels
****************

This section is where we set up where to send incoming events. Every channel the MIDIMonster knows
about can transfer events. Every time a value comes in on a channel of an instance, that's an event.
We can translate these events to any other protocol by just specifying the target instance and channel,
letting the MIDIMonster and its backends take care of the rest.

For example, the following mapping syntax will translate events coming in on channel 1 of the sACN
instance from the previous example to be output on the ArtNet instance::

	[map]
	in1.1 > out1.1

Backends may have different ways of specifying channel names depending on the protocol they support.
As always, this is written down in the backend-specific documentation files. For the sACN and ArtNet
backends, the channel specification is simply the channel's index between 1 and 512.

The *greater-than* sign `>` visually points right, which indicates to the MIDIMonster that events
coming in on the left side should be translated to the channel on the right side.

Conversely, the *less-than* sign `<` points to the left, doing the exact opposite. Mappings accumulate,
so specifying both types of mapping one after another with the same channels sets up a two-way mapping.
To make this shorter, we can also use the combination of both operators: `<>`.

This means that the following two configurations are functionally equivalent::

	[map]
	in1.1 > out1.1
	in1.1 < out1.1

	[map]
	in1.1 <> out1.1

.. rst-class:: mobile-collapsable
Mapping many channels
*********************

If you're about to map an entire universe worth of channels, specifying 512 lines of configuration seems
like an arduous task. So we came up with a way to make that kind of thing a bit more convenient.

There are two ways to specify multiple channels at once in one line. One is to specify a numeric range
of channels, which are then counted up or down::

	in1.{1..512} > out1.{512..1}

The other is to specify a list of values that are inserted one after the other for each channel the
line evaluates to::

	in1.{1..5} > out1.{5,4,3,2,1}

To use such a multi-mapping, both sides of the mapping must evaluate to the same number of channels,
or one side must be exactly one channel.

.. rst-class:: mobile-collapsable
Adding comments
***************

After some time and as your configurations get bigger, you will need to document your configurations so
you can keep track of which mappings do what, or why you added a specific configuration option.

To do that, simply start a line with a semicolon `;`. Doing so will make the MIDIMonster ignore that
particular line when reading the configuration.

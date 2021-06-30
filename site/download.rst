Download
*********

.. rst-class:: centered
Get the latest binary release builds here or try our `Linux installer <#using-the-linux-installer>`_.
Of course, you can always `build the source yourself <https://github.com/cbdevnet/midimonster#building-from-source>`_.

MIDIMonster v0.6
################

.. container:: release
	Release info

	- **core:** Configuration parser now supports list-type multichannel specification
	- **wininput:** (New backend) Supports using mouse, keyboard and joysticks as inputs on Windows
	- **visca:** (New backend) Provides control of motorized PTZ cameras over the network
	- **mqtt:** (New backend) Provides input from and output to an MQTT broker
	- **lua/python:**: New channel introspection feature
	- **midi backends:** Support for NRPN/RPN extended controls

	.. rst-class:: inline-link
	`Read more on the GitHub release page <https://github.com/cbdevnet/midimonster/releases/tag/v0.6>`_

	.. rst-class:: download-boxes no-dots
	- Debian Linux (amd64) *.deb* `Download <https://github.com/cbdevnet/midimonster/releases/download/v0.6/midimonster_0.6-1_amd64.deb>`_
	- Linux (x64 ELF) *.tgz* `Download <https://github.com/cbdevnet/midimonster/releases/download/v0.6/midimonster-v0.6-linux.tgz>`_
	- OS X (Mach-O) *.tgz* `Download <https://github.com/cbdevnet/midimonster/releases/download/v0.6/midimonster-v0.6-osx.tgz>`_
	- Windows (x64 PE) *.zip* `Download <https://github.com/cbdevnet/midimonster/releases/download/v0.6/midimonster-v0.6-windows.zip>`_
	- Source code *.tar.gz* `Download <https://github.com/cbdevnet/midimonster/archive/v0.6.tar.gz>`_

	.. container:: buttons

		.. rst-class:: button secondary
		`Older releases <https://github.com/cbdevnet/midimonster/releases>`_

		.. rst-class:: button primary
		`Next steps <#id6>`_

.. rst-class:: algn-left
Using the Linux installer
#########################

If you're running a Linux system and want to either build the latest version, or want to run the MIDIMonster on
an architecture that is not available for the binary downloads, the following commands download the installer,
make it executable and finally, start it::

	wget https://raw.githubusercontent.com/cbdevnet/midimonster/master/installer.sh ./
	chmod +x ./installer.sh
	./installer.sh

The installer can also be used for automating installations or upgrades by specifying additional command line arguments.
To see a list of valid arguments, run the installer with the --help argument.

The installer script can also update MIDIMonster to the latest version automatically, using a configuration file generated
during the installation. To do so, run ::

	#> midimonster-updater

as root on your system after using the installer.

.. rst-class:: centered
Next steps
##########

We've collected some resources to help you get your feet on the ground with the MIDIMonster

.. container:: two-by-two-matrix line-on-top

	Learn how to start the MIDIMonster and write your first configuration

	.. rst-class:: button primary
	`Get started </getStarted.html>`_

	See what other people have built and profit from their experience

	.. rst-class:: button secondary
	`Knowledge base <https://kb.midimonster.net/index.html>`_

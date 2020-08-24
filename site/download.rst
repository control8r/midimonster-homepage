********
Download
********

.. rst-class:: centered
Get the latest binary release builds here or try our `Linux installer <#using-the-linux-installer>`_.
Of course, you can always `build the source yourself <#building>`_.

MIDIMonster v0.5
################

.. container:: release
	Release info

	- **RTP:** New RTP MIDI backend, which allows users to interact with a wide variety of devices communicating MIDI over the network.
	- **ALSA:** The ALSA MIDI backend has removed support for the deprecated early channel specification syntax.
	- **OSC:** The OSC backend has been extended to allow reception of OSC bundle data.
	- **maweb:** The maweb backend now supports specifying multiple fallback remote addresses and will periodically try to reconnect to any of them when a connection fails.
	- **Lua:** The Lua backend now supports routing all channel events to a single function using the default-handler functionality...

	.. rst-class:: inline-link
	`Read more on the GitHub release page <https://github.com/cbdevnet/midimonster/releases/tag/v0.5>`_

	.. rst-class:: download-boxes
	- Debian Linux (amd64) *.deb* `Download <https://github.com/cbdevnet/midimonster/releases/download/v0.5/midimonster_0.5-1_amd64.deb>`_
	- Linux (x64 ELF) *.tgz* `Download <https://github.com/cbdevnet/midimonster/releases/download/v0.5/midimonster-v0.5-linux.tgz>`_
	- OS X (Mach-O) *.tgz* `Download <https://github.com/cbdevnet/midimonster/releases/download/v0.5/midimonster-v0.5-osx.tgz>`_
	- Windows (x64 PE) *.zip* `Download <https://github.com/cbdevnet/midimonster/releases/download/v0.5/midimonster-v0.5-windows.zip>`_
	- Source code *.tar.gz* `Download <https://github.com/cbdevnet/midimonster/archive/v0.5.zip>`_

	.. container:: buttons

		.. rst-class:: button secondary
		`Older releases <https://github.com/cbdevnet/midimonster/releases>`_

		.. rst-class:: button primary
		`Next steps </getting-started>`_


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

.. container:: two-by-two-matrix

	
	Learn how to start the MIDIMonster and write your first configuration

	.. rst-class:: button primary
	`Next steps </getting-started>`_

	
	See what other people have built and profit from their experience

	.. rst-class:: button secondary
	`Knowledge base <https://kb.midimonster.net/index.html>`_

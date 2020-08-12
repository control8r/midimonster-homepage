Download
========

.. container:: flex flex-mobile-algn-vert flex-tablet-desktop-algn-vert section main-container

	.. rst-class:: no-margin
	Get the latest binary release builds here or try our `Linux installer <#using-the-linux-installer>`_.
	Of course, you can always `build the source yourself <#building>`_.

	.. raw:: html

		<h2>MIDIMonster v0.5</h2>

	.. container:: flex flex-mobile-algn-vert flex-tablet-desktop-algn-horiz line-on-the-top

		.. container:: flex flex-mobile-algn-vert flex-tablet-desktop-algn-vert w-1-2 no-margin listing

			Release info

			- **RTP:** New RTP MIDI backend, which allows users to interact with a wide variety of devices communicating MIDI over the network.
			- **ALSA:** The ALSA MIDI backend has removed support for the deprecated early channel specification syntax.
			- **OSC:** The OSC backend has been extended to allow reception of OSC bundle data.
			- **maweb:** The maweb backend now supports specifying multiple fallback remote addresses and will periodically try to reconnect to any of them when a connection fails.
			- **Lua:** The Lua backend now supports routing all channel events to a single function using the default-handler functionality...

			.. rst-class:: inline-link
			`Read more on the GitHub release page <https://github.com/cbdevnet/midimonster/releases/tag/v0.5>`_

		.. container:: flex flex-mobile-algn-vert flex-tablet-desktop-algn-horiz flex-wrapped sticky

			.. container:: download-box linux

				.. container:: flex flex-horizonthal

					.. rst-class:: download-os
					Debian Linux (amd64)

					.. rst-class:: extra
					.deb

				.. rst-class:: button button-secondary
				`download <https://github.com/cbdevnet/midimonster/releases/download/v0.5/midimonster_0.5-1_amd64.deb>`_

			.. container:: download-box

					.. container:: flex flex-horizonthal

						.. rst-class:: download-os
						Linux (x64 ELF)

						.. rst-class:: extra
						.tgz

					.. rst-class:: button button-secondary
					`download <https://github.com/cbdevnet/midimonster/releases/download/v0.5/midimonster-v0.5-linux.tgz>`_

			.. container:: download-box

				.. container:: flex flex-horizonthal

					.. rst-class:: download-os
					OS X (Mach-O)

					.. rst-class:: extra
					.tgz

				.. rst-class:: button button-secondary
				`download <https://github.com/cbdevnet/midimonster/releases/download/v0.5/midimonster-v0.5-osx.tgz>`_

			.. container:: download-box

				.. container:: flex flex-horizonthal

					.. rst-class:: download-os
					Windows (x64 PE)

					.. rst-class:: extra
					.zip

				.. rst-class:: button button-secondary
				`download <https://github.com/cbdevnet/midimonster/releases/download/v0.5/midimonster-v0.5-windows.zip>`_

			.. container:: download-box source-code

				.. container:: flex flex-horizonthal

					.. rst-class:: download-os
					Source code

					.. rst-class:: extra
					.tar.gz

				.. rst-class:: button button-secondary
				`download <https://github.com/cbdevnet/midimonster/archive/v0.5.zip>`_

	.. container:: on-the-bottom

			.. rst-class:: button info-button
			`Older releases <https://github.com/cbdevnet/midimonster/releases>`_

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

.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-vert bg-secondary centered section

	.. raw:: html

		<h2>Next steps</h2>

	We've collected some resources to help you get your feet on the ground with the MIDIMonster

	.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-horiz centered flex-with-line-between

		.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-vert

			Learn how to write your first configuration

			.. rst-class:: button button-primary
			`Get started <getStarted.html>`_



		.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-vert

			See what other people have built and profit from their experience

			.. rst-class:: button button-secondary
			`Knowledge base <https://kb.midimonster.net/index.html>`_

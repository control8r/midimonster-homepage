.. container:: bg-primary_color breathing-vertical-small

	.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-vert centered w-60-proz-centered breathing-vertical-small

		.. raw:: html

			<h1 id="#begin">Get started</h1>

		Here you can find the detailed instruction how to install MIDIMonster on your system

.. container:: tab-wrap w-90-proz-centered main-container mobile-hidden

	.. raw:: html

		<input type="radio" id="tab1" name="tabGroup1" class="tab" checked>
		<label for="tab1">Linux / OS X</label>
		<input type="radio" id="tab2" name="tabGroup1" class="tab">
		<label for="tab2">Windows</label>
		<input type="radio" id="tab3" name="tabGroup1" class="tab">
		<label for="tab3">Packaging</label>

	.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-vert tab-content single-content-block

		.. container:: w-90-proz-centered main-container

			.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-horiz

					.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-horiz nav nav-sidebar-left w-1-4 distance-1rem-top sticky

							`Using installer <#installer>`__
							`Building from source <#source>`__

					.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-vert content w-3-4 list-styling text-styling

							.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-vert

									.. raw:: html

											<h2 id="installer">Using installer</h2>

									The easiest way to install MIDIMonster and its dependencies on a Linux system is the installer script.

									The following commands download the installer, make it executable and finally, start it:

									.. code-block:: console

										wget https://raw.githubusercontent.com/cbdevnet/midimonster/master/installer.sh ./
										chmod +x ./installer.sh
										./installer.sh

									The installer can also be used for automating installations or upgrades by specifying additional command line arguments. To see a list of valid arguments, run the installer with the :code:`--help` argument.

									The installer script can also update MIDIMonster to the latest version automatically, using a configuration file generated during the installation. To do so, run :code:`midimonster-updater` as root on your system after using the installer.

									If you prefer to install a Debian package you can download the :code:`.deb` file from our Release page. To install the package, run the following command as the root user:

									.. code-block:: console
									
										dpkg -i <file>.deb

									`Back to begin <#begin>`__


							.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-vert breathing-vertical-top

									.. raw:: html

											<h2 id="source">Building from source</h2>

									To build the MIDIMonster directly from the sources, you'll need some libraries that provide support for the protocols to translate. When building from source, you can also choose to exclude backends (for example, if you don't need them or don't want to install their prerequisites).

									* libasound2-dev (for the ALSA MIDI backend)
									* libevdev-dev (for the evdev backend)
									* liblua5.3-dev (for the lua backend)
									* libola-dev (for the optional OLA backend)
									* libjack-jackd2-dev (for the JACK backend)
									* libssl-dev (for the MA Web Remote backend)
									* python3-dev (for the Python backend)
									* pkg-config (as some projects and systems like to spread their files around)
									* A C compiler
									* GNUmake

									For Linux and OSX, just running :code:`make` in the source directory should do the trick.

									Some backends have been marked as optional as they require rather large additional software to be installed, for example the :code:`ola` backend. To create a build including these, run :code:`make full`.

									To install a source build with :code:`make install`, please familiarize yourself with the build parameters as specified in the next section.

									Backends may also be built selectively by running :code:`make <backendfile>` in the :code:`backends/` directory, for example

									.. code-block:: console

										make jack.so

									`Back to begin <#begin>`__

	.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-horiz tab-content

		.. container:: w-90-proz-centered mobile-hidden main-container

			.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-horiz

					.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-horiz nav nav-sidebar-left w-1-4 distance-1rem-top sticky

							`Building from source <#source2>`__

					.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-vert content w-3-4 list-styling text-styling

							.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-vert breathing-vertical-top

									.. raw:: html

											<h2 id="source2">Building from source</h2>

									To build for Windows, you still need to compile on a Linux machine (virtual machines work well for this).
									
									In a fresh Debian installation, you will need to install the following packages (using :code:`apt-get` install as root):

									* build-essential
									* pkg-config
									* git
									* mingw-w64

									Clone the repository and run :code:`make windows` in the project directory. This will build :code:`midimonster.exe` as well as a set of backends as DLL files, which you can then copy to the Windows machine.

									Note that some backends have limitations when building on Windows (refer to the backend documentation for detailed information).

									`Back to begin <#begin>`__

		.. container:: w-90-proz-centered desktop-hidden

	.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-horiz tab-content

		.. container:: w-90-proz-centered mobile-hidden main-container

			.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-horiz

					.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-horiz nav nav-sidebar-left w-1-4 distance-1rem-top sticky

							`Building from source <#source>`__

					.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-vert content w-3-4 list-styling text-styling

							.. container:: flex-mobile-algn-vert flex-tablet-desktop-algn-vert breathing-vertical-top

									.. raw:: html

											<h2 id="source3">Building from source</h2>

									To build the MIDIMonster directly from the sources, you'll need some libraries that provide support for the protocols to translate. When building from source, you can also choose to exclude backends (for example, if you don't need them or don't want to install their prerequisites).

									* libasound2-dev (for the ALSA MIDI backend)
									* libevdev-dev (for the evdev backend)
									* liblua5.3-dev (for the lua backend)
									* libola-dev (for the optional OLA backend)
									* libjack-jackd2-dev (for the JACK backend)
									* libssl-dev (for the MA Web Remote backend)
									* python3-dev (for the Python backend)
									* pkg-config (as some projects and systems like to spread their files around)
									* A C compiler
									* GNUmake

									For Linux and OSX, just running :code:`make` in the source directory should do the trick.

									Some backends have been marked as optional as they require rather large additional software to be installed, for example the :code:`ola` backend. To create a build including these, run :code:`make full`.

									To install a source build with :code:`make install`, please familiarize yourself with the build parameters as specified in the next section.

									Backends may also be built selectively by running :code:`make <backendfile>` in the :code:`backends/` directory, for example

									.. code-block:: console

										make jack.so


									The build process accepts the following parameters, either from the environment or as arguments to the :code:`make` invocation:

									.. list-table:: 
										:widths: 20 20 35 25
										:header-rows: 1

										* - Target
											- Parameter
											- Default value
											- Description
										* - build targets
											- :code:`DEFAULT_CFG`
											- :code:`monster.cfg`
											- Default configuration file
										* - build targets
											- :code:`PLUGINS`
											- Linux/OS X: :code:`./backends/`, Windows: :code:`backends\`
											- Backend plugin library path
										* - :code:`install`
											- :code:`PREFIX`
											- :code:`/usr`
											- Install prefix for binaries
										* - :code:`install`
											- :code:`DESTDIR`
											- empty
											- Destination directory for packaging builds
										* - :code:`install`
											- :code:`DEFAULT_CFG`
											- empty
											- Install path for default configuration file
										* - :code:`install`
											- :code:`PLUGINS`
											- :code:`$(PREFIX)/lib/midimonster`
											- Install path for backend shared objects																						
										* - :code:`install`
											- :code:`EXAMPLES`
											- :code:`$(PREFIX)/share/midimonster`
											- Install path for example configurations 

									Note that the same variables may have different default values depending on the target. This implies that builds that are destined to be installed require those variables to be set to the same value for the build and :code:`install` targets.

									For system-wide install or packaging builds, the following steps are recommended:

									.. code-block:: console
										export PREFIX=/usr
										export PLUGINS=$PREFIX/lib/midimonster
										export DEFAULT_CFG=/etc/midimonster/midimonster.cfg
										make clean
										make full
										make install

									Depending on your configuration of :code:`DESTDIR`, the :code:`make install` step may require root privileges to install the binaries to the appropriate destinations.

									To create Debian packages, use the debianization and :code:`git-buildpackage` configuration on the :code:`debian/master` branch. Simply running :code:`gbp buildpackage` should build a package for the last tagged release.

									`Back to begin <#begin>`__


.. container:: w-90-proz-centered desktop-hidden

	.. container:: flex-mobile-algn-vert

		.. raw:: html

			<h2 id="installer">Linux / OS X</h2>

		.. container:: wrap-collabsible

				.. raw:: html

						<input id="linux-installer" class="toggle" type="checkbox">
						<label for="linux-installer" class="lbl-toggle">Using installer</label>

				.. container:: collapsible-content

					.. container:: content-inner

						The easiest way to install MIDIMonster and its dependencies on a Linux system is the installer script.

						The following commands download the installer, make it executable and finally, start it:

						.. code-block:: console

							wget https://raw.githubusercontent.com/cbdevnet/midimonster/master/installer.sh ./
							chmod +x ./installer.sh
							./installer.sh

						The installer can also be used for automating installations or upgrades by specifying additional command line arguments. To see a list of valid arguments, run the installer with the :code:`--help` argument.

						The installer script can also update MIDIMonster to the latest version automatically, using a configuration file generated during the installation. To do so, run :code:`midimonster-updater` as root on your system after using the installer.

						If you prefer to install a Debian package you can download the :code:`.deb` file from our Release page. To install the package, run the following command as the root user:

						.. code-block:: console
						
							dpkg -i <file>.deb

				.. raw:: html

						<input id="linux-source" class="toggle" type="checkbox">
						<label for="linux-source" class="lbl-toggle">Building from source</label>

				.. container:: collapsible-content

						.. container:: content-inner
									
									To build the MIDIMonster directly from the sources, you'll need some libraries that provide support for the protocols to translate. When building from source, you can also choose to exclude backends (for example, if you don't need them or don't want to install their prerequisites).

									* libasound2-dev (for the ALSA MIDI backend)
									* libevdev-dev (for the evdev backend)
									* liblua5.3-dev (for the lua backend)
									* libola-dev (for the optional OLA backend)
									* libjack-jackd2-dev (for the JACK backend)
									* libssl-dev (for the MA Web Remote backend)
									* python3-dev (for the Python backend)
									* pkg-config (as some projects and systems like to spread their files around)
									* A C compiler
									* GNUmake

									For Linux and OSX, just running :code:`make` in the source directory should do the trick.

									Some backends have been marked as optional as they require rather large additional software to be installed, for example the :code:`ola` backend. To create a build including these, run :code:`make full`.

									To install a source build with :code:`make install`, please familiarize yourself with the build parameters as specified in the next section.

									Backends may also be built selectively by running :code:`make <backendfile>` in the :code:`backends/` directory, for example

									.. code-block:: console

										make jack.so

	.. container:: flex-mobile-algn-vert

		.. raw:: html

			<h2 id="installer">Windows</h2>

		.. container:: wrap-collabsible

				.. raw:: html

						<input id="windows-installer" class="toggle" type="checkbox">
						<label for="windows-installer" class="lbl-toggle">Using installer</label>

				.. container:: collapsible-content

					.. container:: content-inner

						To build for Windows, you still need to compile on a Linux machine (virtual machines work well for this).
								
						In a fresh Debian installation, you will need to install the following packages (using :code:`apt-get` install as root):

						* build-essential
						* pkg-config
						* git
						* mingw-w64

						Clone the repository and run :code:`make windows` in the project directory. This will build :code:`midimonster.exe` as well as a set of backends as DLL files, which you can then copy to the Windows machine.

						Note that some backends have limitations when building on Windows (refer to the backend documentation for detailed information).

	.. container:: flex-mobile-algn-vert

		.. raw:: html

			<h2 id="installer">Packaging</h2>

		.. container:: wrap-collabsible

				.. raw:: html

						<input id="packaging-installer" class="toggle" type="checkbox">
						<label for="packaging-installer" class="lbl-toggle">Building from source</label>

				.. container:: collapsible-content

					.. container:: content-inner

						To build the MIDIMonster directly from the sources, you'll need some libraries that provide support for the protocols to translate. When building from source, you can also choose to exclude backends (for example, if you don't need them or don't want to install their prerequisites).

						* libasound2-dev (for the ALSA MIDI backend)
						* libevdev-dev (for the evdev backend)
						* liblua5.3-dev (for the lua backend)
						* libola-dev (for the optional OLA backend)
						* libjack-jackd2-dev (for the JACK backend)
						* libssl-dev (for the MA Web Remote backend)
						* python3-dev (for the Python backend)
						* pkg-config (as some projects and systems like to spread their files around)
						* A C compiler
						* GNUmake

						For Linux and OSX, just running :code:`make` in the source directory should do the trick.

						Some backends have been marked as optional as they require rather large additional software to be installed, for example the :code:`ola` backend. To create a build including these, run :code:`make full`.

						To install a source build with :code:`make install`, please familiarize yourself with the build parameters as specified in the next section.

						Backends may also be built selectively by running :code:`make <backendfile>` in the :code:`backends/` directory, for example

						.. code-block:: console

							make jack.so


						The build process accepts the following parameters, either from the environment or as arguments to the :code:`make` invocation:

						.. list-table:: 
							:widths: 20 20 35 25
							:header-rows: 1

							* - Target
								- Parameter
								- Default value
								- Description
							* - build targets
								- :code:`DEFAULT_CFG`
								- :code:`monster.cfg`
								- Default configuration file
							* - build targets
								- :code:`PLUGINS`
								- Linux/OS X: :code:`./backends/`, Windows: :code:`backends\`
								- Backend plugin library path
							* - :code:`install`
								- :code:`PREFIX`
								- :code:`/usr`
								- Install prefix for binaries
							* - :code:`install`
								- :code:`DESTDIR`
								- empty
								- Destination directory for packaging builds
							* - :code:`install`
								- :code:`DEFAULT_CFG`
								- empty
								- Install path for default configuration file
							* - :code:`install`
								- :code:`PLUGINS`
								- :code:`$(PREFIX)/lib/midimonster`
								- Install path for backend shared objects																						
							* - :code:`install`
								- :code:`EXAMPLES`
								- :code:`$(PREFIX)/share/midimonster`
								- Install path for example configurations 

						Note that the same variables may have different default values depending on the target. This implies that builds that are destined to be installed require those variables to be set to the same value for the build and :code:`install` targets.

						For system-wide install or packaging builds, the following steps are recommended:

						.. code-block:: console
							export PREFIX=/usr
							export PLUGINS=$PREFIX/lib/midimonster
							export DEFAULT_CFG=/etc/midimonster/midimonster.cfg
							make clean
							make full
							make install

						Depending on your configuration of :code:`DESTDIR`, the :code:`make install` step may require root privileges to install the binaries to the appropriate destinations.

						To create Debian packages, use the debianization and :code:`git-buildpackage` configuration on the :code:`debian/master` branch. Simply running :code:`gbp buildpackage` should build a package for the last tagged release.

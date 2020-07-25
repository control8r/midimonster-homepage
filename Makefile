SOURCEDIR = site
BUILDDIR = build

.PHONY: all

all:
	sphinx-build $(SOURCEDIR) $(BUILDDIR)

clean:
	$(RM) -r $(BUILDDIR)

---
label: Installing the Baselime CLI
order: -1
---

# Installing the Baselime CLI

The Baselime CLI enables you to interact with Baselime and your observability data through the command line.

---

## Installing

+++ MacOS

- Installing with Homebrew

```bash # :icon-terminal: terminal
brew tap baselime/tap
brew install baselime
```

- Installing with `curl`


```bash # :icon-terminal: terminal
curl -s https://get.baselime.io | bash
```

- Installing with `npm`


```bash # :icon-terminal: terminal
npm install @baselime/cli -g
```

+++ Linux

- Installing with `curl`

```bash # :icon-terminal: terminal
curl -s https://get.baselime.io | sudo bash
```

- Installing with `npm`

```bash # :icon-terminal: terminal
npm install @baselime/cli -g
```

+++ Windows

- Installing with `npm`

```bash # :icon-terminal: terminal
npm install @baselime/cli -g
```
+++


Optionally, you can download the latest version of the Baselime CLI binary from [the releases page on GitHub](https://github.com/baselime/cli/releases/latest).

1. Download the binary for your operating system and architecture (e.g., `baselime_linux_x64` or `baselime_darwin_x64`).
4. Unzip the tarball with `tar -xf baselime-<os>-<arch>-<version>.tar.gz`
3. Make the binary executable with `chmod +x baselime`.
4. Move the binary to a directory in your `PATH`, such as `/usr/local/bin`, with `mv baselime /usr/local/bin/baselime`.

!!! note
On some systems, you might need to run these commands with `sudo`.
!!!

---

## Verifying the installation

Verify that the Baselime CLI was installed with:

```bash # :icon-terminal: terminal
baselime --version
```
---
## Authenticating the CLI

Before you can use the Baselime CLI, you must authenticate it with your Baselime account.

```bash # :icon-terminal: terminal
baselime login
```

!!!
To use the Baselime CLI in non-interactive evironments, such as in CI pipelines, set the `BASELIME_API_KEY` environment variable to your Baselime API key and the CLI will use it for all commands.
!!!

--- 
## Updating the Baselime CLI

To update the Baselime CLI to the latest version, use one of the following commands depending on how you originally installed it:

- If you installed with `brew`, run `brew upgrade @baselime/cli`
- If you installed with `curl`, run `baselime upgrade`
- If you installed with `npm`, run `npm update -g @baselime/cli`


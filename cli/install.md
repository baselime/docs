---
label: Install
order: -1
---

# Installing the Baselime CLI

The Baselime CLI is the primary way to interact with Baselime and your serverless observability data. It allows you to connect your serverless applications, query and explore your data, and set up integrations with your tools.

You can install the Baselime CLI using one of the following methods:

---

## Installing

### Installing with Homebrew (for MacOS)

1. Make sure you have Homebrew installed on your system. If you don't, you can install it by following the instructions [here](https://docs.brew.sh/Installation).
2. Run the following commands to add the Baselime tap to your Homebrew installation:

```bash # :icon-terminal: terminal
brew tap baselime/tap
brew install baselime
```

### Installing with curl (for MacOS and Linux)

1. Run the following command to download and install the Baselime CLI:

- MacOS

```bash # :icon-terminal: terminal
curl -s https://get.baselime.io | bash
```

- Linux

```bash # :icon-terminal: terminal
curl -s https://get.baselime.io | sudo bash
```

### Installing with npm (for MacOS, Linux, and Windows)

1. Make sure you have npm installed on your system. If you don't, you can install it by following the instructions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
2. Run the following command to install the Baselime CLI:

```bash # :icon-terminal: terminal
npm install @baselime/cli -g
```

### Downloading the binary (for MacOS, and Linux)

You can download the latest version of the Baselime CLI binary from [the releases page on GitHub](https://github.com/baselime/cli/releases/latest).

1. Download the binary for your operating system and architecture (e.g., `baselime_linux_x64` or `baselime_darwin_x64`).
4. Unzip the tarball with `tar -xf baselime-<os>-<arch>-<version>.tar.gz`
3. Make the binary executable with `chmod +x baselime`.
4. Move the binary to a directory in your `PATH`, such as `/usr/local/bin`, with `mv baselime /usr/local/bin/baselime`.

!!! note
On some systems, you might need to run these commands with `sudo`.
!!!

---

## Verifying the installation

To verify that the Baselime CLI has been installed correctly, run the following command:

```bash # :icon-terminal: terminal
baselime --version
```

You should see the version number of the Baselime CLI that you installed.

If you encounter any issues during the installation process, please don't hesitate to [contact us](mailto:support@baselime.io).

---
## Authenticating the CLI

Before you can use the Baselime CLI, you must authenticate it with your Baselime account. To do this, run the following command:

```bash # :icon-terminal: terminal
baselime login
```

This command opens a new browser window and asks you to sign in to your Baselime account. Once you sign in, the CLI is authenticated and you can start using it to interact with your Baselime account.

--- 
## Updating the Baselime CLI

To update the Baselime CLI to the latest version, use one of the following commands depending on how you originally installed it:

- If you installed with `brew`, run `brew upgrade @baselime/cli`
- If you installed with `curl`, run `baselime upgrade`
- If you installed with `npm`, run `npm update -g @baselime/cli`


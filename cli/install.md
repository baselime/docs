---
label: Install
order: -1
---

# Install

---

## Installation

+++ MacOS

You can download and install the Baselime CLI on MacOS

#### Homebrew
You can install the Baselime CLI using [Homebrew](https://brew.sh/).

```bash # :icon-terminal: terminal
brew tap baselime/tap
brew install baselime
```

To update:

```bash # :icon-terminal: terminal
brew upgrade baselime
```

#### Manual

```bash # :icon-terminal: terminal
curl -s https://get.baselime.io | bash
```

+++ Linux


You can download and install the Baselime CLI for your preferred Linux distribution: 

```bash # :icon-terminal: terminal
curl -s https://get.baselime.io | sudo bash
```

+++ Using [npm](https://npmjs.com)

```bash # :icon-terminal: terminal
npm install @baselime/cli -g
```

+++ Download the compiled binary

Binary releases are available on [GitHub Releases](https://github.com/baselime/cli/releases/latest).

+++ 

### Validate installation

In all cases the installation can be validated by running `baselime -v` in the terminal:

```bash # :icon-terminal: terminal
baselime -v
0.0.7
```

## Login

After creating an account, if you already have a Baselime account, you should log in the Baselime CLI.

```bash # :icon-terminal: terminal
baselime auth login
```

Otherwise, you can sign up on the Baselime UI.

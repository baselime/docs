---
label: Install
order: -1
---

# Install

---

## Installation

### MacOS

You can download and install the Baselime CLI on MacOS

#### Homebrew (Coming soon)
You can install the Baselime CLI using [Homebrew](https://brew.sh/).

```bash
brew tap baselime/tap
brew install baselime
```

To update:

```bash
brew upgrade baselime
```

#### Manual

```bash #
curl -s https://get.baselime.io | bash
```

### Linux

You can download and install the Baselime CLI for your preferred Linux distribution: 

```bash #
curl -s https://get.baselime.io | sudo bash
```

### Using [npm](https://npmjs.com)

```bash
npm install @baselime/cli -g
```

### Download the compiled binary

Binary releases are available on [GitHub Releases](https://github.com/baselime/cli/releases/latest).

### Validate installation

In all cases the installation can be validated by running `baselime -v` in the terminal:

```bash
baselime -v
0.0.2
```
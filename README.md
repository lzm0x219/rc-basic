# RC Basic

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![npm](https://img.shields.io/npm/v/rc-basic?style=flat-square)](https://www.npmjs.com/package/rc-basic) ![npm](https://img.shields.io/npm/dm/rc-basic?color=yellow&style=flat-square) ![NPM](https://img.shields.io/npm/l/rc-basic?style=flat-square)

😎 A react basic component library.

## Table of Contents

- [Usage](#usage)
- [Components](#components)
  - [Basic](#basic)
    - [Box]()
  - [Control Flow](#control-flow)
    - [For]()
    - [Show]()
- [License](#License)

## Usage

First need to install peerDependencies:

```bash
npm install react-polymorphic-types -D
```

then install this library:

```bash
npm install rc-basic
```

## Components

### Basic

#### \<Box\>

- Static type checking against the associated component's inferred props
- HTML element name validation

```js
<Box as="a" href="xxx.com">xxx.com</Box>
<Box as="h3">h3</Box>
```

For more usage, please see [react-polymorphic-types](https://github.com/kripod/react-polymorphic-types).

---

### Control Flow

For example, with lists, a simple map is inefficient as it always maps the entire array.

#### \<For\>

Simple referentially keyed loop. The callback takes the current item as the first argument:

```js
<For each={state.list} fallback={<div>Loading...</div>}>
  {(item) => <div>{item}</div>}
</For>
```

The optional second argument is an index signal:

```js
<For each={state.list} fallback={<div>Loading...</div>}>
  {(item, index) => (
    <div>
      #{index()} {item}
    </div>
  )}
</For>
```

#### \<Show\>

The `Show` control flow is used to conditional render part of the view: it renders children when the when is truthy, an fallback otherwise. It is similar to the ternary operator (**when ? children : fallback**) but is ideal for templating JSX.

```js
<Show when={state.count > 0} fallback={<div>Loading...</div>}>
  <div>My Content</div>
</Show>
```

`Show` can also be used as a way of keying blocks to a specific data model. Ex the function is re-executed whenever the user model is replaced.

```js
<Show when={state.user} fallback={<div>Loading...</div>}>
  {(user) => <div>{user.firstName}</div>}
</Show>
```

## Project Activity

![Project Activity](https://repobeats.axiom.co/api/embed/a405fc1e732aba9b918377aeec45ee0661fb482c.svg)

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2F0x219%2Frc-basic.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2F0x219%2Frc-basic?ref=badge_large)

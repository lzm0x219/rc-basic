# RC Basic

😎 A react basic component library.

## Table of Contents

- [Usage](#usage)
- [Components](#components)
  - [Basic](#basic)
    - [Box]()
  - [Control Flow](#control-flow)
    - [For]()
    - [Show]()

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

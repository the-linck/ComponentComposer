# Component Composer

Stateless syntax-sugar component that composes several JSX components in a single one.



## Dependencies

* ReactJS
* JSX



## ComponentComposer

Function that generates the composed component, from one or more parameters with React components, to become a single component.

```ts
function ComponentComposer(...Components : React.Component) : React.Component
```
All arguments must be Component class/functions, not instances or strings.

### Parameters

* `Components`: ...React.Component  
One or more Components to compose.

### Return Type

React.Component

### Example

```jsx
import React from "react";

import Context1 from "./Context1";
import Context2 from "./Context2";
import Content from "./Content";

import ComponentComposer from "./ComponentComposer";

const CustomComponent = (props) => {
	/// ...
	const ComposedContext = ComponentComposer(
		Context1.Provider,
		Context2.Provider
	);

	return [
		<ComposedContext>
			<Content/>
		</ComposedContext>
	];
};
export CustomComponent;
```

## ProviderComponent

Creates a composable Context Provider with only the `value` prop.

```ts
function ProviderComponent<T>(Provider : React.Provider<T>, Value: T) : React.Component
```

The resulting component can be safely passed to `ComponentComposer()`.

### Parameters

* `Provider`: React.Provider  
Provider of a Context.

* `Value`: T  
Data to be provided to the Context.

### Return Type

React.Component

### Example

```jsx
import React from "react";

import Context1 from "./Context1";
import Context2 from "./Context2";
import Content from "./Content";

import {
	ComponentComposer,
	ProviderComponent
} from "./ComponentComposer";

const CustomComponent = (props) => {
	const Context1Value = {some: "thing"};
	/// ...
	const ComposedContext = ComponentComposer(
		ProviderComponent(Context1, Context1Value),
		Context2.Provider
	);

	return [
		<ComposedContext>
			<Content/>
		</ComposedContext>
	];
};
export CustomComponent;
```

## PropsComponent

Creates a composable Component with the given props.
Works exactly as `ProviderComponent`, but receives any `Component` and the object `ComponentProps` with all props:

```ts
function PropsComponent<TProps, TComponent>(Component : TComponent, ComponentProps: TProps) : TComponent
```

The resulting component can be safely passed to `ComponentComposer()`.

### Parameters

* `Component`: TComponent
Component to compose.

* `ComponentProps`: T  
Props for the Component.

### Return Type

TComponent

### Example

```jsx
import React from "react";

import Context1 from "./Context1";
import Context2 from "./Context2";
import Content from "./Content";
import Router from "./Router";

import {
	ComponentComposer,
	PropsComponent,
	ProviderComponent
} from "./ComponentComposer";

const CustomComponent = (props) => {
	const Context1Value = {some: "thing"};
	/// ...
	const ComposedContext = ComponentComposer(
		ProviderComponent(Context1, Context1Value),
		Context2.Provider,
		PropsComponent(Router, {baseUrl: "/test"})
	);

	return [
		<ComposedContext>
			<Content/>
		</ComposedContext>
	];
};
export CustomComponent;
```
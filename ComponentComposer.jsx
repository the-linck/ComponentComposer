import React from "react";



/**
 * @param {React.Component[]} Components
 * @returns {function(React.ComponentProps<React.FC>) : React.Component}
 */
export const ComponentComposer = (... Components) => (props) => {
	if (Components.length === 0) {
		return null;
	}

	let Composed = props.children ?? null;
	let Component;
	for (let Index = Components.length - 1; Index > -1 ; Index--) {
		Component = Components[Index];

		Composed = <Component>{
			Composed
		}</Component>;
	}

	return Composed;
};

/**
 * @template T
 * @param {React.Provider<T>} Provider 
 * @param {T} Value 
 * @returns {React.Provider<T>}
 */
export const ProviderComponent = (Provider, Value) => (props) => {
	return <Provider value={Value} {...props} />;
};

/**
 * @template {React.ComponentProps<React.FC>} TProps
 * @template {React.Component<TProps>} TComponent
 * @param {TComponent} Component 
 * @param {TProps} ComponentProps 
 * @returns {TComponent}
 */
export const PropsComponent = (Component, ComponentProps) => (props) => {
	return <Component {... ComponentProps} {... props} />;
};



export default ComponentComposer;
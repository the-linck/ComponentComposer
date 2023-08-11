import React from "react";


/**
 * @template T
 * @typedef {React.PropsWithChildren<React.ComponentProps<React.ComponentProps<T>>>} Props
 */

/**
 * @param {React.ComponentType[]} Components
 * @returns {function(Props) : React.ReactElement}
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
 * @returns {function(Props) : JSX.Element}
 */
// eslint-disable-next-line react/display-name
export const ProviderComponent = (Provider, Value) => (props) => {
	return <Provider value={Value} {...props} />;
};

/**
 * @param {React.ComponentType} Component 
 * @param {React.ComponentProps<React.ComponentType>} ComponentProps 
 * @returns {function(Props) : JSX.Element}
 */
// eslint-disable-next-line react/display-name
export const PropsComponent = (Component, ComponentProps) => (props) => {
	return <Component {... ComponentProps} {... props} />;
};



export default ComponentComposer;
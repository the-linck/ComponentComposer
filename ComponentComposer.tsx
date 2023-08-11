import React, {
	ComponentProps,
	ComponentType,
	PropsWithChildren,
	Provider,
} from "react";

type Props = PropsWithChildren<ComponentProps<ComponentType>>;


export const ComponentComposer = (... Components : ComponentType[]) => (props : Props) => {
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

	return Composed as React.ReactElement;
};

// eslint-disable-next-line react/display-name
export const ProviderComponent = <T,>(Provider : Provider<T>, Value : T) => (props: Props) => {
	return <Provider value={Value} {...props} />;
};

// eslint-disable-next-line react/display-name
export const PropsComponent = (Component : ComponentType, ComponentProps : ComponentProps<ComponentType>) => (props : Props) => {
	return <Component {... ComponentProps} {... props} />;
};



export default ComponentComposer;
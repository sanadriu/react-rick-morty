import styled from "styled-components";

const Flex = styled.div`
	display: flex;
	flex-wrap: ${(props) => props.wrap || "no-wrap"};
	flex-direction: ${(props) => props.direction || "row"};
	align-items: ${(props) => props.alignItems || "center"};
	align-content: ${(props) => props.alignContent || "center"};
	justify-content: ${(props) => props.justifyContent || "center"};
	gap: ${(props) => props.gap || "0"};
	margin: ${(props) => props.m || "0"};
	padding: ${(props) => props.p || "0"};
`;

export default Flex;

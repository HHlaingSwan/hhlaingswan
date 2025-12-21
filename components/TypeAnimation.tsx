import { TypingAnimation } from "./ui/typing-animation";

export function TypeAnimation() {
	return (
		<TypingAnimation
			cursorStyle='underscore'
			className='font-bold'
			words={["Robust Backends", "Interactive UIs", "Complete Solutions"]}
			loop
		/>
	);
}

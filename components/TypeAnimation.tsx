import { TypingAnimation } from "./ui/typing-animation";

export function TypeAnimation() {
	return (
		<TypingAnimation
			cursorStyle='underscore'
			className='font-bold'
			words={["Engaging Products", "Pixel-Perfect UIs", "Creative Solutions"]}
			loop
		/>
	);
}

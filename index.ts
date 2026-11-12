/**
 * audiobus-output-pink-trombone
 * Neil Thapen's Pink Trombone vocal synthesiser as an audiobus output.
 *
 * Importing this entry is side-effect free: the engine (which needs a browser)
 * loads only when an output is created.
 */
import type { Config } from "./output-pink-trombone.ts"

export type { Config as PinkTromboneConfig } from "./output-pink-trombone.ts"
export type OutputPinkTrombone = import("./output-pink-trombone.ts").default

export const PINK_TROMBONE_OUTPUT_ID = "pink-trombone"

export interface PinkTromboneCreateOptions extends Partial<Config> {
	audioContext?: AudioContext
	destination?: AudioNode
}

/** Describes the output for a host's device picker; compatible with audiobus's OutputDefinition. */
export const pinkTromboneDefinition = {
	id: PINK_TROMBONE_OUTPUT_ID,
	type: "engine",
	subtype: "instrument",
	name: "Pink Trombone",
	description: "Vocal synthesis engine with speech-like sounds",
	icon: new URL("./assets/output-pink-trombone.svg", import.meta.url).href,
	preview: new URL("./assets/output-pink-trombone-preview.jpg", import.meta.url).href,
	category: "Synthesis"
} as const

/** Load the output class on demand. */
export async function loadOutputPinkTrombone() {
	return (await import("./output-pink-trombone.ts")).default
}

export async function createOutputPinkTrombone(
	options: PinkTromboneCreateOptions = {}
): Promise<OutputPinkTrombone> {
	const OutputPinkTrombone = await loadOutputPinkTrombone()
	return new OutputPinkTrombone(options)
}

/** Pass to audiobus's registerOutput() to add Pink Trombone to its outputs. */
export const pinkTromboneOutput = {
	definition: pinkTromboneDefinition,
	isAvailable: () => typeof window !== "undefined" && typeof AudioWorkletNode !== "undefined",
	create: createOutputPinkTrombone
}

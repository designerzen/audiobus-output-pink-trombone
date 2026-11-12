# audiobus-output-pink-trombone

[Pink Trombone](https://dood.al/pinktrombone/), Neil Thapen's vocal tract synthesiser, packaged as an output for [audiobus](https://github.com/designerzen/audiobus). It has no runtime dependencies, so it also works on its own.

MIDI notes set the voice's pitch, and each note's pitch class shapes a tongue constriction for a change of vowel colour.

## Install

```bash
pnpm add github:designerzen/audiobus-output-pink-trombone
```

## With audiobus

```ts
import { registerOutput } from "audiobus/io/output-factory"
import { pinkTromboneOutput } from "audiobus-output-pink-trombone"

registerOutput(pinkTromboneOutput)
```

Pink Trombone then appears in audiobus's outputs as `pink-trombone`, and audiobus passes in its audio context and destination.

## On its own

```ts
import { createOutputPinkTrombone } from "audiobus-output-pink-trombone"

const voice = await createOutputPinkTrombone({ audioContext, destination: audioContext.destination })
await voice.connect()
voice.noteOn(60, 100)
voice.noteOff(60)
```

The `<pink-trombone>` element itself is available from `audiobus-output-pink-trombone/pink-trombone.js`.

## Options

| Option | Default | Meaning |
| --- | --- | --- |
| `audioContext` | required | Context the voice runs in |
| `destination` | `audioContext.destination` | Node the voice connects to |
| `frequency` | `100` | Base frequency in Hz |
| `loudness` | `1` | Volume, 0 to 1 |
| `tenseness` | `0.6` | Voiced to voiceless balance, 0 to 1 |
| `enabled` | `1` | `0` silences note input |

The main entry only describes the output. The engine needs a browser with `AudioWorklet`, and loads when an output is created.

## Credits

Pink Trombone was created by [Neil Thapen](https://dood.al/pinktrombone/). See the original source for its licence.

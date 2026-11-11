// Runs cleopatra.html's own song analysis (the same JS) on the default mp3 and writes the result into the page as BAKED.
// usage (from the cleopatra folder): node tools/bake.mjs cleopatra.html "<song>.mp3"
// Needs ffmpeg on the PATH. Re-run it whenever the default song changes, so the page also works opened from disk.
import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const [htmlPath, mp3] = process.argv.slice(2);
let html = readFileSync(htmlPath, 'utf8');
const a = html.indexOf('function makeFFT'), b = html.search(/\/\* =+\r?\n {3}Director/);
if (a < 0 || b < 0) throw new Error('analysis section not found');
const code = html.slice(a, b);
const factory = new Function('TAU', 'clamp', 'nextFrame', `${code}; return { analyzeAudio, packAnalysis };`);
const { analyzeAudio, packAnalysis } = factory(Math.PI * 2, (x, lo, hi) => (x < lo ? lo : x > hi ? hi : x), () => Promise.resolve());

const SR = 44100;
const raw = execFileSync('ffmpeg', ['-v', 'error', '-i', mp3, '-f', 'f32le', '-acodec', 'pcm_f32le', '-ac', '2', '-ar', String(SR), 'pipe:1'], { maxBuffer: 1 << 30 });
const inter = new Float32Array(raw.buffer, raw.byteOffset, raw.byteLength / 4);
const n = inter.length / 2, ch = [new Float32Array(n), new Float32Array(n)];
for (let i = 0; i < n; i++) { ch[0][i] = inter[2 * i]; ch[1][i] = inter[2 * i + 1]; }
const buffer = { sampleRate: SR, numberOfChannels: 2, length: n, duration: n / SR, getChannelData: (c) => ch[c] };

const an = await analyzeAudio(buffer);
const packed = packAnalysis(an);
const re = /const BAKED = [^\n]*;( \/\*@@BAKED@@\*\/)?/;
if (!re.test(html)) throw new Error('BAKED line not found');
html = html.replace(re, () => `const BAKED = ${packed}; /*@@BAKED@@*/`);
writeFileSync(htmlPath, html);
console.log(`baked: ${an.beats.length} beats, ${an.bpm.toFixed(2)} BPM, ${an.duration.toFixed(2)} s, ${packed.length} chars`);

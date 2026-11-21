import { loadFont as loadDisplay } from '@remotion/google-fonts/BigShoulders';
import { loadFont as loadSans } from '@remotion/google-fonts/InstrumentSans';
import {
    AbsoluteFill,
    Composition,
    Img,
    interpolate,
    registerRoot,
    Sequence,
    spring,
    staticFile,
    useCurrentFrame,
    useVideoConfig,
} from 'remotion';

// Same tokens as the portfolio (app/globals.css).
const C = { stage: '#000000', bone: '#ede8de', ash: '#9a958b', marigold: '#f2a922', tomato: '#e4572e', lilac: '#b9a7f0', petrol: '#1d5c58' };
const display = loadDisplay('normal', { weights: ['800'] }).fontFamily;
const sans = loadSans('normal', { weights: ['400', '500'] }).fontFamily;

const QUESTION = 90;
const INTRO = 75;
const SCENE = 105;
const OUTRO = 90;

// Real screenshots from the review demo account (Alex & Sam). No pet screens: they show third-party characters.
const scenes = [
    { file: 'alex-chat.png', title: 'A chat for two', body: 'End-to-end encrypted messages, photos and voice notes.', color: C.tomato },
    { file: 'alex-play.png', title: 'Play together', body: 'Mini games and a daily question that earn you Love Units.', color: C.marigold },
    { file: 'alex-wallet.png', title: 'Spend your LU', body: 'Love Units you earn together, spent on rewards you set as a couple.', color: C.lilac },
    { file: 'alex-emoji-riddle.png', title: 'Say it in emojis', body: 'Emoji riddles, draw & guess, two truths and a lie, and more.', color: C.petrol },
];

const useEnter = (delay = 0) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    return spring({ frame: frame - delay, fps, config: { damping: 200 } });
};

const Title = ({ size, color = C.bone, children }: { size: number; color?: string; children: React.ReactNode }) => (
    <div style={{ fontFamily: display, fontWeight: 800, fontSize: size, lineHeight: 0.85, textTransform: 'uppercase', color }}>{children}</div>
);

const Ticket = ({ children, bg }: { children: string; bg: string }) => (
    <div
        style={{
            display: 'inline-block',
            background: bg,
            color: C.stage,
            fontFamily: sans,
            fontWeight: 500,
            fontSize: 30,
            padding: '8px 26px',
            mask: 'radial-gradient(circle 9px at 0 50%, #0000 98%, #000) left / 51% 100% no-repeat, radial-gradient(circle 9px at 100% 50%, #0000 98%, #000) right / 51% 100% no-repeat',
        }}
    >
        {children}
    </div>
);

// Opening beat: the idea the whole app is built on.
const Question = () => {
    const a = useEnter(0);
    const b = useEnter(30);
    return (
        <AbsoluteFill style={{ background: C.stage, padding: 140, justifyContent: 'center', gap: 48 }}>
            <div style={{ opacity: a, transform: `translateY(${(1 - a) * 30}px)` }}>
                <Title size={170}>How does one measure love?</Title>
            </div>
            <div style={{ fontFamily: sans, fontSize: 64, color: C.marigold, opacity: b, transform: `translateY(${(1 - b) * 30}px)` }}>
                What if there was a currency for it?
            </div>
        </AbsoluteFill>
    );
};

const Intro = () => {
    const a = useEnter(0);
    const b = useEnter(12);
    return (
        <AbsoluteFill style={{ background: C.stage, padding: 140, justifyContent: 'center', gap: 36 }}>
            <div style={{ opacity: b }}>
                <Ticket bg={C.marigold}>Invite-only beta</Ticket>
            </div>
            <div style={{ overflow: 'hidden' }}>
                <div style={{ transform: `translateY(${(1 - a) * 100}%)` }}>
                    <Title size={380} color={C.tomato}>LU Chat</Title>
                </div>
            </div>
            <div style={{ fontFamily: sans, fontSize: 56, color: C.bone, opacity: b }}>
                <span style={{ color: C.marigold }}>LU = Love Units.</span> Your little corner of the internet, for two
            </div>
        </AbsoluteFill>
    );
};

const Scene = ({ file, title, body, color, index }: (typeof scenes)[number] & { index: number }) => {
    const frame = useCurrentFrame();
    const phone = useEnter(0);
    const text = useEnter(8);
    const out = interpolate(frame, [SCENE - 10, SCENE], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
    return (
        <AbsoluteFill style={{ background: C.stage, flexDirection: 'row', alignItems: 'center', padding: '0 140px', gap: 120, opacity: out }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 36, opacity: text, transform: `translateX(${(1 - text) * -40}px)` }}>
                <div style={{ fontFamily: sans, fontSize: 30, color: C.ash, fontVariantNumeric: 'tabular-nums' }}>
                    {index + 1} of {scenes.length}
                </div>
                <Title size={150} color={color === C.petrol ? C.bone : color}>{title}</Title>
                <div style={{ fontFamily: sans, fontSize: 44, lineHeight: 1.35, color: C.bone, maxWidth: 820 }}>{body}</div>
            </div>
            <div style={{ position: 'relative', width: 620, height: 980, display: 'grid', placeItems: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, borderRadius: 56, background: color, transform: `scale(${0.85 + phone * 0.15})` }} />
                <div
                    style={{
                        position: 'relative',
                        height: 900,
                        aspectRatio: '1206 / 2622',
                        borderRadius: 58,
                        border: '12px solid #111',
                        boxShadow: `0 0 0 2px ${C.ash}`,
                        overflow: 'hidden',
                        transform: `translateY(${(1 - phone) * 160}px)`,
                        opacity: phone,
                    }}
                >
                    <Img src={staticFile(file)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        </AbsoluteFill>
    );
};

const Outro = () => {
    const a = useEnter(0);
    return (
        <AbsoluteFill style={{ background: C.tomato, padding: 140, justifyContent: 'center', gap: 40, opacity: a }}>
            <Title size={300} color={C.stage}>LU Chat</Title>
            <div style={{ fontFamily: sans, fontSize: 52, color: C.stage }}>Invite-only beta on TestFlight and Google Play</div>
            <div style={{ fontFamily: sans, fontSize: 40, color: C.stage, opacity: 0.75 }}>sakisev.cy/lu-chat</div>
        </AbsoluteFill>
    );
};

const LuChatDemo = () => (
    <AbsoluteFill style={{ background: C.stage }}>
        <Sequence durationInFrames={QUESTION}>
            <Question />
        </Sequence>
        <Sequence from={QUESTION} durationInFrames={INTRO}>
            <Intro />
        </Sequence>
        {scenes.map((s, i) => (
            <Sequence key={s.file} from={QUESTION + INTRO + i * SCENE} durationInFrames={SCENE}>
                <Scene {...s} index={i} />
            </Sequence>
        ))}
        <Sequence from={QUESTION + INTRO + scenes.length * SCENE} durationInFrames={OUTRO}>
            <Outro />
        </Sequence>
    </AbsoluteFill>
);

registerRoot(() => (
    <Composition
        id='LuChatDemo'
        component={LuChatDemo}
        durationInFrames={QUESTION + INTRO + scenes.length * SCENE + OUTRO}
        fps={30}
        width={1920}
        height={1080}
    />
));

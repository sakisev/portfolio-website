'use client';

import { useEffect, useRef } from 'react';

// Ambient, non-interactive demo: autoplays muted on loop, ignores pointer events (so right-click
// shows the page menu, not the video's), and stays on the poster for prefers-reduced-motion users.
export default function DemoVideo({ src, poster, label }: { src: string; poster?: string; label: string }) {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = ref.current;
        if (!video) return;
        const media = matchMedia('(prefers-reduced-motion: reduce)');
        const sync = () => {
            if (media.matches) video.pause();
            else video.play().catch(() => {});
        };
        sync();
        media.addEventListener('change', sync);
        return () => media.removeEventListener('change', sync);
    }, []);

    return (
        <video
            ref={ref}
            src={src}
            poster={poster}
            aria-label={label}
            muted
            loop
            playsInline
            disablePictureInPicture
            disableRemotePlayback
            className='pointer-events-none absolute inset-0 size-full select-none object-cover'
        />
    );
}

'use client';

export const FractalGlass = () => {
    return (
        <svg className="absolute w-0 h-0 pointer-events-none">
            <defs>
                <filter id="fractal-glass">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.01"
                        numOctaves="3"
                        result="noise"
                    />
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="noise"
                        scale="200"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </defs>
        </svg>
    );
};

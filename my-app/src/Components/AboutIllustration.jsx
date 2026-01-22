import React from 'react'

export default function AboutIllustration(){
  return (
    <figure className="about-illustration" aria-hidden>
      <svg viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" role="img">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#001f4d" />
            <stop offset="100%" stopColor="#274b7a" />
          </linearGradient>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#f1d77a" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="800" height="520" rx="20" fill="url(#g1)" opacity="0.06" />

        <g transform="translate(60,80)">
          <g className="pillar" transform="translate(0,0)">
            <rect x="0" y="90" width="160" height="170" rx="12" fill="#fff" opacity="0.98" />
            <circle cx="80" cy="40" r="34" fill="url(#g1)" />
            <text x="80" y="46" fontSize="20" textAnchor="middle" fill="#fff" fontWeight="700">V</text>
            <text x="80" y="140" fontSize="16" textAnchor="middle" fill="#102a3a" fontWeight="700">Vision</text>
            <text x="80" y="165" fontSize="12" textAnchor="middle" fill="#3b5970">A future-focused learning ethos</text>
          </g>

          <g className="pillar" transform="translate(200,0)">
            <rect x="0" y="90" width="160" height="170" rx="12" fill="#fff" opacity="0.98" />
            <circle cx="80" cy="40" r="34" fill="url(#g2)" />
            <text x="80" y="46" fontSize="20" textAnchor="middle" fill="#01213f" fontWeight="700">M</text>
            <text x="80" y="140" fontSize="16" textAnchor="middle" fill="#102a3a" fontWeight="700">Mission</text>
            <text x="80" y="165" fontSize="12" textAnchor="middle" fill="#3b5970">Holistic growth and academic rigour</text>
          </g>

          <g className="pillar" transform="translate(400,0)">
            <rect x="0" y="90" width="160" height="170" rx="12" fill="#fff" opacity="0.98" />
            <circle cx="80" cy="40" r="34" fill="#274b7a" />
            <text x="80" y="46" fontSize="20" textAnchor="middle" fill="#fff" fontWeight="700">V</text>
            <text x="80" y="140" fontSize="16" textAnchor="middle" fill="#102a3a" fontWeight="700">Values</text>
            <text x="80" y="165" fontSize="12" textAnchor="middle" fill="#3b5970">Integrity • Respect • Curiosity</text>
          </g>

          <g transform="translate(0,300)">
            <rect x="0" y="0" width="600" height="10" rx="5" fill="#e6eef8" />
            <g transform="translate(40,-40)">
              <text x="0" y="38" fontSize="14" fill="#102a3a">Est. 2026</text>
            </g>
          </g>
        </g>
      </svg>
    </figure>
  )
}

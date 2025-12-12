import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'


interface BoxState {
  id: number
  isGlitching: boolean
}
const HoverGlitch = () => {
  const [boxes, setBoxes] = useState<BoxState[]>(
    Array.from({ length: 48 }, (_, i) => ({ id: i, isGlitching: false }))
  )

  const handleMouseEnter = (id: number): void => {
    setBoxes((prev) => prev.map((box) => (box.id === id ? { ...box, isGlitching: true } : box)))

    setTimeout(() => {
      setBoxes((prev) => prev.map((box) => (box.id === id ? { ...box, isGlitching: false } : box)))
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="h-xl w-2xl mx-auto">
        <div className="grid grid-cols-8 max-w-6xl mx-auto">
          {boxes.map((box) => (
            <div key={box.id} className="relative aspect-square">
              <div
                className="w-full h-full border border-white/10 cursor-pointer transition-colors"
                onMouseEnter={() => handleMouseEnter(box.id)}
              />
              <AnimatePresence>{box.isGlitching && <GlitchOverlay boxId={box.id} />}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}




const GlitchOverlay = ({ boxId }: { boxId: number }) => {
  const patterns = generateRandomPattern(boxId)

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden bg-[#8800ff]"
      initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
      animate={{ clipPath: 'inset(0 0 0 0)', opacity: 1 }}
      exit={{ clipPath: 'inset(0 0 0 100%)', opacity: 0 }}
      transition={{ duration: 0.2, type: 'spring', stiffness: 150, damping: 22 }}
    >
      <div className="w-full h-full relative">
        {patterns.map((pattern, idx) => (
          <motion.div
            key={`${boxId}-${idx}`}
            className="absolute"
            style={{
              top: pattern.top,
              left: pattern.left,
              width: pattern.width,
              height: pattern.height,
              backgroundColor: pattern.color,
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: idx * 0.015,
              duration: 0.25,
              type: 'spring',
              stiffness: 250,
              damping: 20,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function generateRandomPattern(boxId: number) {
  const patterns = []
  const colors = ["#E6DAFF", "#F347FF", "#1efe9d", "#FFFFFF", "#f239ff"]

  // Use boxId as seed for consistent but unique patterns
  const seed = boxId * 12345
  const rand = (offset: number) => seededRandom(seed + offset)

  const patternStyle = Math.floor(rand(1) * 5) // 5 different pattern styles

  if (patternStyle === 0) {
    // Horizontal stripes
    for (let i = 0; i < 8; i++) {
      patterns.push({
        top: `${i * 10}px`,
        left: "0",
        width: "100%",
        height: `${4 + rand(i) * 4}px`,
        color: colors[Math.floor(rand(i * 2) * colors.length)],
      })
    }
  } else if (patternStyle === 1) {
    // Vertical stripes
    for (let i = 0; i < 6; i++) {
      patterns.push({
        top: "0",
        left: `${i * 15}px`,
        width: `${5 + rand(i) * 5}px`,
        height: "100%",
        color: colors[Math.floor(rand(i * 2) * colors.length)],
      })
    }
  } else if (patternStyle === 2) {
    // Checkered pattern
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 4; col++) {
        if ((row + col) % 2 === 0) {
          patterns.push({
            top: `${row * 16}px`,
            left: `${col * 24}px`,
            width: "24px",
            height: "16px",
            color: colors[Math.floor(rand(row * col) * colors.length)],
          })
        }
      }
    }
  } else {
    // Mixed pattern - combination of stripes and blocks
    for (let i = 0; i < 5; i++) {
      patterns.push({
        top: `${i * 18}px`,
        left: "0",
        width: "100%",
        height: "2px",
        color: colors[Math.floor(rand(i) * colors.length)],
      })
    }
    for (let i = 0; i < 12; i++) {
      patterns.push({
        top: `${rand(i * 5) * 100}%`,
        left: `${rand(i * 6) * 100}%`,
        width: "8px",
        height: "8px",
        color: colors[Math.floor(rand(i * 3) * colors.length)],
      })
    }
  }

  return patterns
}

export default HoverGlitch;

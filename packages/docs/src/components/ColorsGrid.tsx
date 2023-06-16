import { colors } from '@icy-ui/tokens'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: 'white',
          }}
        >
          <strong
            style={{
              backgroundColor: '#323238',
              borderRadius: '8px',
              padding: '5px',
            }}
          >
            ${key}
          </strong>
          <span
            style={{
              backgroundColor: '#29292e',
              borderRadius: '8px',
              padding: '5px',
            }}
          >
            {color}
          </span>
        </div>
      </div>
    )
  })
}

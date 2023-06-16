import '../styles/tokens-grid.css'
interface TokensGridProps {
  token: Record<string, string>
  hasRemValue?: boolean
  hasGraphicShow?: boolean
}

export function TokensGrid({
  token,
  hasRemValue = false,
  hasGraphicShow = false,
}: TokensGridProps) {
  function calcRemValueInPixel(value: string) {
    return String(Number(value.replace('rem', '')) * 16) + 'px'
  }

  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
          {hasGraphicShow && <th>Space</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(token).map(([name, value]) => {
          return (
            <tr key={name}>
              <td>{name}</td>
              <td>{value}</td>
              {hasRemValue && <td>{calcRemValueInPixel(value)}</td>}
              {hasGraphicShow && (
                <td>
                  <span
                    style={{
                      paddingLeft: calcRemValueInPixel(value),
                    }}
                  ></span>
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

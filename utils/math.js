export function showMathUtility(container) {
  container.innerHTML = `
        <p>Math Utilities:</p>
        <p>2 + 2 = ${2 + 2}</p>
        <p>2 * 3 = ${2 * 3}</p>
`;
}

//! Moduler er viktig til webapp, lett leseligere og lettere å debugge.

//! De gjør ingeting, men ekspoteres videre. gjelder begge.

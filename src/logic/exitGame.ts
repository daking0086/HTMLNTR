export function attemptCloseWindow(): void {
  window.open('', '_self');
  window.close();
}
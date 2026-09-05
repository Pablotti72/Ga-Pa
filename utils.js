export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[ch]));
}

export function getFriendlyErrorMessage(error, fallback = 'Nie udało się wykonać operacji. Spróbuj ponownie.') {
  const code = String(error?.code || '').toLowerCase();
  if (code.includes('permission-denied')) return 'Brak uprawnień do wykonania tej operacji.';
  if (code.includes('network')) return 'Wystąpił problem z połączeniem. Sprawdź internet i spróbuj ponownie.';
  if (code.includes('auth/invalid-credential') || code.includes('auth/wrong-password') || code.includes('auth/user-not-found')) {
    return 'Nieprawidłowy login lub hasło.';
  }
  return fallback;
}

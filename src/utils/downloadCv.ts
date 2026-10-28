/**
 * Redirection directe vers le WhatsApp officiel de Brice Emery PLEI
 * Numéro: +221 78 781 32 72 (Sénégal)
 * Message pré-rempli: "Bonjour Brice Emery, j'ai vu votre portfolio et je suis intéressé par votre profil / CV."
 */

export const BRICE_WHATSAPP_NUMBER = '221787813272';
export const WHATSAPP_CV_MESSAGE = "Bonjour Brice Emery, j'ai vu votre portfolio et je suis intéressé par votre profil / CV.";
export const WHATSAPP_CV_URL = `https://wa.me/${BRICE_WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_CV_MESSAGE)}`;

export const openCvWhatsApp = () => {
  window.open(WHATSAPP_CV_URL, '_blank', 'noopener,noreferrer');
};

/**
 * Fonction de compatibilité: lorsqu'un bouton CV / Télécharger CV est cliqué,
 * redirection instantanée vers WhatsApp avec la demande pré-remplie.
 */
export const downloadCvPdf = async (
  _url?: string,
  _filename?: string
): Promise<boolean> => {
  openCvWhatsApp();
  return true;
};

export const openCvInNewTab = (_url?: string) => {
  openCvWhatsApp();
};

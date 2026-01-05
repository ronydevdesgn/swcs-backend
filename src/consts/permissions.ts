export const PERMISSIONS = {
  REGISTRAR_SUMARIO: "Registrar Sumário",
  GERIR_PRESENCAS: "Gerir Presenças",
  VISUALIZAR_EFETIVIDADES: "Visualizar Efetividades",
} as const;

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

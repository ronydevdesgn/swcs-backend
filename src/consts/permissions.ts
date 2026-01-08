export const PERMISSIONS = {
  REGISTRAR_SUMARIO: "Registrar Sumário",
  GERIR_PRESENCAS: "Gerir Presenças",
  VISUALIZAR_EFETIVIDADES: "Visualizar Efetividades",
  ACESSO_TOTAL: "Acesso total ao sistema",
  VISUALIZAR_DASHBOARD: "Visualizar Dashboard",
} as const;

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

-- CreateTable
CREATE TABLE `RefreshToken` (
    `TokenID` INTEGER NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(191) NOT NULL,
    `UsuarioID` INTEGER NOT NULL,
    `ExpiresAt` DATETIME(3) NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `RefreshToken_token_key`(`token`),
    INDEX `RefreshToken_UsuarioID_idx`(`UsuarioID`),
    INDEX `RefreshToken_ExpiresAt_idx`(`ExpiresAt`),
    PRIMARY KEY (`TokenID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PasswordReset` (
    `PasswordResetID` INTEGER NOT NULL AUTO_INCREMENT,
    `Token` VARCHAR(191) NOT NULL,
    `UsuarioID` INTEGER NOT NULL,
    `ExpiresAt` DATETIME(3) NOT NULL,
    `Used` BOOLEAN NOT NULL DEFAULT false,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `PasswordReset_Token_key`(`Token`),
    INDEX `PasswordReset_UsuarioID_idx`(`UsuarioID`),
    INDEX `PasswordReset_ExpiresAt_idx`(`ExpiresAt`),
    INDEX `PasswordReset_Token_Used_idx`(`Token`, `Used`),
    PRIMARY KEY (`PasswordResetID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Professor` (
    `ProfessorID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(100) NOT NULL,
    `Departamento` ENUM('INFORMATICA', 'OUTROS') NOT NULL,
    `CargaHoraria` INTEGER NOT NULL,
    `UsuarioID` INTEGER NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Professor_UsuarioID_key`(`UsuarioID`),
    INDEX `Professor_Departamento_idx`(`Departamento`),
    INDEX `Professor_Nome_idx`(`Nome`),
    PRIMARY KEY (`ProfessorID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Funcionario` (
    `FuncionarioID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(100) NOT NULL,
    `Email` VARCHAR(100) NOT NULL,
    `Cargo` ENUM('SUMARISTA', 'SECRETARIO', 'ADMINISTRATIVO', 'OUTROS') NOT NULL,
    `UsuarioID` INTEGER NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Funcionario_Email_key`(`Email`),
    UNIQUE INDEX `Funcionario_UsuarioID_key`(`UsuarioID`),
    INDEX `Funcionario_Cargo_idx`(`Cargo`),
    INDEX `Funcionario_Nome_idx`(`Nome`),
    PRIMARY KEY (`FuncionarioID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `UsuarioID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(100) NOT NULL,
    `Email` VARCHAR(100) NOT NULL,
    `SenhaHash` VARCHAR(255) NOT NULL,
    `Tipo` ENUM('FUNCIONARIO', 'PROFESSOR') NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Usuario_Email_key`(`Email`),
    INDEX `Usuario_Tipo_idx`(`Tipo`),
    INDEX `Usuario_Nome_idx`(`Nome`),
    PRIMARY KEY (`UsuarioID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Curso` (
    `CursoID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(100) NOT NULL,
    `Descricao` TEXT NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Curso_Nome_idx`(`Nome`),
    PRIMARY KEY (`CursoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sumario` (
    `SumarioID` INTEGER NOT NULL AUTO_INCREMENT,
    `Data` DATETIME(3) NOT NULL,
    `Conteudo` TEXT NOT NULL,
    `CursoID` INTEGER NOT NULL,
    `ProfessorID` INTEGER NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Sumario_CursoID_idx`(`CursoID`),
    INDEX `Sumario_ProfessorID_idx`(`ProfessorID`),
    INDEX `Sumario_Data_idx`(`Data`),
    INDEX `Sumario_Data_CursoID_idx`(`Data`, `CursoID`),
    PRIMARY KEY (`SumarioID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProfessorCurso` (
    `ProfessorID` INTEGER NOT NULL,
    `CursoID` INTEGER NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `ProfessorCurso_ProfessorID_idx`(`ProfessorID`),
    INDEX `ProfessorCurso_CursoID_idx`(`CursoID`),
    PRIMARY KEY (`ProfessorID`, `CursoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Presenca` (
    `PresencaID` INTEGER NOT NULL AUTO_INCREMENT,
    `Data` DATETIME(3) NOT NULL,
    `Estado` ENUM('PRESENTE', 'FALTA') NOT NULL,
    `ProfessorID` INTEGER NOT NULL,
    `CursoID` INTEGER NOT NULL DEFAULT 1,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NOT NULL,

    INDEX `Presenca_ProfessorID_idx`(`ProfessorID`),
    INDEX `Presenca_CursoID_idx`(`CursoID`),
    INDEX `Presenca_Data_idx`(`Data`),
    INDEX `Presenca_Data_ProfessorID_idx`(`Data`, `ProfessorID`),
    INDEX `Presenca_Estado_idx`(`Estado`),
    PRIMARY KEY (`PresencaID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Efetividade` (
    `EfetividadeID` INTEGER NOT NULL AUTO_INCREMENT,
    `Data` DATETIME(3) NOT NULL,
    `HorasTrabalhadas` INTEGER NOT NULL,
    `ProfessorID` INTEGER NOT NULL,
    `CursoID` INTEGER NOT NULL DEFAULT 1,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NOT NULL,

    INDEX `Efetividade_ProfessorID_idx`(`ProfessorID`),
    INDEX `Efetividade_CursoID_idx`(`CursoID`),
    INDEX `Efetividade_Data_idx`(`Data`),
    INDEX `Efetividade_Data_ProfessorID_idx`(`Data`, `ProfessorID`),
    PRIMARY KEY (`EfetividadeID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Permissao` (
    `PermissaoID` INTEGER NOT NULL AUTO_INCREMENT,
    `Descricao` VARCHAR(100) NOT NULL,

    INDEX `Permissao_Descricao_idx`(`Descricao`),
    PRIMARY KEY (`PermissaoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsuarioPermissao` (
    `UsuarioID` INTEGER NOT NULL,
    `PermissaoID` INTEGER NOT NULL,

    PRIMARY KEY (`UsuarioID`, `PermissaoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RefreshToken` ADD CONSTRAINT `RefreshToken_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PasswordReset` ADD CONSTRAINT `PasswordReset_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Professor` ADD CONSTRAINT `Professor_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Funcionario` ADD CONSTRAINT `Funcionario_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sumario` ADD CONSTRAINT `Sumario_CursoID_fkey` FOREIGN KEY (`CursoID`) REFERENCES `Curso`(`CursoID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sumario` ADD CONSTRAINT `Sumario_ProfessorID_fkey` FOREIGN KEY (`ProfessorID`) REFERENCES `Professor`(`ProfessorID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProfessorCurso` ADD CONSTRAINT `ProfessorCurso_ProfessorID_fkey` FOREIGN KEY (`ProfessorID`) REFERENCES `Professor`(`ProfessorID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProfessorCurso` ADD CONSTRAINT `ProfessorCurso_CursoID_fkey` FOREIGN KEY (`CursoID`) REFERENCES `Curso`(`CursoID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Presenca` ADD CONSTRAINT `Presenca_ProfessorID_fkey` FOREIGN KEY (`ProfessorID`) REFERENCES `Professor`(`ProfessorID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Presenca` ADD CONSTRAINT `Presenca_CursoID_fkey` FOREIGN KEY (`CursoID`) REFERENCES `Curso`(`CursoID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Efetividade` ADD CONSTRAINT `Efetividade_ProfessorID_fkey` FOREIGN KEY (`ProfessorID`) REFERENCES `Professor`(`ProfessorID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Efetividade` ADD CONSTRAINT `Efetividade_CursoID_fkey` FOREIGN KEY (`CursoID`) REFERENCES `Curso`(`CursoID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioPermissao` ADD CONSTRAINT `UsuarioPermissao_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioPermissao` ADD CONSTRAINT `UsuarioPermissao_PermissaoID_fkey` FOREIGN KEY (`PermissaoID`) REFERENCES `Permissao`(`PermissaoID`) ON DELETE RESTRICT ON UPDATE CASCADE;

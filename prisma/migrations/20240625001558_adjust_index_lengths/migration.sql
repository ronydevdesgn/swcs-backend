-- CreateTable
CREATE TABLE `Professor` (
    `ProfessorID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(100) NOT NULL,
    `Departamento` VARCHAR(100) NOT NULL,
    `CargaHoraria` INTEGER NOT NULL,

    PRIMARY KEY (`ProfessorID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sumario` (
    `SumarioID` INTEGER NOT NULL AUTO_INCREMENT,
    `Data` DATETIME(3) NOT NULL,
    `Conteudo` TEXT NOT NULL,
    `CursoID` INTEGER NOT NULL,
    `ProfessorID` INTEGER NOT NULL,

    INDEX `Sumario_CursoID_idx`(`CursoID`),
    INDEX `Sumario_ProfessorID_idx`(`ProfessorID`),
    PRIMARY KEY (`SumarioID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Curso` (
    `CursoID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(100) NOT NULL,
    `Descricao` TEXT NOT NULL,

    PRIMARY KEY (`CursoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Presenca` (
    `PresencaID` INTEGER NOT NULL AUTO_INCREMENT,
    `Data` DATETIME(3) NOT NULL,
    `Estado` ENUM('PRESENTE', 'FALTA') NOT NULL,
    `ProfessorID` INTEGER NOT NULL,

    INDEX `Presenca_ProfessorID_idx`(`ProfessorID`),
    PRIMARY KEY (`PresencaID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Efetividade` (
    `EfetividadeID` INTEGER NOT NULL AUTO_INCREMENT,
    `Data` DATETIME(3) NOT NULL,
    `HorasTrabalhadas` INTEGER NOT NULL,
    `ProfessorID` INTEGER NOT NULL,

    INDEX `Efetividade_ProfessorID_idx`(`ProfessorID`),
    PRIMARY KEY (`EfetividadeID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `UsuarioID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(100) NOT NULL,
    `Email` VARCHAR(100) NOT NULL,
    `SenhaHash` VARCHAR(100) NOT NULL,
    `Tipo` ENUM('SUMARISTA', 'PROFESSOR') NOT NULL,
    `ProfessorID` INTEGER NULL,

    UNIQUE INDEX `Usuario_Email_key`(`Email`),
    UNIQUE INDEX `Usuario_ProfessorID_key`(`ProfessorID`),
    INDEX `Usuario_ProfessorID_idx`(`ProfessorID`),
    PRIMARY KEY (`UsuarioID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Permissao` (
    `PermissaoID` INTEGER NOT NULL AUTO_INCREMENT,
    `Descricao` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`PermissaoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsuarioPermissao` (
    `UsuarioID` INTEGER NOT NULL,
    `PermissaoID` INTEGER NOT NULL,

    PRIMARY KEY (`UsuarioID`, `PermissaoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Sumario` ADD CONSTRAINT `Sumario_CursoID_fkey` FOREIGN KEY (`CursoID`) REFERENCES `Curso`(`CursoID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sumario` ADD CONSTRAINT `Sumario_ProfessorID_fkey` FOREIGN KEY (`ProfessorID`) REFERENCES `Professor`(`ProfessorID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Presenca` ADD CONSTRAINT `Presenca_ProfessorID_fkey` FOREIGN KEY (`ProfessorID`) REFERENCES `Professor`(`ProfessorID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Efetividade` ADD CONSTRAINT `Efetividade_ProfessorID_fkey` FOREIGN KEY (`ProfessorID`) REFERENCES `Professor`(`ProfessorID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_ProfessorID_fkey` FOREIGN KEY (`ProfessorID`) REFERENCES `Professor`(`ProfessorID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioPermissao` ADD CONSTRAINT `UsuarioPermissao_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioPermissao` ADD CONSTRAINT `UsuarioPermissao_PermissaoID_fkey` FOREIGN KEY (`PermissaoID`) REFERENCES `Permissao`(`PermissaoID`) ON DELETE RESTRICT ON UPDATE CASCADE;

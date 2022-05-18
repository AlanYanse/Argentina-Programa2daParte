-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema portfolio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema portfolio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `portfolio` DEFAULT CHARACTER SET utf8 ;
USE `portfolio` ;

-- -----------------------------------------------------
-- Table `portfolio`.`persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`persona` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `apellido` VARCHAR(45) NULL,
  `domicilio` VARCHAR(45) NULL,
  `fecha_nacimiento` DATE NULL,
  `telefono` VARCHAR(12) NULL,
  `sobre_mi` VARCHAR(200) NULL,
  `url_foto` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`tipo_de_empleo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`tipo_de_empleo` (
  `id` INT NOT NULL,
  `nombre_tipo` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`experiencia_laboral`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`experiencia_laboral` (
  `id` INT NOT NULL,
  `nombre_empresa` VARCHAR(45) NULL,
  `es_trabajo_actual` TINYINT NULL,
  `fecha_inicio` DATE NULL,
  `fecha_fin` DATE NULL,
  `descripcion` VARCHAR(200) NULL,
  `table1_id` INT NOT NULL,
  `tipo_de_empleo_id` INT NOT NULL,
  PRIMARY KEY (`id`, `table1_id`),
  CONSTRAINT `fk_table2_table1`
    FOREIGN KEY (`table1_id`)
    REFERENCES `portfolio`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_experiencia_laboral_tipo_de_empleo1`
    FOREIGN KEY (`tipo_de_empleo_id`)
    REFERENCES `portfolio`.`tipo_de_empleo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

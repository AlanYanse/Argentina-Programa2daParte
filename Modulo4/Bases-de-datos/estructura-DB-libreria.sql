-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- Schema biblioteca

-- Schema biblioteca

CREATE SCHEMA IF NOT EXISTS `biblioteca` DEFAULT CHARACTER SET utf8 ;
USE `biblioteca` ;

-- -----------------------------------------------------
-- Table `biblioteca`.`autor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`autor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) CHARACTER SET 'utf8' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`libro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`libro` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `paginas` INT(10) NOT NULL,
  `ISBN` VARCHAR(45) NOT NULL,
  `editorial` VARCHAR(45) NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `ISBN_UNIQUE` (`ISBN` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`ejemplar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`ejemplar` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `localizacion` VARCHAR(45) NOT NULL,
  `libro_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ejemplar_libro1_idx` (`libro_id` ASC) ,
  CONSTRAINT `fk_ejemplar_libro1`
    FOREIGN KEY (`libro_id`)
    REFERENCES `biblioteca`.`libro` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`autor_has_libro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`autor_has_libro` (
  `autor_id` INT NOT NULL,
  `libro_id` INT NOT NULL,
  PRIMARY KEY (`autor_id`, `libro_id`),
  INDEX `fk_autor_has_libro_libro1_idx` (`libro_id` ASC) ,
  INDEX `fk_autor_has_libro_autor_idx` (`autor_id` ASC) ,
  CONSTRAINT `fk_autor_has_libro_autor`
    FOREIGN KEY (`autor_id`)
    REFERENCES `biblioteca`.`autor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_autor_has_libro_libro1`
    FOREIGN KEY (`libro_id`)
    REFERENCES `biblioteca`.`libro` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`usuario_has_ejemplar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`usuario_has_ejemplar` (
  `usuario_id` INT NOT NULL,
  `ejemplar_id` INT NOT NULL,
  `fechaPres` DATE NOT NULL,
  `fechaDev` DATE NULL,
  PRIMARY KEY (`usuario_id`, `ejemplar_id`),
  INDEX `fk_usuario_has_ejemplar_ejemplar1_idx` (`ejemplar_id` ASC) ,
  INDEX `fk_usuario_has_ejemplar_usuario1_idx` (`usuario_id` ASC) ,
  CONSTRAINT `fk_usuario_has_ejemplar_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `biblioteca`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_ejemplar_ejemplar1`
    FOREIGN KEY (`ejemplar_id`)
    REFERENCES `biblioteca`.`ejemplar` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

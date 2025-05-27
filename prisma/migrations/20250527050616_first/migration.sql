-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDIENTE', 'COMPLETADO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "TypeServicio" AS ENUM ('MEDICO', 'TRAUMA', 'PSIQUIATRICO', 'OTRO');

-- CreateEnum
CREATE TYPE "Typecomplicacion" AS ENUM ('RESPIRATORIA', 'CARDIOVASCULAR', 'TRAUMATISMO', 'NEUROLOGICO', 'TRAUMATICO', 'INFECCIOSO', 'OTRO', 'NO_APLICA');

-- CreateEnum
CREATE TYPE "TypeContext" AS ENUM ('ESCOLAR', 'LABORAL', 'DEPORTIVO', 'PUBLICO', 'OTRO');

-- CreateTable
CREATE TABLE "Servicio" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL,
    "time_arrived" TIMESTAMP(3) NOT NULL,
    "time_finish" TIMESTAMP(3) NOT NULL,
    "code_start" TEXT NOT NULL,
    "code_end" TEXT NOT NULL,
    "place_accident" TEXT NOT NULL,
    "nro_informe" TEXT NOT NULL,
    "id_paciente" INTEGER NOT NULL,
    "id_turno" INTEGER NOT NULL,

    CONSTRAINT "Servicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Complicacion" (
    "id" SERIAL NOT NULL,
    "type" "Typecomplicacion" NOT NULL,
    "description" TEXT NOT NULL,
    "id_servicio" INTEGER NOT NULL,

    CONSTRAINT "Complicacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Descripcion" (
    "id" SERIAL NOT NULL,
    "hallazgos" TEXT NOT NULL,
    "motivo_atencion" TEXT NOT NULL,
    "antecedentes" TEXT NOT NULL,
    "examen_fisico" TEXT NOT NULL,
    "id_servicio" INTEGER NOT NULL,

    CONSTRAINT "Descripcion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Descripcion_id_servicio_key" ON "Descripcion"("id_servicio");

-- AddForeignKey
ALTER TABLE "Complicacion" ADD CONSTRAINT "Complicacion_id_servicio_fkey" FOREIGN KEY ("id_servicio") REFERENCES "Servicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Descripcion" ADD CONSTRAINT "Descripcion_id_servicio_fkey" FOREIGN KEY ("id_servicio") REFERENCES "Servicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

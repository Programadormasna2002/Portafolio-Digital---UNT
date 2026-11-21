-- CreateEnum
CREATE TYPE "TipoEvidencia" AS ENUM ('DOCUMENTO', 'PDF', 'IMAGEN', 'VIDEO', 'ENLACE');

-- CreateEnum
CREATE TYPE "ClaveSeccion" AS ENUM ('PRESENTACION', 'INTRODUCCION', 'CONCLUSION', 'REFLEXION');

-- CreateTable
CREATE TABLE "Unidad" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "imagenUrl" TEXT,
    "orden" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Unidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evidencia" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,
    "contenido" TEXT,
    "tipo" "TipoEvidencia" NOT NULL,
    "archivoUrl" TEXT,
    "imagenUrl" TEXT,
    "palabrasClave" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "orden" INTEGER NOT NULL DEFAULT 0,
    "unidadId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Evidencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seccion" (
    "id" SERIAL NOT NULL,
    "clave" "ClaveSeccion" NOT NULL,
    "titulo" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "imagenUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Seccion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Unidad_slug_key" ON "Unidad"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Unidad_orden_key" ON "Unidad"("orden");

-- CreateIndex
CREATE UNIQUE INDEX "Seccion_clave_key" ON "Seccion"("clave");

-- AddForeignKey
ALTER TABLE "Evidencia" ADD CONSTRAINT "Evidencia_unidadId_fkey" FOREIGN KEY ("unidadId") REFERENCES "Unidad"("id") ON DELETE CASCADE ON UPDATE CASCADE;

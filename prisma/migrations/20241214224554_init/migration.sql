/*
  Warnings:

  - The primary key for the `Pdf` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `filePath` on the `Pdf` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Pdf` table. All the data in the column will be lost.
  - Added the required column `name` to the `Pdf` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Pdf` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pdf" DROP CONSTRAINT "Pdf_pkey",
DROP COLUMN "filePath",
DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pdf_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Pdf_id_seq";

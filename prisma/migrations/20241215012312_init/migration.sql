/*
  Warnings:

  - You are about to drop the column `url` on the `Pdf` table. All the data in the column will be lost.
  - Added the required column `filePath` to the `Pdf` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filename` to the `Pdf` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pdf" DROP COLUMN "url",
ADD COLUMN     "filePath" TEXT NOT NULL,
ADD COLUMN     "filename" TEXT NOT NULL;

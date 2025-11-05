-- CreateTable
CREATE TABLE "donations" (
    "id" SERIAL NOT NULL,
    "donor_name" TEXT NOT NULL,
    "contact_number" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "blood_group" TEXT NOT NULL,
    "hospital" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "donations_pkey" PRIMARY KEY ("id")
);

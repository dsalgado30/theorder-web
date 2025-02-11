CREATE TYPE "Role" AS ENUM (
  'Client',
  'Admin',
  'Cook'
);

CREATE TYPE "OrderStatus" AS ENUM (
  'EnEspera',
  'EnPreparacion',
  'Listo',
  'Despachado'
);

CREATE TYPE "PackageType" AS ENUM (
  'ParaLlevar',
  'ParaEnSitio'
);

CREATE TABLE "user" (
  "id" serial PRIMARY KEY,
  "name" varchar,
  "last_name" varchar,
  "email" varchar,
  "password" varchar,
  "role" public."Role",
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "company" (
  "id" serial PRIMARY KEY,
  "name" varchar,
  "photo" text,
  "nit" varchar(20)
);

CREATE TABLE "product" (
  "id" serial PRIMARY KEY,
  "name" varchar,
  "description" text,
  "photo" text,
  "price" decimal,
  "company_id" integer
);

CREATE TABLE "order" (
  "id" serial PRIMARY KEY,
  "is_home_delivery" bool,
  "status" public."OrderStatus",
  "package_type" public."PackageType",
  "created_at" timestamp DEFAULT (now()),
  "modify_at" timestamp,
  "total" decimal,
  "user_id" integer
);

CREATE TABLE "order_detail" (
  "id" serial PRIMARY KEY,
  "product_id" integer,
  "order_id" integer,
  "quantity" integer,
  "price" decimal
);

CREATE TABLE "order_history" (
  "id" serial PRIMARY KEY,
  "order_id" integer,
  "status" public."OrderStatus",
  "created_at" timestamp DEFAULT (now())
);

COMMENT ON COLUMN "company"."photo" IS 'Content of base64 image';

COMMENT ON COLUMN "product"."description" IS 'Content of the product';

COMMENT ON COLUMN "product"."photo" IS 'Content of base64 image';

ALTER TABLE "product" ADD FOREIGN KEY ("company_id") REFERENCES "company" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "order_detail" ADD FOREIGN KEY ("order_id") REFERENCES "order" ("id");

ALTER TABLE "order_detail" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("id");

ALTER TABLE "order_history" ADD FOREIGN KEY ("order_id") REFERENCES "order" ("id");
